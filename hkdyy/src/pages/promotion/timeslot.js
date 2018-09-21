import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import Addtimesolt from '../../components/addtimesolt'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'100000',
  name: '18000000000',
  begin:'2017-08-02 15:47:44',
  end:'2017-08-05 15:47:44',
 
}, {
  key: '2',
  number:'100000',
  name: '18000000000',
  begin:'2017-08-02 15:47:44',
  end:'2017-08-05 15:47:44',
 
}];

@connect(({index})=>({index}))

export default class Timeslot extends PureComponent{
  constructor(props) {
      super(props);
      this.state = {
       
      }
     this.editonClick=this.editonClick.bind(this);
    }
    editonClick(){
      const { dispatch }=this.props;
      dispatch({
        type:"index/save",
        payload:{
          addtimevisible:true
        }
      });
    }


  render(){

    const columns = [{
      title: '编号',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '秒杀时段名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '每日开始时间',
      dataIndex: 'begin',
      key: 'begin',
    },
    {
      title:'每日结束时间',
      dataIndex:'end',
      key:'end'
    },
    {
      title:'启用',
      dataIndex:'enable',
      key:'enabl',
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
          <a href="javascript:;" onClick={this.editonClick}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }];

    return (
      <div className="content">
        <Header>秒杀时间段列表</Header>
        <div className="tablebox">
          <div>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <Addtimesolt/>
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

