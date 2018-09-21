import React,{PureComponent} from 'react'
import { Button, Table, Select} from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  ordernum:'201707196398345',
  name:'银色星芒刺绣网纱底裤',
  goodsnum: 'No86577',
  goods: '1',
  orderprice:'¥2000.00',
  state:'待付款',
  gettime:'2017-07-03 14:36:21',
  seltime:'2017-07-03 14:36:21'
}, {
  key: '2',
  ordernum:'201707196398345',
  name:'银色星芒刺绣网纱底裤',
  goodsnum: 'No86577',
  goods: '1',
  orderprice:'¥2000.00',
  state:'待付款',
  gettime:'2017-07-03 14:36:21',
  seltime:'2017-07-03 14:36:21'
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
      title: '订单号',
      dataIndex: 'ordernum',
      key: 'ordernu',
    }, {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '货号',
      dataIndex: 'goodsnum',
      key: 'goodsnum',
    },
    {
      title:'商品数量',
      dataIndex:'goods',
      key:'goods'
    },
    {
      title:'订单金额',
      dataIndex:'orderprice',
      key:'orderprice'
    },
    {
      title:'订单状态',
      dataIndex:'state',
      key:'state'
    },
    {
      title:'下单时间',
      dataIndex:'gettime',
      key:'gettime'
    },
    {
      title:'发货时间',
      dataIndex:'seltime',
      key:'seltime'
    }];
    return (
      <div className="content">
        <Header>销售统计</Header>
        <div className="tablebox">
          <div className="screen">
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <a>查询结果</a>
              </div>
            </div>
            <div className="scr-con selscon">
              <span><b>* </b>起止时间：</span>
              <div className="left"><input type="text" placeholder="请选择时间" name="" id="chistime" /><i
                className="fa fa-clock-o"></i></div>
              <span>货号：</span>
              <input type="text" name=""/>
                <ul className="scrlist">
                  <li>
                    <span>订单时间类型：</span>
                    <label><input type="radio" className="radiox" checked="" name="fodata" /><i
                      className="radioshow fa fa-circle-o"></i>发货时间</label>
                    <label><input type="radio" className="radiox" name="fodata" /><i
                      className="radioshow fa fa-circle-o"></i>下单时间</label>
                  </li>
                  <li>
                    <span>订单状态：</span>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>待付款</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>待发货</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>已发货</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>已完成</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>已关闭</label>
                  </li>
                </ul>
            </div>
          </div>
           <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
               <Button onClick={this.setAgeSort}>导出数据</Button>
             
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
                pagination={{ 
                    showQuickJumper:true,
                    showSizeChanger:true,
                    total:100,
                    showTotal: function () {  
                        return '共 ' + 100 + ' 条数据'; 
                    }
                   }}
                loading={false}
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

