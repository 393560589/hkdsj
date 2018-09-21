import React,{PureComponent} from 'react'
import { Button,Table,Switch,Divider} from 'antd'
import Header from '../../components/Card'
import Transfer from '../../components/transfer'
//import styles from './accountset.less'

import { connect } from 'dva'
const data = [{
  key: '1',
  number:'1000001',
  claname:'服装',
  level: '二级',
  goodsnum:'100',
  company:'件',
  nav:'',
  or:'',
  sort:'1',
}, {
  key: '2',
  number:'1000001',
  claname:'服装',
  level: '二级',
  goodsnum:'100',
  company:'件',
  nav:'',
  or:'',
  sort:'1',
}];
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  constructor(props) {
      super(props);
      this.state = {
        filteredInfo: null,
        sortedInfo: null,
      }
     this.handleChange=this.handleChange.bind(this);
     this.transferonClick=this.transferonClick.bind(this);
    }
  

  handleChange(pagination, filters, sorter) {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  transferonClick(){
    const { dispatch }=this.props;
    dispatch({
      type:'index/save',
      payload:{
        transfervisible:true
      }
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
      title: '分类名称',
      dataIndex: 'claname',
      key: 'claname',
    }, {
      title: '级别',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: '商品数量',
      dataIndex: 'goodsnum',
      key: 'goodsnum',
    },
    {
      title: '数量单位',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: '导航栏',
      dataIndex: 'nav',
      key: 'nav',
      render:()=>(
          <Switch defaultChecked onChange={this.onChange} />
        )
    },
    {
      title: '是否显示',
      dataIndex: 'or',
      key: 'or',
      render:()=>(
          <Switch defaultChecked onChange={this.onChange} />
        )
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '设置',
      dataIndex: 'setup',
      key: 'setup',
       render: (text, record) => (
        <span>
          <a href="javascript:;">新增下级</a>
          <Divider type="vertical" />
          <a href="javascript:;">查看下级</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={this.transferonClick}>转移商品</a>
        </span>
      )
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
       render: (text, record) => (
        <span>
          <a href="javascript:;">编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }];
    return (
      <div className="content">
        <Header>二级分类</Header>
        <div className="tablebox">
            <div style={{marginTop:20}}>
              <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
                <Button onClick={this.setAgeSort}>添加</Button>
                <Transfer/>
              </div>
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
      </div>

    )
  }
}

