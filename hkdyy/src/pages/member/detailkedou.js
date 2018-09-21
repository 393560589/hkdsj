import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select } from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'
const data = [{
  key: '1',
  orgin:'购物奖励',
  change:'+100',
  time: '2017-07-14 18:00:49',
  remarks:'操作人员：admin 操作备注：无',
  
}, {
  key: '2',
 orgin:'购物奖励',
  change:'+100',
  time: '2017-07-14 18:00:49',
  remarks:'操作人员：admin 操作备注：无',
}];

const Option = Select.Option;
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
      title: '优币来源',
      dataIndex: 'orgin',
      key: 'orgin',
    }, {
      title: '优币变化',
      dataIndex: 'change',
      key: 'change',
    }, {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
     {
      title: '备注',
      dataIndex: 'remarks',
      key: 'remarks',
    }];
    return (
      <div className="content">
        <Header>蝌蚪币币明细</Header>
        <div className="tablebox">
          <table width="100%" className="litable bodz">
            <tr>
              <th>用户账号</th>
              <th>用户昵称</th>
              <th>会员等级</th>
              <th>可用蝌蚪币</th>
              <th>成长值</th>
            </tr>
            <tr>
              <td>1800000000</td>
              <td>Windir</td>
              <td>黄金会员</td>
              <td>1000</td>
              <td>1000</td>
            </tr>
          </table>

          <div className="screen" style={{marginTop:20}}>
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <a>查询结果</a>
              </div>
            </div>
            <div className="scr-con">
              <span>蝌蚪币来源：</span>
              <select>
                <option value="" disabled selected hidden>全部</option>
                <option value="">普通会员</option>
                <option value="">黄金会员</option>
              </select>
              <span>操作时间：</span>
              <div className="left"><input type="text" placeholder="请选择时间" name="" id="chistime"/><i
                className="fa fa-clock-o"></i></div>
            </div>
          </div>
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              
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

