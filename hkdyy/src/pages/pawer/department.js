import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import Adddepartment from '../../components/adddepartment'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'
const data = [{
  key: '1',
  name:'销售部',
  describe: '暂无描述',
  number:'10',
  time:'2017-07-19 14:48:38',
  updown:''
}, {
  key: '2',
  name:'销售部',
  describe: '暂无描述',
  number:'10',
  time:'2017-07-19 14:48:38',
  updown:''
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
    this.editonClick=this.editonClick.bind(this);
    }
   

  handleChange(pagination, filters, sorter){
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  editonClick(){
    const { dispatch }=this.props;
    dispatch({
      type:'index/save',
      payload:{
        departmentvisible:true
      }
    });
  }

  render(){

       let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '职能描述',
      dataIndex: 'describe',
      key: 'describe',
      width:500
    },
    {
      title: '成员数量',
      dataIndex: 'number',
      key: 'number',
    }, 
    {
      title:'添加时间',
      dataIndex:'time',
      key:'time'
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
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={()=>{router.push('/power/powerment')}}>权限设置</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={this.editonClick}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }];
    return (
      <div className="content">
        <Header>部门管理</Header>
        <div className="tablebox">
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <Adddepartment/>
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

