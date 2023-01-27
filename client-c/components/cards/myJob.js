import { Avatar, Card,  Popconfirm } from 'antd';
import {  DeleteOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { UserContext } from '../../context';
import { toast } from 'react-toastify';
import axios from 'axios';
import Link from 'next/link';
const { Meta } = Card;
const MyJob = ({
  jobTitle,
  bannerUrl,
  postedByUser,
  width,
  postedBy,
  _id,
  userImage,
  handleDelete,
}) => {
  const [state] = useContext(UserContext);
  const handleDeleteJob = async (e) => {
    try {
      const postId = e;
      const { data } = await axios.put('/delete-job', { postID: postId });
      if (data.info) {
        toast.warning('Post has been deleted', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      handleDelete(postId);
    } catch (error) {
      console.log(error);
    }
  };


  const DeleteJob = (_id) => {
    const postId = _id;
    const confirm = (e) => {
      handleDeleteJob(postId);
    };
    return (
      <Popconfirm
        title='Delete this job post ? '
        onConfirm={confirm}
        okText='Yes'
        cancelText='No'>
        <a href='#'>
          <DeleteOutlined />
        </a>
      </Popconfirm>
    );
  };

  return (
    <Card
      className='mx-1 mb-4'
      hoverable
      style={{
        width: width,
      }}
      cover={
        <img
          height='210px'
          className='mt-2'
          src={bannerUrl}
        />
      }
      actions={[
        state && state.user && state.user._id == postedBy && DeleteJob(_id),
      ]}>
      <Link href={`/job/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
        <Meta
          style={{ width: '250px', height: '80px' }}
          avatar={
            <Avatar src={userImage}>
              {postedByUser.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={<span className='text-sm'>{postedByUser}</span>}
          description={<span className='h6 text-muted'>{jobTitle}</span>}
        />
      </Link>
    </Card>
  );
};
export default MyJob;
