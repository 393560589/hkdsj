import React,{PureComponent} from 'react'
import { Button,Table, Input,Divider ,Switch} from 'antd'
import Header from '../../components/Card'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  name:'微信支付',
  describe:'微信支付，是基于客户端提供的服务功能。同时向商户提供销售经营分析、账户和资金管理的功能支持。用户通过扫描二维码、微信内打开商品页面购买等多种方式调起微信支付模块完成支付。',
  updown: '',
  sort:'',
}, {
  key: '2',
   name:'微信支付',
  describe:'微信支付，是基于客户端提供的服务功能。同时向商户提供销售经营分析、账户和资金管理的功能支持。用户通过扫描二维码、微信内打开商品页面购买等多种方式调起微信支付模块完成支付。',
  updown: '',
  sort:'',
}];

@connect(({index})=>({index}))

export default class Payset extends PureComponent{
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
      title: '支付方式名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '支付方式描述',
      dataIndex: 'describe',
      key: 'describe',
      width:630
    },
    {
      title:'是否启用',
      dataIndex:'updown',
      key:'updown',
      align:'center',
      render:()=>(
          <Switch defaultChecked onChange={this.onChange} />
        )
    },
    {
      title:'排序',
      dataIndex:'sort',
      key:'sort',
      render:()=>(
        <Input placeholder="" style={{width:90,height:40}} />
        )
    },
    
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={()=>{router.push('/setup/payeditvol')}}>编辑</a>
        </span>
      )
    }];
    return (
      <div className="content">
        <Header>支付设置</Header>
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

