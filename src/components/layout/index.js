import React, { Component } from 'react';
// import { Link } from 'office-ui-fabric-react/lib/Link';
// import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
// import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './index.scss';
// import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { Button, Layout, Menu, Row, Col, Modal, Upload, Icon, message, Input

} from 'antd';

import Login from '../login';

const { Header, Footer, Sider, Content } = Layout;

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class MainLayout extends Component {
  constructor() {
    super();
    this.state = {
      showLoginModal: false,
      showRegModal: false
    };
  }

  showLoginDialog = (e) => {
    this.setState({
      showLoginModal: true,
    });
  }

  hideLoginDialog = (e) => {
    this.setState({
      showLoginModal: false,
    });
  }

  showRegDialog = (e) => {
    this.setState({
      showRegModal: true,
    });
  }

  hideRegDialog = (e) => {
    this.setState({
      showRegModal: false,
    });
  }


  
  render() {
    
    return (
      	<div className="header">

            <Layout className="layout">
              <Header style={{ position: 'fixed', width: '100%', zIndex:100 }}>
                <Row>
                 <Col span={12}>
                    <div className="logo"></div>
                    <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['1']}
                      style={{ lineHeight: '64px', fontSize: '16px' }}
                    >
                      <Menu.Item key="1">首页</Menu.Item>
                      <Menu.Item key="2">
                          <a href="/category" target="_blank" rel="noopener noreferrer">模型</a>
                      </Menu.Item>
                      <Menu.Item key="3">设计师</Menu.Item>
                    </Menu>
                 </Col>
                  <Col span={4}>
                      <Input
                        placeholder="搜索"
                        prefix={<Icon type="search" />}
                      />
                  </Col>

                  <Col span={4}>
                    <div className="anonymous">
                        <span className="button btn-medium login" onClick={this.showLoginDialog}>登录</span>
                        <span  className="button btn-medium btn-secondary signup" onClick={this.showRegDialog}>注册</span>
                    </div>
                      
                  </Col>

                  <Col span={4}>
                     <Upload {...props}>
                        <Button type="primary">
                          <Icon type="upload" /> Click to Upload
                        </Button>
                      </Upload>
                  </Col>
                </Row>
                
              </Header>

              <Content >
                  {this.props.children}

              </Content>

              <Footer style={{ textAlign: 'center' }}>
                  Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>

            
            {this.state.showLoginModal ? <Login onClose={this.hideLoginDialog}/> : null}

          </div>
    );
  }
}

