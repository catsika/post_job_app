import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'antd';
import axios from 'axios';
import { Personal, Address, SubmitForm } from '../components/forms/signUp';
import { toast } from 'react-toastify';
const SignUp = () => {
  const [country, setCountry] = useState([]);
  const [sortedCountries] = useState([]);
  const [activeTabKey1, setActiveTabKey1] = useState('personalKey');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [countryState, setCountryState] = useState('');
  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  var selectedCountry = '' | 'Afghanistan';
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      getSelectedCountry();
      const { data } = await axios.post('/sign-up', {
        firstname,
        lastname,
        dob,
        email,
        password,
        address,
        city,
        countryState,
        zip,
        selectedCountry,
      });
      setLoading(false);
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Account Created. Redirecting to login page.');
        setTimeout(() => {
          router.push('/login');
        }, 5000);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    console;
  };

  const getCountries = async () => {
    try {
      const { data } = await axios(`https://restcountries.com/v3.1/all`);
      setCountry(data);
      country.map((ctr) => sortedCountries.push(ctr.name.common));
      sortedCountries.sort();
    } catch (error) {
      console.error(error);
    }
  };
  const getSelectedCountry = async () => {
    try {
      let dropdownList = document.getElementById('select_box');
      selectedCountry = dropdownList.value;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (sortedCountries.length == 0) getCountries();
  }, [activeTabKey1]);

  const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) setValidEmail(true);
  };

  const tabList = [
    {
      key: 'personalKey',
      tab: 'Personal',
    },
    {
      key: 'addressKey',
      tab: 'Address',
    },
  ];

  const contentList = {
    personalKey: (
      <Personal
        firstname={firstname}
        lastname={lastname}
        dob={dob}
        email={email}
        password={password}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setDob={setDob}
        setPassword={setPassword}
        setValidEmail={setValidEmail}
        validEmail={validEmail}
        validateEmail={validateEmail}
      />
    ),

    addressKey: (
      <Address
        city={city}
        address={address}
        country={country}
        zip={zip}
        countryState={countryState}
        selectedCountry={selectedCountry}
        setCity={setCity}
        setAddress={setAddress}
        setZip={setZip}
        setCountryState={setCountryState}
        sortedCountries={sortedCountries}
        getCountries={getCountries}
        getSelectedCountry={getSelectedCountry}
        handleSubmit={handleSubmit}
        loading={loading}
        setLoading={setLoading}
      />
    ),
    submitKey: <SubmitForm handleSubmit={handleSubmit} />,
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <div className='h-100 d-flex align-items-center justify-content-center p-5  overlay'>
      <div className='row container'>
        <div className='col-md-6 offset-md-3 gap-3'>
          <Card
            style={{ width: '100%' }}
            title='SIGN UP'
            className='pop-out-card'
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={(key) => {
              firstname &&
                lastname &&
                dob &&
                email &&
                validEmail &&
                password &&
                onTab1Change(key);
            }}>
            {contentList[activeTabKey1]}
            <div className='text-center mt-1'>
              
             < a href='/login'>   Already have an account? Login here.</a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
  
};

export default SignUp;
