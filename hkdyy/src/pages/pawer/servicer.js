import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select } from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'
const data = [{
  key: '1',
  account:'windir',
  name:'小优',
  time:'2017-07-19 14:48:38',
  loginlast:'2017-07-19 14:48:38',
  updown:''
}, {
  key: '2',
  account:'windir',
  name:'小优',
  time:'2017-07-19 14:48:38',
  loginlast:'2017-07-19 14:48:38',
  updown:''
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
      title: '成员账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '客服昵称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '添加时间',
      dataIndex: 'time',
      key: 'time',
    }, 
    {
      title:'最后登录',
      dataIndex:'loginlast',
      key:'loginlast'
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
          <a href="javascript:;">查看记录</a>
          <Divider type="vertical" />
          <a href="javascript:;">编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }];
    return (
      <div className="content">
        <Header>客服管理</Header>
        <div className="tablebox">
          <div className="zlshow" style={{overflow:'hidden'}}>
            <ul>
              <li>
                <img src={require('../../assets/u9613.png')} class="left" />
                <div className="left">
                  <span>历史接待次数</span><br/>
                  <small>200</small>
                </div>
              </li>
              <li>
                <img src={require('../../assets/u9616.png')} class="left" />
                <div className="left">
                  <span>历史接待人数</span><br/>
                  <small>200</small>
                </div>
              </li>
              <li>
                <img src={require('../../assets/u9614.png')} class="left" />
                <div className="left">
                  <span>今日接待次数</span><br/>
                  <small>200</small>
                </div>
              </li>
              <li>
                <img src={require('../../assets/u9615.png')} class="left" />
                <div className="left">
                  <span>今日接待人数</span><br/>
                  <small>200</small>
                </div>
              </li>
            </ul>
          </div>
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <Button onClick={this.setAgeSort}>添加</Button>
             
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

