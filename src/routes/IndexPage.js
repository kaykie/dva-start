import React from 'react';
import {connect} from 'dva';
import B from '../components/B'
import style from './index.less'
import request from '../utils/request';
import {InputItem, List,Button} from 'antd-mobile';

const Item = List.Item;

class IndexPage extends React.Component {

  state = {
    userName: '',
    userPhone: ''
  };

  componentDidMount() {


  }

  userNameChange(userName) {
    console.log(userName);
    this.setState({
      userName
    })

  }

  phoneChange(userPhone) {
    this.setState({
      userPhone
    })
  }

  submit(){
    const {userName,userPhone} = this.state;
    request({
      url: '/api/register',
      data: {
        userName,
        userPhone
      },
      method: 'POST'
    })
      .then(res => {
        console.log(res)
      })
  }

  getUserInfo(){
    request({
      url: '/api/getUser?query={user{userName}}&variables={"id":"2"}',
    })
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div className={style.title}>
        <B test='name'/>
        <List>
          <InputItem onChange={this.userNameChange.bind(this)}>用户名</InputItem>
          <InputItem onChange={this.phoneChange.bind(this)}>电话</InputItem>
          <Button onClick={this.submit.bind(this)}>提交</Button>
          <Button onClick={this.getUserInfo.bind(this)}>获取用户信息</Button>
        </List>
      </div>
    )
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
