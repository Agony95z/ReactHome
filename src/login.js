import React from 'react';
import axios from 'axios';
// 导入需要的UI组件库
import { Button, Icon, Form, Divider } from 'semantic-ui-react';
// 导入样式
import './login.css'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      userpwd: ''
    }
  }
  handle = async() => {
    // 获取表单数据
    // 调用接口进行身份验证 http://47.96.21.88:8086/users/login
    // 服务器返回一个状态：如果登录成功会返回一个状态token
    // 保存token信息到sessionStorage
    // 跳转到主页页
    // console.log(this.state.username)
    // console.log(this.state.userpwd)
    let data = await axios.post('http://47.96.21.88:8086/users/login',{
      uname: this.state.username,
      pwd: this.state.userpwd
    })
    console.log(data)
    this.setState({
      username: '',
      userpwd: ''
    })
  }
  handleName = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePwd = (event) => {
    this.setState({
      userpwd: event.target.value
    })
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-logo">
          <Icon name='home' size='massive' />
        </div>
        <div className="login-form">
          <Form>
            <Form.Input icon='user' fluid onChange={this.handleName} value={this.state.username} placeholder='请输入用户名..' />
            <Form.Input icon='linkify' type='password' fluid onChange={this.handlePwd} value={this.state.userpwd} placeholder='请输入密码...' />
            <Button fluid color='green' onClick={this.handle}>登录</Button>
            <Divider horizontal>-----</Divider>
          </Form>
        </div>
        <div className="iconfont">
          <Icon name='qq' color="green" size='huge' />
          <Icon name='wechat' size='huge' />
        </div>
      </div>
    )
  }
}

export default Login