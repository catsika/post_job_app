import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context';
import { useRouter } from 'next/router';
import { Card } from 'antd';
import axios from 'axios';
import { SignIn } from '../components/forms/login';
import { toast } from 'react-toastify';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [state, setState] = useContext(UserContext);


  useEffect(() => {
    if (state && state.token) {
      router.push('/dashboard');
    }
  }, [state]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { data } = await axios.post('/sign-in', {
        email,
        password,
      });
      setLoading(false);
      if (data.error) {
        toast.error(data.error);
      } else {
        setState({
          user: data.user,
          token: data.token,
        });
        window.localStorage.setItem('auth', JSON.stringify(data));
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className='h-100 d-flex align-items-center justify-content-center p-5 overlay'>
      <div className='row container'>
        <div className='col-md-6 offset-md-3 gap-3'>
          <Card
            style={{ width: '100%' }}
            title='SIGN IN'
            className='pop-out-card'>
            <SignIn
              email={email}
              password={password}
              handleSubmit={handleSubmit}
              loading={loading}
              setPassword={setPassword}
              setEmail={setEmail}
            />
            <div className='text-center mt-1'>
              <a href='/signup'>Don't have an account? Sign Up</a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );


};

export default Login;
