import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import Coupon from '../../components/coupon'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'8447466',
  account:'18000000000',
  name: 'Windir',
  grade: '黄金会员',
  used: '1000',
  notused:'1000',
  expired:'1000',
}, {
  key: '2',
  number:'8447466',
  account:'18000000000',
  name: 'Windir',
  grade: '黄金会员',
  used: '1000',
  notused:'1000',
  expired:'1000',
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: null,
      sortedInfo: null,
    
    }
    this.handleChange=this.handleChange.bind(this);
    this.coupononClick=this.coupononClick.bind(this);
  }

  handleChange(pagination, filters, sorter){
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  coupononClick(){
    const { dispatch }=this.props;
    dispatch({
      type:'index/save',
      payload:{
        couponvisible:true
      }
    });
  }

  render(){

     let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '用户ID',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '用户账号',
      dataIndex: 'account',
      key: 'account',
    }, {
      title: '用户昵称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title:'会员等级',
      dataIndex:'grade',
      key:'grad'
    },
    {
      title:'已使用',
      dataIndex:'used',
      key:'used',
    },
    {
      title:'未使用',
      dataIndex:'notused',
      key:'notused'
    },
     {
      title:'已过期',
      dataIndex:'expired',
      key:'expired'
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;"  onClick={()=>{router.push('/operate/coupondetail')}}>查看明细</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={this.coupononClick}>赠送优惠券</a>
        </span>
      )
    }];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

    return (
      <div className="content">
        <Header>优惠券查询</Header>
        <div className="tablebox">
          <div className="screen">
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <a>查询结果</a>
                <a>高级检索</a>
              </div>
            </div>
            <div className="scr-con">
              <span>用户账号：</span>
              <input type="text" placeholder="用户ID/账号" name=""/>
                <span>用户昵称：</span>
                <input type="text" placeholder="用户昵称" name=""/>
                  <span>注册时间:</span>
                  <div className="left"><input type="text" placeholder="请选择时间" name="" id="chistime"/><i
                    className="fa fa-clock-o"/></div>
            </div>
          </div>
          <div>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
            <Coupon/>
              <Select
                showSearch
                style={{ width: 100,marginLeft:10}}
                placeholder="导出数据"
                optionFilterProp="children"
                onChange={this.selhandleChange}
                onFocus={this.selhandleFocus}
                onBlur={this.selhandleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="30">选中用户</Option>
                <Option value="40">全部用户</Option>
              </Select>
              <Select
                showSearch
                style={{ width: 100,marginLeft:10}}
                placeholder="排序方式"
                optionFilterProp="children"
                onChange={this.selhandleChange}
                onFocus={this.selhandleFocus}
                onBlur={this.selhandleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="时间">时间</Option>
              </Select>
            </div>
            <Table 
                bordered={true}
                title={()=>('数据列表')}
                loading={false}
                rowSelection={rowSelection}
                pagination={{ 
                    showQuickJumper:true,
                    showSizeChanger:true,
                    total:100,
                    showTotal: function () {  
                        return '共 ' + 100 + ' 条数据'; 
                    }
                   }}
                position={'center'} 
                columns={columns} 
                dataSource={data} 
                onChange={this.handleChange} />
          </div>
        </div>
      </div>

    )
  }
}

