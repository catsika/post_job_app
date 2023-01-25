import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context';
import { Button, Pagination } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Overview, Description, Review, Gallery } from './forms/postJobForm';
import axios from 'axios';
import ShowJob from './cards/showJob';
import UserProfile from './cards/userProfile';
import { toast } from 'react-toastify';
import MyJob from './cards/myJob';


export const PostJob = ({ setCurrentTab }) => {
  const [activeTabKey1, setActiveTabKey1] = useState('overview');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [fileList, setFileList] = useState();
  const [currentJobCat, setCurrentJobCat] = useState('');
  const [jobTags, setJobTags] = useState([]);
  const CategoryData = [
    'Marketing',
    'Programming',
    'Design',
    'Business',
    'Writing',
  ];
  const [state] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const subCategoryData = {
    Marketing: [
      'Digital marketing',
      'Content marketing',
      'Affiliate marketing',
      'Social media marketing',
      'Search engine optimization',
      'Email marketing',
    ],
    Programming: [
      'Web development',
      'Mobile development',
      'Game development',
      'Desktop development',
      'Artificial intelligence',
      'Data science',
    ],
    Design: [
      'Graphic design',
      'UX design',
      'UI design',
      'Motion design',
      '3D modeling',
      'Illustration',
    ],
    Business: [
      'Entrepreneurship',
      'Finance',
      'Management',
      'Project management',
      'Leadership',
      'Strategy',
    ],
    Writing: [
      'Creative writing',
      'Copywriting',
      'Technical writing',
      'Content writing',
      'Journalism',
      'Editing',
    ],
  };

  const [jobCategory, setJobCategory] = useState(
    subCategoryData[CategoryData[0]]
  );
  const [subCategory, setSubCategory] = useState(
    subCategoryData[CategoryData[0]][0]
  );

  const handleCategoryChange = (value) => {
    setJobCategory(subCategoryData[value]);
    setSubCategory(subCategoryData[value][0]);
    setCurrentJobCat(value);
  };
  const onSubCategoryChange = (value) => {
    setSubCategory(value);
  };

  const onTab1Change = (key) => {
    if (activeTabKey1 == 'overview') {
      jobTitle && currentJobCat && subCategory && setActiveTabKey1(key);
    }

    if (activeTabKey1 == 'description') {
      jobDescription.length >= 120 && setActiveTabKey1(key);
    }

    if (activeTabKey1 == 'gallery') {
      fileList && setActiveTabKey1(key);
    }

    if (activeTabKey1 == 'review') {
      setActiveTabKey1(key);
    }
  };

  const handlePublish = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/publish-job', {
        jobTitle,
        jobDescription,
        currentJobCat,
        subCategory,
        jobTags,
        imgUrl: fileList,
      });
      if (data._id) {
        toast.success('Job Posted successfuly', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          setCurrentTab(1);
        }, 5000);
      } else {
        toast.error('Something went wrong . Please try again later.', {
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
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const checkCurrentTabs = () => {
    if (activeTabKey1 == 'overview') {
      if (jobTitle && currentJobCat && subCategory) onTab1Change('description');
    }
    if (activeTabKey1 == 'description') {
      if (jobDescription.length < 120) {
        console.log('f');
        toast(
          'Minimum word count for description should be more than 120 words',
          {
            position: 'bottom-right',
            autoClose: 5000,
            theme: 'light',
          }
        );
      }
      if (jobDescription && jobDescription.length >= 120)
        onTab1Change('gallery');
    }
    if (activeTabKey1 == 'gallery') {
      if (fileList) {
        onTab1Change('review');
      }
    }
    if (activeTabKey1 == 'review') {
      handlePublish();
    }
  };

  const tabList = [
    {
      key: 'overview',
      tab: 'Overview',
    },
    {
      key: 'description',
      tab: 'Description',
    },
    {
      key: 'gallery',
      tab: 'Gallery',
    },

    {
      key: 'review',
      tab: 'Review & Publish',
    },
  ];

  const contentList = {
    overview: (
      <Overview
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        setJobDescription={setJobDescription}
        jobDescription={jobDescription}
        subCategory={subCategory}
        jobCategory={jobCategory}
        onSubCategoryChange={onSubCategoryChange}
        handleCategoryChange={handleCategoryChange}
        CategoryData={CategoryData}
        subCategoryData={subCategoryData}
        currentJobCat={currentJobCat}
        jobTags={jobTags}
        setJobTags={setJobTags}
      />
    ),
    description: (
      <Description
        onTab1Change={onTab1Change}
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
      />
    ),
    gallery: (
      <Gallery
        fileList={fileList}
        setFileList={setFileList}
      />
    ),
    review: (
      <Review
        jobTitle={jobTitle}
        jobDescription={jobDescription}
        fileList={fileList}
      />
    ),
  };

  return (
    <div className='container'>
      <Card
        style={{ width: '1000px', height: '750px' }}
        title='POST A JOB OFFER'
        className='mx-4 mt-5'
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}>
        {contentList[activeTabKey1]}
      </Card>
      <hr className='mt-5' />
      <div className='row float-end mx-5 mt-2'>
        <Button
          disabled={loading}
          className='btn btn-primary'
          style={{ width: '200px', height: '50px' }}
          onClick={() => {
            checkCurrentTabs();
          }}>
          {loading ? (
            <LoadingOutlined spin />
          ) : activeTabKey1 == 'review' ? (
            'Publish'
          ) : (
            'Save & Continue'
          )}
        </Button>
      </div>
    </div>
  );
};

export const DisplayJob = () => {
  const [jobs, setJobs] = useState([]);
  const [deletedJobIds, setDeletedJobIds] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [state] = useContext(UserContext);
  const nonDeletedJobs = jobs.filter((job) => !deletedJobIds.includes(job._id));
  const handleDelete = (id) => {
    setDeletedJobIds((prevState) => [...prevState, id]);
  };


  useEffect(() => {
    {
      try {
        handleGetJobs();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    {
      try {
        handleGetJobs();
      } catch (error) {
        console.error(error);
      }
    }
  }, [state && state.token, page]);

  const handleGetJobs = async () => {
    try {
      const { data } = await axios.get(`/get-alljobs${page}`);
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleTotalJobs();
  }, [state && state.token && state.user ]);

  const handleTotalJobs = async () => {
    try {
      const { data } = await axios.get('/total-jobs');
      setTotalPosts(data);
    } catch (error) {
      console.error(error);
    }
  };


  const totalPages = Math.ceil(totalPosts / 2);

  return (
    <div className='container-fluid'>
      <div className='row'>
        {jobs.length > 0
          ? nonDeletedJobs.map((job) => (
              <ShowJob
                jobTitle={job.jobTitle}
                jobDescription={job.jobDescription}
                bannerUrl={job.imgUrl && job.imgUrl.url}
                postedByUser={job.postedBy.fullname.firstname}
                postedBy={job.postedBy._id}
                _id={job._id}
                width={300}
                userImage={job.postedBy.image.url}
                handleDelete={handleDelete}
                createdat={job.createdAt}
                review={false}
              />
            ))
          : Array(20)
              .fill()
              .map((_, index) => (
                <Card
                  className='mx-2'
                  loading={true}
                  style={{
                    width: '300px',
                    height: '300px',
                  }}
                />
              ))}
      </div>
      <div
        style={{ left: 0, right: 0, bottom: 0 }}
        className='mb-3'>
        {jobs.length > 0 && (
          <Pagination
            total={totalPosts}
            pageSize={20}
            style={{ display: 'flex', justifyContent: 'center' }}
            current={page}
            onChange={(value) => setPage(value)}
          />
        )}
      </div>
    </div>
  );
};

export const DProfile = () => {
  return <UserProfile />;
};

export const UserJobs = () => {
  const [state] = useContext(UserContext);
  const [jobs, setJobs] = useState([]);
  const [deletedJobIds, setDeletedJobIds] = useState([]);
  const nonDeletedJobs = jobs.filter((job) => !deletedJobIds.includes(job._id));
  const handleDelete = (id) => {
    setDeletedJobIds((prevState) => [...prevState, id]);
  };

  useEffect(() => {
    {
      try {
        handleGetJobs();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const handleGetJobs = async () => {
    try {
      const { data } = await axios.get('/get-myjobs');
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        {jobs.length > 0
          ? nonDeletedJobs.map((job) => (
              <MyJob
                jobTitle={job.jobTitle}
                jobDescription={job.jobDescription}
                bannerUrl={job.imgUrl && job.imgUrl.url}
                postedByUser={job.postedBy.fullname.firstname}
                postedBy={job.postedBy._id}
                _id={job._id}
                width={300}
                userImage={state && state.user && state.user.image.url}
                handleDelete={handleDelete}
              />
            ))
          : Array(20)
              .fill()
              .map((_, index) => (
                <Card
                  className='mx-2 mb-4'
                  loading={true}
                  style={{
                    width: '300px',
                    height: '300px',
                  }}
                />
              ))}
      </div>
    </div>
  );
};
