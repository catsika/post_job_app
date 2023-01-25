import { LoadingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context';
import UpdateInfo from '../forms/upDateInfo';
import axios from 'axios';
const UserProfile = () => {
  const [uploading, setUploading] = useState(false);
  const [state, setState] = useContext(UserContext);
  const [imgUrl, setImage] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [zip, setZip] = useState();
  const [city, setCity] = useState();
  const [ctrystate, setctryState] = useState();
  const [address, setAddress] = useState();
  const country = state && state.user && state.user.fulladdress.country
  useEffect(() => {
    if (imgUrl) {
      try {
        updateProfilePic();
      } catch (error) {
        console.error(error);
      }
    }
  }, [imgUrl]);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append('image', file);
    // console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post('/upload-profilepic', formData);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  const updateProfilePic = async () => {
    await axios
      .post('/update-profilepic', imgUrl)
      .then((response) => {
        const { data } = response;
        let auth = JSON.parse(localStorage.getItem('auth'));
        auth.user = data;
        localStorage.setItem('auth', JSON.stringify(auth));
        setState({ ...state, user: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateProfile = async () => {
    try {
      const { data } = await axios.put('/update-profile', {
        email,
        password,
        ctrystate,
        zip,
        city,
        address,
        country
      });
      let auth = JSON.parse(localStorage.getItem('auth'));
      auth.user = data;
      localStorage.setItem('auth', JSON.stringify(auth));
      setState({ ...state, user: data });
    } catch (error) {}
  };
  return (
    <div className='container' >
      <div
        className='card offset-md-3'
        style={{ width: '600px', height: '850px' }}>
        <div className='d-flex justify-content-center mt-4'>
          <label>
            {!uploading && state && state.user && state.user.image ? (
              <div className='profilepic'>
                <Avatar
                  size={160}
                  src={state.user.image.url}
                />
                <div className='profilepic__content'>
                  <span className='profilepic__icon'>
                    <i className='fas fa-camera' />
                  </span>
                  <img
                    src='/images/cameraIcon.png'
                    className='profilepic__text'
                  />
                </div>
              </div>
            ) : uploading ? (
              <LoadingOutlined className='mt-2 btn btn-primary h1' />
            ) : (
              <div className='profilepic'>
                <Avatar size={160}>
                  <span className='missing-profile'>
                    {state &&
                      state.user &&
                      state.user.fullname.firstname.charAt(0)}
                  </span>
                </Avatar>
                <div className='profilepic__content'>
                  <span className='profilepic__icon'>
                    <i className='fas fa-camera' />
                  </span>
                  <img
                    src='/images/cameraIcon.png'
                    className='profilepic__text'
                  />
                </div>
              </div>
            )}
            <input
              onChange={state && state.token && handleImage}
              type='file'
              accept='.png,.jpg,.jpeg'
              hidden
            />
          </label>

          <hr />
        </div>
        <hr
          className='mx-4'
          style={{ width: '550px' }}
        />
        <div className='mt-4'>
          <UpdateInfo
            email={email}
            password={password}
            ctrystate={ctrystate}
            zip={zip}
            address={address}
            city={city}
            setAddress={setAddress}
            setCity={setCity}
            setZip={setZip}
            setctryState={setctryState}
            setEmail={setEmail}
            setPassword={setPassword}
            updateProfile={updateProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
