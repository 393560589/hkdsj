import React,{PureComponent} from 'react'
import { Button , Table } from 'antd'
import { connect } from 'dva'
import Header from '../../components/Card'
const { Column, ColumnGroup, } = Table;


const dataSource = [{
  key: '1',
  time: '18.01.01',
  ip: '192.168.0.101',
  address: '广东深圳市',
  explorer:'火狐'
}, {
  key: '2',
  time: '18.01.01',
  ip: '192.168.0.101',
  address: '广东深圳市',
  explorer:'火狐'
}];

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
    dataIndex: 'explorer',
    key: 'explorer',
  }];

@connect(({index})=>({index}))
export default class Loginlog extends PureComponent{
  render(){
    return (
      <div className="content">
        <Header>登录日志</Header>
        <div className="tablebox">
          <div style={{backgroundColor:'#fff',padding:'10px'}}>
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
              dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    )
  }
}

