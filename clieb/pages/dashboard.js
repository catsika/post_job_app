import React, { useState, useContext, useEffect } from 'react';
import { Layout, Menu, theme, Card } from 'antd';
import { UserContext } from '../context';
import { useRouter } from 'next/router';
import {
  AuditOutlined,
  PlusCircleOutlined,
  EyeOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import {
  PostJob,
  DisplayJob,
  UserJobs,
  DProfile,
} from '../components/menuTabViews';
const Profile = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('1');
  const { Content, Sider } = Layout;
  const [state, setState] = useContext(UserContext);
  useEffect(() => {
    setCurrentTab(1); // Set the currentTab to 1 to display the first tab's content immediately
  }, []);

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
    'Job Postings',
    'Post A Job',
    'Active Postings',
    'Profile',
    'Logout',
  ];

  const items = [
    AuditOutlined,
    PlusCircleOutlined,
    EyeOutlined,
    UserOutlined,
    LogoutOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `${settingLabels[index]}`,
  }));
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const tabContent = {
    1: currentTab == 1 && <DisplayJob />,
    2: currentTab == 2 && <PostJob setCurrentTab={setCurrentTab} />,
    3: currentTab == 3 && <UserJobs />,
    4: currentTab == 4 && <DProfile />,
    5: currentTab == 5 && handleLogout(),
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
          selectedKeys={currentTab.toString()}
          items={items}
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
            backgroundColor: 'site',
          }}>
          {tabContent[currentTab]}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
