import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select ,Input} from 'antd'
import Header from '../../components/Card'
import Goods from '../../components/goods'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'100000',
  name: '银色星芒刺绣网纱底裤',
  updown:'',
  sort:'',
  state:'推荐中',
 
}, {
  key: '2',
   number:'100000',
  name: '银色星芒刺绣网纱底裤',
  updown:'',
  sort:'',
  state:'推荐中',
  
}, {
  key: '3',
   number:'100000',
  name: '银色星芒刺绣网纱底裤',
  updown:'',
  sort:'',
  state:'推荐中',
 
}, {
  key: '4',
   number:'100000',
  name: '银色星芒刺绣网纱底裤',
  updown:'',
  sort:'',
  state:'推荐中',
 
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Popularityt extends PureComponent{

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

  sureCos(){

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
      title:'是否推荐',
      dataIndex:'updown',
      key:'updown',
      align:'center',
      render:()=>(
          <Switch defaultChecked onChange={this.onChange} />
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
          <a href="javascript:;">置顶</a>
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
        <Header>热销爆款</Header>
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
            <Goods/>
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
                    <Option value="设为推荐">设为推荐</Option>
                    <Option value="取消推荐">取消推荐</Option>
                    <Option value="删除">删除</Option>
                  </Select>
                  <Button style={{ marginLeft:10}} onClick={this.sureCos}>确定</Button>
                  </div>
                )}
              loading={false}
              rowSelection={rowSelection}
              pagination={{ 
                  showQuickJumper:true,
                  showSizeChanger:true,
                  total:100,
                  showTotal: function () {  
                      return '共 ' + 100 + ' 条数据'; 
                  }
                 }}
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

