import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './routes';

const { Header, Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 16 }}>
          <Routes />
        </Content>
      </Layout>
    </BrowserRouter>
  )
};

export default App;