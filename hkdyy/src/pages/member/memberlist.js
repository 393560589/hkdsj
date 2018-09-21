import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select, Modal,Input,Checkbox} from 'antd'
import Header from '../../components/Card'
import Shortmsg from '../../components/Shortmsg/Shortmsg'
import Systemsg from '../../components/systemsg'
import Setag from '../../components/setag'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'8848',
  account:'15154554846',
  name: '大风车',
  grade:'初级会员',
  income: '¥2000.00',
  order: '100',
  time:'2018.2.23',
  updown:'',
}, {
  key: '2',
  number:'8848',
  account:'15154554846',
  name: '大风车',
  grade:'初级会员',
  income: '¥2000.00',
  order: '100',
  time:'2018.2.23',
  updown:'',
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
    
  }

  handleChange(pagination, filters, sorter){
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
      title: '会员ID',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '会员账号',
      dataIndex: 'account',
      key: 'account',
    }, {
      title: '会员名称',
      dataIndex: 'name',
      key: 'name',
    },
     {
      title: '会员等级',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title:'消费金额',
      dataIndex:'income',
      key:'income'
    },
    {
      title:'订单数量',
      dataIndex:'order',
      key:'order',
    },
    {
      title:'创建时间',
      dataIndex:'time',
      key:'time',
    },
    {
      title:'账户启用状态',
      dataIndex:'updown',
      key:'updown',
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
          <a href="javascript:;" onClick={()=>{router.push('/member/memberman')}}>查看</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/member/memberedit')}}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">一键进入</a>
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
        <Header>会员列表</Header>
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
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
               <Shortmsg/>
               <Systemsg/>
               <Setag/>
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
                footer={() => (
                      <div>
                       <Select
                        showSearch
                        style={{ width: 100,marginLeft:10}}
                        placeholder="批量操作"
                        optionFilterProp="children"
                        onChange={this.selhandleChange}
                        onFocus={this.selhandleFocus}
                        onBlur={this.selhandleBlur}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      >
                      
                        <Option value="删除">删除</Option>
                      </Select>
                      <Button style={{ marginLeft:10}} onClick={this.sureCos}>确定</Button>
                      </div>
                    )}
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

