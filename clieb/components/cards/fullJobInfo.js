import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Avatar, Button, Card, Rate } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import renderHtml from 'react-render-html';
import moment from 'moment';
import { Tabs } from 'antd';

const { Meta } = Card;
const ShowJobComplete = () => {
  const router = useRouter();
  const [job, setJob] = useState();
  const id = router.query._id;
  const { TabPane } = Tabs;

  useEffect(() => {
    if (id) getJobInfo();
  }, [id]);

  const getJobInfo = async () => {
    const { data } = await axios.get(`/get-job/${router.query._id}`);
    setJob(data);
  };

  return job ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
      }}
      className='gig-container'>
      <div style={{ width: '750px', height: 'auto', overflow: 'auto' }}>
        <h4 className='text-display'>{job && job.jobTitle}</h4>

        <hr />

        <div
          className='card mb-5 mt-2 col-md-2'
          style={{ width: 'auto' }}>
          <img
            src={job && job.imgUrl.url}
            className='card-img'
            alt='...'
          />
        </div>
        <div>
          <div>
            <div style={{ display: 'flex' }}>
              <Card
                className='mt-3'
                title='About The Seller'
                style={{
                  display: 'inline-block',
                  width: '50%',
                  marginRight: '10px',
                }}>
                <Meta
                  className='d-flex'
                  avatar={
                    <Avatar
                      size={100}
                      src={job && job.postedBy.image.url}>
                      {job &&
                        job.postedBy.fullname.firstname.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={
                    <span className='fw-bold mx-3'>
                      {job && job.postedBy.fullname.firstname}
                    </span>
                  }
                  description={
                    <span className='fw-bold mx-3 text-muted'>
                      <br />
                      <Rate className='mx-3' />
                      <br />
                      <Button
                        className='mx-3 btn btn-primary mt-3'
                        style={{ height: '45px', width: '150px' }}
                        disabled={true}>
                        <span>Contact Me</span>
                      </Button>
                    </span>
                  }
                />
              </Card>
              <Card
                className='mt-3'
                title="Seller's Information"
                style={{
                  display: 'inline-block',
                  width: '50%',
                  marginLeft: '10px',
                }}>
                <div
                  className='card-body'
                  style={{ overflow: 'auto' }}>
                  <p>
                    <span className='custom-text-class font-weight-bold'>
                      Name:
                    </span>
                    <span className='key-info'>
                      {job &&
                        `${job.postedBy.fullname.firstname} ${job.postedBy.fullname.lastname}`}
                    </span>
                  </p>
                  <p>
                    <span className='custom-text-class font-weight-bold'>
                      Email:
                    </span>
                    <span className='key-info'>
                      {job && job.postedBy.email}
                    </span>
                  </p>
                  <p>
                    <span className='custom-text-class font-weight-bold'>
                      Country:
                    </span>
                    <span className='key-info'>
                      {job && job.postedBy.fulladdress.country}
                    </span>
                  </p>
                  <p>
                    <span className='custom-text-class font-weight-bold'>
                      Joined:
                    </span>
                    <span className='key-info'>
                      {job && moment(job.postedBy.createdAt).fromNow()}
                    </span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultActiveKey='1'>
        <TabPane
          tab='About This Gig'
          key='1'>
          <div
            className='card'
            style={{ width: '550px', height: '800px', overflowY: 'auto' }}>
            <div className='card-body'>
              <div className='card-content description-content'>
                {job &&
                  job.jobDescription &&
                  renderHtml(job && job.jobDescription)}
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  ) : (
    <LoadingOutlined
      spin
      className='parent-container'
      style={{
        fontSize: '48px',
        color: 'blue',
      }}
    />
  );
};

export default ShowJobComplete;
