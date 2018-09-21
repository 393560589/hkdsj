import React,{PureComponent} from 'react'
import { Button, Radio, Table , Divider , Select} from 'antd'
import Header from '../../components/Card'
import Addtag from '../../components/addtag'
import { connect } from 'dva'

const data = [{
  key: '1',
  name:'优质用户',
  usernumber:'10000',
  label: '累计成功交易：10笔 累计购买金额：¥2000.00',
  
}, {
  key: '2',
  name:'优质用户',
  usernumber:'10000',
  label: '累计成功交易：10笔 累计购买金额：¥2000.00',
}];

const Option = Select.Option;
@connect(({index})=>({...index}))

export default class Accountset extends PureComponent{
  constructor(props) {
    super(props);
      this.state = {
        filteredInfo: null,
        sortedInfo: null,
      }
    this.editClick=this.editClick.bind(this);
    }
 

  handleChange(pagination, filters, sorter){
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  editClick(){
    const { dispatch } = this.props;
      dispatch({
        type:'index/save',
        payload:{
          addvisible:true
        }
      })
  }
  render(){
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '标签名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '会员人数',
      dataIndex: 'usernumber',
      key: 'usernumber',
    }, {
      title: '自动打标签条件',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={this.editClick}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
          <Divider type="vertical" />
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
        <Header>标签列表</Header>

        <div className="tablebox">
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <Addtag/>
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
                      
                        <Option value="删除">删除</Option>
                      </Select>
                      <Button style={{ marginLeft:10}} onClick={this.sureCos}>确定</Button>
                      </div>
                    )}
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

