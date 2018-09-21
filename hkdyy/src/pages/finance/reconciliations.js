import React,{PureComponent} from 'react'
import { Button, Table, Select } from 'antd'
import Header from '../../components/Card'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  ordernum:'201707196398345',
  ordermoney:'¥200.00',
  paymethod: '支付宝 ',
  paytime: '2017-07-19 14:48:38',
  reconcil:'admin',
  accountime:'2017-07-19 14:48:38',
  state:'已对账',
}, {
  key: '2',
  ordernum:'201707196398345',
  ordermoney:'¥200.00',
  paymethod: '支付宝 ',
  paytime: '2017-07-19 14:48:38',
  reconcil:'admin',
  accountime:'2017-07-19 14:48:38',
  state:'已对账',
}];
const Option = Select.Option;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
   state = {
    filteredInfo: null,
    sortedInfo: null,
  }

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
      title: '订单编号',
      dataIndex: 'ordernum',
      key: 'ordernu',
    }, {
      title: '订单金额',
      dataIndex: 'ordermoney',
      key: 'ordermoney',
    }, {
      title: '支付方式',
      dataIndex: 'paymethod',
      key: 'paymethod',
    },
    {
      title:'支付时间',
      dataIndex:'paytime',
      key:'paytime'
    },
    {
      title:'对账人员',
      dataIndex:'reconcil',
      key:'reconcil'
    },
    {
      title:'对账时间',
      dataIndex:'accountime',
      key:'accountime'
    },
    {
      title:'状态',
      dataIndex:'state',
      key:'state'
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={()=>{router.push('/finance/checkaccounts')}}>查看详情</a>
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
        <Header>对账列表</Header>
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
              <span>订单编号：</span>
              <input type="text" placeholder="订单编号" name=""/>
                <span>金额范围：</span>
                <select>
                  <option disabled selected hidden>请选择金额范围</option>
                  <option>100元以下</option>
                  <option>100-200元</option>
                  <option>200-500元</option>
                  <option>500-1000元</option>
                  <option>1000元以上</option>
                </select>
                <span>对账状态：</span>
                <select>
                  <option>全部</option>
                  <option>未对账</option>
                  <option>已对账</option>
                  <option>异常</option>
                  <option>已冲正</option>
                </select>
            </div>
          </div>
          <div style={{marginTop:20}}>
              <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
                 <Button onClick={this.setAgeSort}>批量对账</Button>
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
                  <Option value="选中数据">选中数据</Option>
                  <Option value="全部数据">全部数据</Option>
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

