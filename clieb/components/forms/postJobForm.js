import { Input, Select } from 'antd';
import ShowJOb from '../cards/showJob';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import UploadImage from '../uploadImage';
import { useContext } from 'react';
import { UserContext } from '../../context';
export const Overview = ({
  jobTitle,
  setJobTitle,
  jobCategory,
  handleCategoryChange,
  onSubCategoryChange,
  subCategory,
  CategoryData,
  jobTags,
  currentJobCat,
  setJobTags,
}) => {
  return (
    <div className='container'>
      <div
        className='card mb-3 mx-3 d-flex'
        style={{ maxWidth: 800 }}>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <h5 className='card-title mx-3 mt-2'>Gig title</h5>
            <p
              className='card-text text-wrap mx-3 text-muted'
              style={{ width: '10rem' }}>
              As your Gig storefront, your title is the most important place to
              include keywords that buyers would likely use to search for a
              service like yours.{' '}
            </p>
          </div>
          <div className='col-md-8 mt-5'>
            <div className='card-body'>
              <Input.TextArea
                showCount
                maxLength={100}
                style={{
                  resize: 'none',
                }}
                onChange={(e) => setJobTitle(e.target.value)}
                value={jobTitle}
              />
            </div>
          </div>
        </div>

        <div className='row no-gutters mt-5'>
          <div className='col-md-4'>
            <h5 className='card-title mx-3'>Category</h5>
            <p
              className='card-text text-wrap mx-3 text-muted'
              style={{ width: '10rem' }}>
              Choose the category and sub-category most suitable for your Gig.
            </p>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <Select
                className='p-2'
                style={{
                  width: 230,
                }}
                value={currentJobCat}
                onChange={handleCategoryChange}
                options={CategoryData.map((mainCat) => ({
                  label: mainCat,
                  value: mainCat,
                }))}
              />
              <Select
                style={{
                  width: 230,
                }}
                disabled={!currentJobCat}
                className='mx-3 p-2'
                value={subCategory}
                onChange={onSubCategoryChange}
                options={jobCategory.map((cat) => ({
                  label: cat,
                  value: cat,
                }))}
              />
            </div>
          </div>
        </div>

        <div className='row no-gutters mt-5'>
          <div className='col-md-4'>
            <h5 className='card-title mx-3'>Search tags</h5>
            <p
              className='card-text text-wrap mx-3 text-muted'
              style={{ width: '10rem' }}>
              Tag your Gig with buzz words that are relevant to the services you
              offer. Use all 5 tags to get found.
            </p>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <Select
                mode='tags'
                value={jobTags}
                style={{
                  width: '100%',
                }}
                onChange={(value) => {
                  setJobTags(value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Description = ({ jobDescription, setJobDescription }) => {
  return (
    <div className='container'>
      <div className='col-md-8'>
        <div className='card-body'>
          <p className='text-muted h5'>Briefly Describe Your Gig</p>
          <ReactQuill
            theme='snow'
            onChange={(e) => setJobDescription(e)}
            className='mt-3'
            value={jobDescription}
            style={{ width: 'auto', height: '350px' }}
          />
        </div>
      </div>
    </div>
  );
};

export const Gallery = ({ setFileList, fileList }) => {
  return (
    <div className='container'>
      <div>
        <p className='h2'>Showcase Your Services In A Gig Gallery.</p>
        <p>
          Encourage buyers to choose your Gig by featuring a variety of your
          work.
        </p>
        <div
          className='card'
          style={{ width: '700px', height: '80px' }}>
          <div className='card-body'>
            <p>
              To comply with our terms of service, make sure to upload only
              content you either own or you have the permission or license to
              use..
            </p>
          </div>
          <hr />
        </div>
        <div>
          <p className='h6 mt-5'>Job Banner </p>
          <p className='text-muted'>
            Get noticed by the right buyers with visual examples of your
            services.{' '}
          </p>
          <UploadImage
            fileList={fileList}
            setFileList={setFileList}
          />
        </div>
      </div>
    </div>
  );
};

export const Review = ({ jobTitle, jobDescription, fileList }) => {
  const [state] = useContext(UserContext);
  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className='card badge text-wrap p-4 mb-4'>
        <h2 className='text-muted mb-4'>
          Please review your post carefully before making it visible to other
          users on the website. If you are satisfied with the content and
          formatting of your post, simply click the 'Publish' button to share it
          with the community.
        </h2>
      </div>
      <div className='container d-flex justify-content-center'>
        <div className='mb-4 ShowJob'>
          <ShowJOb
            jobTitle={jobTitle}
            jobDescription={jobDescription}
            bannerUrl={fileList && fileList.url}
            postedByUser={state && state.user && state.user.fullname.lastname}
            width={300}
            review={true}
          />
        </div>
      </div>
    </div>
  );
};
