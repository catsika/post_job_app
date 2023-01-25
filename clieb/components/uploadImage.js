import { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Modal, Upload } from 'antd';
import axios from 'axios';

const UploadImage = ({ fileList, setFileList }) => {
  const [loading, setLoading] = useState(false);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append('image', file);
    // console.log([...formData]);
    try {
      setLoading(true);
      const { data } = await axios.post('/upload-profilepic', formData);
      setFileList({
        url: data.url,
        public_id: data.public_id,
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const uploadButton = (
    <div
      className='card'
      style={{ width: '100px', height: '95px' }}>
      <label>
        <Avatar
          shape='square'
          size={80}
          style={{backgroundColor:'#c7ccbe'}}
          className='d-flex justify-content-center mx-2 mt-2'
          src={fileList && fileList.url}>
          {loading && <LoadingOutlined spin className='h4'/>}
        </Avatar>
        <input
          onChange={handleImage}
          type='file'
          accept='.png,.jpg,.jpeg'
          hidden
        />
        <div
          style={{
            marginTop: 8,
          }}></div>
      </label>
    </div>
  );
  return <>{uploadButton}</>;
};
export default UploadImage;
