import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select ,Input} from 'antd'
import Header from '../../components/Card'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'



const data = [{
  key: '1',
  number:'100000',
  name: '全品类通用券',
  type:'全场赠券',
  range:'全部商品',
  threshold:'满100元可用',
  denomination:'100元',
  platform:'全平台',
  date:'2017-07-31至2017-08-19',
  state:'未过期',
 
}, {
  key: '2',
   number:'100000',
  name: '全品类通用券',
  type:'全场赠券',
  range:'全部商品',
  threshold:'满100元可用',
  denomination:'100元',
  platform:'全平台',
  date:'2017-07-31至2017-08-19',
  state:'未过期',
  
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Coupons extends PureComponent{


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
      title: '编号',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '优惠劵名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title:'优惠券类型',
      dataIndex:'type',
      key:'type',
    
    },
    {
      title: '可使用商品',
      dataIndex: 'range',
      key: 'range',
    
    },
     {
      title: '使用门槛',
      dataIndex: 'threshold',
      key: 'threshold',
    
    },
     {
      title: '面值',
      dataIndex: 'denomination',
      key: 'denomination',
    
    },
     {
      title: '适用平台',
      dataIndex: 'platform',
      key: 'platform',
    
    },
    {
      title: '有效期',
      dataIndex: 'date',
      key: 'date',
    
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
          <a href="javascript:;" onClick={()=>{router.push('/promotion/coupondetail')}}>查看</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/promotion/addcoupon')}}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }];

    return (
      <div className="content">
        <Header>优惠券列表</Header>
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
            <div style={{marginTop:40}}>
              <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
                <Button onClick={()=>{router.push('/promotion/addcoupon')}}>添加优惠券</Button>
               
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

