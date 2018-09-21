import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select ,Input} from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'


const data = [{
  key: '1',
  number:'100000',
  name: '银色星芒刺绣网纱底裤',
  goodsnum:'No86577',
  price:'¥100.00',
  killprice:'',
  killnumber:'',
  residue:'100',
  remind:'100',
  limit:'',
  sort:''
}, {
  key: '2',
  number:'100000',
  name: '银色星芒刺绣网纱底裤',
  goodsnum:'No86577',
  price:'¥100.00',
  killprice:'',
  killnumber:'',
  residue:'100',
  remind:'100',
  limit:'',
  sort:''
}, {
  key: '3',
  number:'100000',
  name: '银色星芒刺绣网纱底裤',
  goodsnum:'No86577',
  price:'¥100.00',
  killprice:'',
  killnumber:'',
  residue:'100',
  remind:'100',
  limit:'',
  sort:''
}, {
  key: '4',
  number:'100000',
  name: '银色星芒刺绣网纱底裤',
  goodsnum:'No86577',
  price:'¥100.00',
  killprice:'',
  killnumber:'',
  residue:'100',
  remind:'100',
  limit:'',
  sort:''
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Comlist extends PureComponent{


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

  onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
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
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title:'货号',
      dataIndex:'goodsnum',
      key:'goodsnum'
    },
    {
      title:'商品价格',
      dataIndex:'price',
      key:'price'
    },
    {
      title:'秒杀价格',
      dataIndex:'killprice',
      key:'killpric',
      align:'center',
      render:()=>(
          <Input style={{width:80}} defaultValue="0571" />
        )
    },
     {
      title:'秒杀数量',
      dataIndex:'killnumber',
      key:'killnumber',
      align:'center',
      render:()=>(
          <Input style={{width:80}} defaultValue="0571" />
        )
    },
    {
      title:'剩余数量',
      dataIndex:'residue',
      key:'residue'
    },
     {
      title:'秒杀提醒',
      dataIndex:'remind',
      key:'remind'
    },
    {
      title: '限购数量',
      dataIndex: 'limit',
      key: 'limit',
      align:'center',
      render:()=>(
            <Input style={{width:80}} defaultValue="0571" />
        )
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
      align:'center',
      render:()=>(
            <Input style={{width:80}} defaultValue="0571" />
        )
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
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
         <Header>商品列表</Header>
        <div className="tablebox">
        <div>
          <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
            <Button onClick={this.setAgeSort}>添加</Button>
           
          </div>
          <Table 
              bordered={true}
              title={()=>('数据列表')}
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

