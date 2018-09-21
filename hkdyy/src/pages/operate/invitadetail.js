import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import styles from '../promotion/recomrd.css'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'8447466',
  account:'18000000000',
  name: 'Windir',
  regtime: '2017-07-14 18:00:49',
  trading: '是',
}, {
  key: '2',
  number:'8447466',
  account:'18000000000',
  name: 'Windir',
  regtime: '2017-07-14 18:00:49',
  trading: '是',
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
      title:'注册时间',
      dataIndex:'regtime',
      key:'regtime'
    },
    {
      title:'成功交易',
      dataIndex:'trading',
      key:'trading',
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
        <Header>邀请好友明细</Header>
        <div className="tablebox">
          <div className="coupondetl">
            <table width="100%" class="litable bodz">
              <tr>
                <th>用户ID</th>
                <th>用户账号</th>
                <th>用户昵称</th>
                <th>会员等级</th>
                <th>邀请好友</th>
                <th>成功交易好友</th>
                <th>累计奖励</th>
              </tr>
              <tr>
                <td height="40">8447466</td>
                <td>18000000000</td>
                <td>Windir</td>
                <td>黄金会员</td>
                <td>11000</td>
                <td>1000</td>
                <td>1000.00元</td>
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

