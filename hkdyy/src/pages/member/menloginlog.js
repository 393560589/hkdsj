import React,{PureComponent} from 'react'
import { Button,Table } from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  time:'2017-07-03 14:36:21',
  ip:'183.14.135.1',
  address: '广东省深圳市',
  browser:'Firefox 45',
}, {
  key: '2',
  time:'2017-07-03 14:36:21',
  ip:'183.14.135.1',
  address: '广东省深圳市',
  browser:'Firefox 45',
}];
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
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    }, {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    }, {
      title: '地区',
      dataIndex: 'address',
      key: 'address',
    },
     {
      title: '浏览器',
      dataIndex: 'browser',
      key: 'browser',
    }];
    return (
      <div className="content">
        <Header>登录日志</Header>
        <div className="tablebox">
          <div style={{marginTop:20}}>
            
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

