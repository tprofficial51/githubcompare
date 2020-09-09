import React,{useState} from 'react';
import { Layout, Menu,Row, Col, Divider} from 'antd';
import {
  GithubFilled
} from '@ant-design/icons';
import {connect} from 'react-redux';

import {addUserAction,selectUser} from '../actions';
import UserForm from './UserForm.js'
import ViewUser from './ViewUser.js'
import UserComparisons from './UserComparisons.js';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const App=(props)=>{
  const [collapse,setCollapsed]=useState(false);
  
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const userExists=(username)=>{
    return props.users.some(function(el) {
      return el.login === username;
    }); 
  }

  const addUsers=(user,callback)=>{
    if(userExists(user.login)){
      callback(false);
    }else{
      props.addUserAction(user);
      callback(true);
    }
  }

  const style = { background: '#0092ff', padding: '8px 0' };

  const selectedMenuItem=(user)=>{
    props.selectUser(user);
  }

  return (
    <Layout style={{height: '100vh',overflow:'hidden'}}>
      <Sider collapsible collapsed={collapse} onCollapse={onCollapse} style={{overflowY:'auto'}}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{overflowX:'hidden'}}>
          {
            props.users.map(user=>{
              return (
                  <Menu.Item onClick={()=>selectedMenuItem(user)} key={user.id} icon={<img src={user.avatar_url} style={{height:'90%',width:'auto',marginRight:'15px'}} />}>
                    {user.login}
                  </Menu.Item>
              ) 
            })
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0,color:'white',textAlign:'center',fontSize:'30px',fontWeight:'medium',fontFamily:'Roboto'}}><GithubFilled />  Github Compare</Header>
        <Content style={{ margin: '0 16px' }}>                       
          <UserForm
            addUsers={addUsers}
          />            
          <Divider orientation="left">Dashboard</Divider>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={17}>
              <UserComparisons style={{overflowY:'auto',height:'30vh'}} />
            </Col>
            <Col className="gutter-row" span={6}>
              <ViewUser style={{overflow:'hidden'}} />
            </Col>
            <Col className="gutter-row" span={1}>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Github Compare ©2020 Created with love by Tarini</Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps=(state)=>{
  return {users:state.users,songs:state.songs};
}

export default connect(mapStateToProps,{addUserAction,selectUser})(App)