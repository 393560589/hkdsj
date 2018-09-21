import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select ,Input} from 'antd'
import Header from '../../components/Card'
import Addactivity from '../../components/addactivity'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'100000',
  name: '春季家电家具疯狂秒杀',
  state:'活动进行中',
  begin:'2017-07-20',
  end:'2017-07-21',
  updown:''
 
}, {
  key: '2',
  number:'100000',
  name: '春季家电家具疯狂秒杀',
  state:'活动进行中',
  begin:'2017-07-20',
  end:'2017-07-21',
  updown:''
  
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Seckillactivity extends PureComponent{
constructor(props) {
      super(props);
      this.state = {
       filteredInfo: null,
       sortedInfo: null,
      }
      this.handleChange=this.handleChange.bind(this);
      this.editonClick=this.editonClick.bind(this);
    }

  handleChange(pagination, filters, sorter){
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  editonClick(){
    const { dispatch }=this.props;
    dispatch({
      type:'index/save',
      payload:{
        addactvisible:true
      }
    })
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
      title: '活动标题',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title:'活动状态',
      dataIndex:'state',
      key:'state'
    },
     {
      title:'开始时间',
      dataIndex:'begin',
      key:'begin'
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
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;"  onClick={()=>{router.push('/promotion/setcom')}}>设置商品</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={this.editonClick}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }];


    return (
      <div className="content">
         <Header>秒杀活动列表</Header>
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
          <div style={{marginTop:40}}>
              <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
                <Addactivity/>
                <Button style={{marginLeft:10}} onClick={this.setAgeSort}>秒杀时间段列表</Button>
                
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

