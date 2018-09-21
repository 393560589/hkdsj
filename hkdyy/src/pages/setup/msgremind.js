import React,{PureComponent} from 'react'
import { Button,Table,Checkbox,Divider } from 'antd'
import Header from '../../components/Card'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  type:'订单创建时',
}, {
  key: '2',
  type:'订单到达时',
}];

@connect(({index})=>({index}))

export default class Msgremind extends PureComponent{
   state = {
    filteredInfo: null,
    sortedInfo: null,
  };
   handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  render(){
     let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '消息类型',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '电子邮件',
      dataIndex: 'email',
      key: 'email',
      render: (text, record) => (
        <span>
          <Checkbox onChange={this.onChange}>是否发送</Checkbox>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/setup/emailmsg')}}>编辑内容</a>
        </span>
      )
    },
    {
      title: '站内消息',
      dataIndex: 'system',
      key: 'system',
      render: (text, record) => (
        <span>
          <Checkbox onChange={this.onChange}>是否发送</Checkbox>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/setup/stationmsg')}}>编辑内容</a>
        </span>
      )
    },
    {
      title:'手机短信',
      dataIndex:'shortmsg',
      key:'shortmsg',
       render: (text, record) => (
        <span>
          <Checkbox onChange={this.onChange}>是否发送</Checkbox>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/setup/shortmsg')}}>编辑内容</a>
        </span>
      )
    },
    {
      title:'APP消息推送',
      dataIndex:'appmsg',
      key:'appmsg',
       render: (text, record) => (
        <span>
          <Checkbox onChange={this.onChange}>是否发送</Checkbox>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/setup/appmsg')}}>编辑内容</a>
        </span>
      )
    }];
    return (
     <div className="content">
      <Header>消息提醒</Header>
      <div className="tablebox">
          <Table 
                bordered={true}
                title={()=>('数据列表')}
                loading={false}
                position={'center'} 
                columns={columns} 
                dataSource={data} 
                onChange={this.handleChange} />
        </div>
    </div>
    )
  }
}

