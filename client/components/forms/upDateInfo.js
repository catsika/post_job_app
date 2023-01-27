import { useState, useContext } from 'react';
import { UserContext } from '../../context/index';
import { Button, Form, Input, Select } from 'antd';

const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 20,
    },
    sm: {
      span: 25,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 23,
      offset: 0,
    },
    sm: {
      span: 18,
      offset: 6,
    },
  },
};
const UpdateInfo = ({
  email,
  ctrystate,
  zip,
  address,
  city,
  setAddress,
  setCity,
  setZip,
  setctryState,
  setEmail,
  updateProfile,
}) => {
  const [state] = useContext(UserContext);
  const [validMail, setValidEmail] = useState();
  const [form] = Form.useForm();
  const onFinish = (values) => {
  };

  const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) setValidEmail(true);
    else {
      setValidEmail(false);
    }
  };

  return (
    <div className='container mx-5'>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        scrollToFirstError>
        <Form.Item>
          <div className='formx '>
            <div className='mb-3'>
              <label className='form-label'>First Name</label>
              <input
                disabled
                defaultValue={
                  state && state.user && state.user.fullname.firstname
                }
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3 mx-3'>
              <label className='form-label'>Last Name</label>
              <input
                disabled
                defaultValue={
                  state && state.user && state.user.fullname.lastname
                }
                type='text'
                className='form-control'
              />
            </div>
          </div>
        </Form.Item>

        <Form.Item>
          <div className='formx'>
            <div className='mb-3'>
              <label className='form-label'>Email address</label>
              <input
                defaultValue={state && state.user && state.user.email}
                type='email'
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
            </div>
            <div className='mb-3 mx-3'>
              <label className='form-label'>Password</label>
              <input
                disabled
                defaultValue={'XXX-XXX-XXX-XXX'}
                type='password'
                className='form-control'
              />
            </div>
          </div>
        </Form.Item>

        <Form.Item>
          <div className='formx'>
            <div className='mb-3'>
              <label className='form-label'>Address</label>
              <input
                defaultValue={
                  state && state.user && state.user.fulladdress.address
                }
                type='text'
                className='form-control'
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className='mb-3 mx-3'>
              <label className='form-label'>City</label>
              <input
                defaultValue={
                  state && state.user && state.user.fulladdress.city
                }
                type='text'
                className='form-control'
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </Form.Item>

        <Form.Item>
          <div className='formx'>
            <div className='mb-3'>
              <label className='form-label'>State</label>
              <input
                defaultValue={
                  state && state.user && state.user.fulladdress.state
                }
                type='text'
                className='form-control'
                onChange={(e) => setctryState(e.target.value)}
              />
            </div>

            <div className='mb-3 mx-3'>
              <label className='form-label'>Zip</label>
              <input
                defaultValue={state && state.user && state.user.fulladdress.zip}
                type='text'
                className='form-control'
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
        </Form.Item>

        <Form.Item>
          <div className='mb-3'>
            <label className='form-label'>Country/Region</label>
            <input
              style={{ width: '460px' }}
              type='text'
              className='form-control'
              defaultValue={
                state &&
                state.user &&
                state.user.fulladdress &&
                state.user.fulladdress.country
              }
              disabled={true}
            />
          </div>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            disabled={email && !validMail || email == ''}
            className='btn btn-primary'
            style={{width:"200px",height:"50px"}}
            onClick={updateProfile}
            type='primary'
            htmlType='submit'>
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateInfo;
