import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select ,Input} from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  code:'149056468958',
  name: 'Windir',
  payment:'主动领取',
  paytime:'2017-07-14 18:00:49',
  state:'未使用',
  usetime:'2017-07-14 18:00:49',
  ordernumber:'20170719639834'
}, {
  key: '2',
  code:'149056468958',
  name: 'Windir',
  payment:'主动领取',
  paytime:'2017-07-14 18:00:49',
  state:'未使用',
  usetime:'2017-07-14 18:00:49',
  ordernumber:'20170719639834'
}];

const Option = Select.Option;

@connect(({index})=>({index}))

export default class Coupondetail extends PureComponent{

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

   selhandleChange(value) {
  console.log(`selected ${value}`);
}

 selhandleBlur() {
  console.log('blur');
}

 selhandleFocus() {
  console.log('focus');
}


  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }



  render(){

           let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '优惠码',
      dataIndex: 'code',
      key: 'code',
    }, {
      title: '领取会员',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title:'领取方式',
      dataIndex:'payment',
      key:'payment',
     
    },
    {
      title: '领取时间',
      dataIndex: 'paytime',
      key: 'paytime',
     
    },
    {
      title:'状态',
      dataIndex:'state',
      key:'state'
    },
    {
      title:'使用时间',
      dataIndex:'usetime',
      key:'usetime'
    },
    {
      title:'订单编号',
      dataIndex:'ordernumber',
      key:'ordernumber'
    },];
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
          <div class="coupondetl">
            <table width="100%" class="litable bodz">
              <tr>
                <th>名称</th>
                <th>优惠券类型</th>
                <th>可使用商品</th>
                <th>使用门槛</th>
                <th>面值</th>
                <th>状态</th>
              </tr>
              <tr>
                <td height="40">全品类通用券</td>
                <td>全场赠券</td>
                <td>全部商品</td>
                <td>满100元可用</td>
                <td>100元</td>
                <td>未过期</td>
              </tr>
              <tr>
                <th>有效期</th>
                <th>总发行量</th>
                <th>已领取</th>
                <th>待领取</th>
                <th>已使用</th>
                <th>未使用</th>
              </tr>
              <tr>
                <td height="40">2017-07-31至2017-08-19</td>
                <td>100000</td>
                <td>100000</td>
                <td>100000</td>
                <td>100000</td>
                <td>100000</td>
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
              rowSelection={rowSelection}
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

