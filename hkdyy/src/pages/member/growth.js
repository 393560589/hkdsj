import React,{PureComponent} from 'react'
import Header from '../../components/Card'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Reviseyb from '../../components/reviseyb'
import router from 'umi/router'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'8848',
  account:'15154554846',
  name: '大风车',
  grade: '初级会员',
  kdb: '1000',
  kdbhistory:'1000',
  growth:'1000',
}, {
  key: '2',
  number:'8848',
  account:'15154554846',
  name: '大风车',
  grade: '初级会员',
  kdb: '1000',
  kdbhistory:'1000',
  growth:'1000',
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
 constructor(props) {
    super(props);
      this.state = {
        filteredInfo: null,
        sortedInfo: null,
      }
    this.changeonClick=this.changeonClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    }

  handleChange(pagination, filters, sorter){
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  changeonClick(){
    const { dispatch } = this.props;
      dispatch({
        type:'index/save',
        payload:{
          ybmodvisible:true
        }
      })
  }

  render(){

     let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '用户ID',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '用户账号',
      dataIndex: 'account',
      key: 'account',
    }, {
      title: '用户昵称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title:'会员等级 ',
      dataIndex:'grade',
      key:'grade'
    },
    {
      title:'可用蝌蚪币',
      dataIndex:'kdb',
      key:'kdb',
    },
    {
      title:'历史蝌蚪币',
      dataIndex:'kdbhistory',
      key:'kdbhistory',
    },
    {
      title:'成长值',
      dataIndex:'growth',
      key:'growth',
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;"  onClick={()=>{router.push('/member/detailkedou')}}>蝌蚪币明细</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>{router.push('/member/detailgrowth')}}>成长值明细</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={this.changeonClick}>修改数值</a>
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
         <Header>成长值及蝌蚪币查询</Header>
        <div className="tablebox">
         <div className="screenbox"></div>
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
               <Reviseyb/>
               <Select
                showSearch
                style={{ width: 100,marginLeft:10}}
                placeholder="导出数据"
                optionFilterProp="children"
                onChange={this.selhandleChange}
                onFocus={this.selhandleFocus}
                onBlur={this.selhandleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="30">选中用户</Option>
                <Option value="40">全部用户</Option>
              </Select>
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

