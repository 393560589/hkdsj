import React,{PureComponent} from 'react'
import { Button, Radio, Table , Divider , Select,Switch} from 'antd'
import Header from '../../components/Card'
import router from 'umi/router'
import { connect } from 'dva'

const data = [{
  key: '1',
  name:'普通会员',
  updown:'',
  growth: '100',
  freestand:'199元/每笔',
  reward:'+5成长值/条',
  remarks:'无'
}, {
  key: '2',
  name:'黄金会员',
  updown:'',
  growth: '100',
  freestand:'199元/每笔',
  reward:'+10成长值/条',
  remarks:'无'
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
      title: '等级名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '默认会员等级',
      dataIndex:'updown',
      key:'updown',
      render:()=>(
          <Switch defaultChecked onChange={this.onChange} />
        )
    }, {
      title: '成长值满足点',
      dataIndex: 'growth',
      key: 'growth',
    },{
      title: '免运费标准',
      dataIndex: 'freestand',
      key: 'freestand',
    },
    {
      title: '评价奖励',
      dataIndex: 'reward',
      key: 'reward',
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      key: 'remarks',
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={()=>{router.push('/member/gradset')}}>编辑</a>
        </span>
      )
    }];


    return (
      <div className="content">
         <Header>会员等级设置</Header>
        <div className="tablebox">
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <Button onClick={()=>{router.push('/member/gradset')}}>添加</Button>
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

