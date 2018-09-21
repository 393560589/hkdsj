import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'


const data = [{
  key: '1',
  number:'100000',
  name: '你的地球日优惠福利来啦',
  begin: '2017-08-02 15:47:44',
  end: '2017-08-05 15:47:44',
  updown:'',
  state:'进行中',
 
}, {
  key: '2',
   number:'100000',
  name: '你的地球日优惠福利来啦',
  begin: '2017-08-02 15:47:44',
  end: '2017-08-05 15:47:44',
  updown:'',
  state:'进行中',
  
}, {
  key: '3',
   number:'100000',
  name: '你的地球日优惠福利来啦',
  begin: '2017-08-02 15:47:44',
  end: '2017-08-05 15:47:44',
  updown:'',
  state:'进行中',
 
}, {
  key: '4',
   number:'100000',
  name: '你的地球日优惠福利来啦',
  begin: '2017-08-02 15:47:44',
  end: '2017-08-05 15:47:44',
  updown:'',
  state:'进行中',
 
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Activitylist extends PureComponent{

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

   selhandleChange(value) {
  console.log(`selected ${value}`);
}

 selhandleBlur() {
  console.log('blur');
}

 selhandleFocus() {
  console.log('focus');
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
      title: '活动名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '开始时间',
      dataIndex: 'begin',
      key: 'begin',
    },
    {
      title:'结束时间',
      dataIndex:'end',
      key:'end'
    },
    {
      title:'上线/下架',
      dataIndex:'updown',
      key:'updown',
      align:'center',
      render:()=>(
          <Switch defaultChecked onChange={this.onChange} />
        )
    },
    {
      title:'状态',
      dataIndex:'state',
      key:'state'
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">查看</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/promotion/activityadd')}}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/operate/advertadd')}}>发布到广告</a>
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
      <Header>活动列表</Header>
      <div className="tablebox">
        <div>
          <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
            <Button  onClick={()=>{router.push('/promotion/activityadd')}}>添加活动</Button>
            
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
              loading={false}
              pagination={{ 
                  showQuickJumper:true,
                  showSizeChanger:true,
                  total:100,
                  showTotal: function () {  
                      return '共 ' + 100 + ' 条数据'; 
                  }
                 }}
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

