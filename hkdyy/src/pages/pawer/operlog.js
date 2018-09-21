import React,{PureComponent} from 'react'
import { Button,Table , Divider ,Switch , Select } from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'
const data = [{
  key: '1',
  number:'1000001',
  name: 'admin',
  date:'2017-08-02 15:47:44',
  ip:'220.231.210.22',
  log:'编辑会员账号: windir',
}, {
  key: '2',
  number:'1000001',
  name: 'admin',
  date:'2017-08-02 15:47:44',
  ip:'220.231.210.22',
  log:'编辑会员账号: windir',
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
    },
    {
      title: '操作者',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '操作日期',
      dataIndex: 'date',
      key: 'date',
    }, 
    {
      title:'IP地址',
      dataIndex:'ip',
      key:'ip'
    },
     {
      title:'操作记录',
      dataIndex:'log',
      key:'log'
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
        <Header>操作日志</Header>
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
          <div style={{marginTop:50}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <span>清除日志：</span>
              <Select
                  showSearch
                  style={{ width: 200,marginLeft:10}}
                  placeholder="选择清除日期"
                  optionFilterProp="children"
                  onChange={this.selhandleChange}
                  onFocus={this.selhandleFocus}
                  onBlur={this.selhandleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="30">一周之前</Option>
                  <Option value="40">一个月之前</Option>
                  <Option value="50">三个月之前</Option>
                  <Option value="60">半年之前</Option>
                  <Option value="70">一年之前</Option>
                </Select>
              <Button onClick={this.setAgeSort}>确定</Button>
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
                rowSelection={rowSelection}
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

