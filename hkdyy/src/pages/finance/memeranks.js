import React,{PureComponent} from 'react'
import { Button, Table,Radio,DatePicker} from 'antd'
import Header from '../../components/Card'
import styles from './awardset.css'
//import styles from './accountset.less'

import { connect } from 'dva'
const data = [{
  key: '1',
  rank:'1',
  name:'Windir',
  ordernum: '100',
  cost: '¥2000.00',
}, {
  key: '2',
  rank:'1',
  name:'Windir',
  ordernum: '100',
  cost: '¥2000.00',
}];
const { RangePicker } = DatePicker;
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
      title: '排行',
      dataIndex: 'rank',
      key: 'rank',
    }, {
      title: '会员名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '订单数(单位:个)',
      dataIndex: 'ordernum',
      key: 'ordernum',
    },
    {
      title:'购物金额',
      dataIndex:'cost',
      key:'cost'
    }];
    return (
      <div className="content">
        <Header>会员排行</Header>
        <div className="tablebox">
          <div className={styles.statisbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}}>会员排行</span>
              <div className="right">
                <Button>导出数据</Button>
                <Radio.Group defaultValue="a" buttonStyle="solid" style={{marginLeft:10}}>
                  <Radio.Button value="a">全部</Radio.Button>
                  <Radio.Button value="b">最近30天</Radio.Button>
                  <Radio.Button value="c">最近90天</Radio.Button>
                </Radio.Group>
                <RangePicker onChange={this.onChange} style={{marginLeft:10}} />
              </div>
            </div>
            <Table 
                bordered={true}
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

