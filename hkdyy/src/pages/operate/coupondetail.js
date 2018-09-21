import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import styles from '../promotion/recomrd.css'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'149056468958',
  name: '全品类通用券',
  denomination: '100元',
  payment: '主动领取',
  receivetime:'2017-07-14 18:00:49',
  state:'未使用',
  usetime:'2017-07-14 18:00:49',
  ordernum:'201707196398345'
}, {
  key: '2',
  number:'149056468958',
  name: '全品类通用券',
  denomination: '100元',
  payment: '主动领取',
  receivetime:'2017-07-14 18:00:49',
  state:'未使用',
  usetime:'2017-07-14 18:00:49',
  ordernum:'201707196398345'
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
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
      title: '优惠码',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '优惠劵名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '面额',
      dataIndex: 'denomination',
      key: 'denomination',
    },
    {
      title:'领取方式',
      dataIndex:'payment',
      key:'payment'
    },
    {
      title:'领取时间',
      dataIndex:'receivetime',
      key:'receivetime',
    },
    {
      title:'当前状态',
      dataIndex:'state',
      key:'stat'
    },
     {
      title:'使用时间',
      dataIndex:'usetime',
      key:'usetime'
    },
     {
      title:'订单编号',
      dataIndex:'ordernum',
      key:'ordernum'
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">查看</a>
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
         <Header>优惠券明细</Header>
        <div className="tablebox">
         <div className="coupondetl">
          <table width="100%" className="litable bodz">
            <tr>
              <th>用户ID</th>
              <th>用户账号</th>
              <th>用户昵称</th>
              <th>会员等级</th>
              <th>已使用</th>
              <th>未使用</th>
              <th>已过期</th>
            </tr>
            <tr>
              <td height="40">8447466</td>
              <td>18000000000</td>
              <td>Windir</td>
              <td>黄金会员</td>
              <td>11000</td>
              <td>1000</td>
              <td>1000</td>
            </tr>
          </table>
          </div>
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

