import React, { useState, useContext, useEffect } from 'react';
import { Layout, Menu, theme, Card } from 'antd';
import { UserContext } from '../../context';
import { useRouter } from 'next/router';
import {
  EyeOutlined,
  LogoutOutlined,
  RollbackOutlined
} from '@ant-design/icons';
import ShowJobComplete from '../../components/cards/fullJobInfo';
const ViewJob = () => {
  const router = useRouter();
  const { Content, Sider } = Layout;
  const [state, setState] = useContext(UserContext);
  const [currentTab, setCurrentTab] = useState('1');
  const handleLogout = () => {
    try {
      setState(null);
      window.localStorage.removeItem('auth');
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };


  const settingLabels = [
    'Job',
    'Return',
    'Logout',
  ];
  const items = [
    EyeOutlined,
    RollbackOutlined,
    LogoutOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `${settingLabels[index]}`,
  }));
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const returntoHome = () => {
    router.push('/dashboard')
  }


  const tabContent = {
    1: currentTab == 1 && <ShowJobComplete />,
    2: currentTab == 2 && returntoHome(),
    3: currentTab == 3 && handleLogout(),
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme='dark'
          mode='inline'
          items={items}
          defaultSelectedKeys={['1']}
          onClick={(e) => {
            setCurrentTab(e.key);
          }}
        />
      </Sider>

      <Layout
        className='site-layout'
        style={{
          marginLeft: 200,
          backgroundColor: 'white',
        }}>
        <Content
          style={{
            margin: '24px 16px 0',
            backgroundColor: 'white',
          }}>
          {tabContent[currentTab]}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ViewJob;
