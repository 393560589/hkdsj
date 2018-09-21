import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import Xtsmsg from '../../components/xtsmsg'
//import styles from './accountset.less'

import { connect } from 'dva'
const data = [{
  key: '1',
  number:'100000',
  name: '秒杀专区暂时下线公告',
  time: '2017-08-02 15:47:44',
  publishers:'admin',
 

}, {
  key: '2',
  number:'100000',
  name: '秒杀专区暂时下线公告',
  time: '2017-08-02 15:47:44',
  publishers:'admin',
 
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
      title: '编号',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '推送标题',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title:'发布时间',
      dataIndex:'time',
      key:'time'
    },
    {
      title:'发布人员',
      dataIndex:'publishers',
      key:'publishers',
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">查看</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
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
        <Header>系统消息</Header>
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
              <Xtsmsg/>
              
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
                pagination={{ 
                    showQuickJumper:true,
                    showSizeChanger:true,
                    total:100,
                    showTotal: function () {  
                        return '共 ' + 100 + ' 条数据'; 
                    }
                   }}
                loading={false}
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

