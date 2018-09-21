import React,{PureComponent} from 'react'
import { Button, Radio, Table , Divider , Select, Modal,Input,Checkbox} from 'antd'
import styles from './index.less'
import Header from '../../components/Card'
import Shortmsg from '../../components/Shortmsg/Shortmsg'
import Systemsg from '../../components/systemsg'
import Setag from '../../components/setag'
import Appmsg from '../../components/Appmsg'
import Coupon from '../../components/coupon'
import { connect } from 'dva'
import router from 'umi/router'
const data = [{
  key: '1',
  number:'8848',
  account:'15154554846',
  grade: '黄金会员',
  cost: '¥2000.00',
  costnumber: '10',
  avarge:'¥200.00',
  time:'2017-07-03 14:36:21',
}, {
  key: '2',
  number:'8848',
  account:'15154554846',
  grade: '黄金会员',
  cost: '¥2000.00',
  costnumber: '10',
  avarge:'¥200.00',
  time:'2017-07-03 14:36:21',
}];


const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: null,
      sortedInfo: null,
    }
    this.handleChange=this.handleChange.bind(this);
   
  }

  handleChange(pagination, filters, sorter){
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
      title: '用户ID',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '用户账号',
      dataIndex: 'account',
      key: 'account',
    }, {
      title: '会员等级',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title:'消费金额',
      dataIndex:'cost',
      key:'cost'
    },
    {
      title:'消费次数',
      dataIndex:'costnumber',
      key:'costnumber',
    },
    {
      title:'订单均价',
      dataIndex:'avarge',
      key:'avarge',
    },
     {
      title:'最近购买时间',
      dataIndex:'time',
      key:'time',
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={()=>{router.push('/member/memberman')}}>查看</a>
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
        <Header>购买力筛选</Header>
        <div className="tablebox">
          <div className={styles.screenbox}>
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <Button style={{marginTop:8,textAlign:'center'}} onClick={this.setAgeSort}>查询结果</Button>
              </div>
            </div>
            <div className={styles.screenlist}>
              <div className="radioborder">
                <span className={styles.sp}>最近消费：</span>
                <RadioGroup onChange={this.onChange} defaultValue="a">
                  <RadioButton value="a">不限</RadioButton>
                  <RadioButton value="b">1周内</RadioButton>
                  <RadioButton value="c">2周内</RadioButton>
                  <RadioButton value="d">1个月内</RadioButton>
                  <RadioButton value="e">1个月前</RadioButton>
                  <RadioButton value="f">2个月前</RadioButton>
                  <RadioButton value="g">3个月前</RadioButton>
                  <RadioButton value="h">6个月前</RadioButton>
                  <RadioButton value="i">自定义</RadioButton>
                </RadioGroup>
              </div>
              <div className="radioborder">
                <span className={styles.sp}>消费次数：</span>
                <RadioGroup onChange={this.onChange} defaultValue="a">
                  <RadioButton value="a">不限</RadioButton>
                  <RadioButton value="b">1次+</RadioButton>
                  <RadioButton value="c">2次+</RadioButton>
                  <RadioButton value="d">3次+</RadioButton>
                  <RadioButton value="e">4次+</RadioButton>
                  <RadioButton value="f">10次+</RadioButton>
                  <RadioButton value="g">20次+</RadioButton>
                  <RadioButton value="h">30次+</RadioButton>
                  <RadioButton value="i">自定义</RadioButton>
                </RadioGroup>
              </div>
              <div className="radioborder">
                <span className={styles.sp}>消费金额：</span>
                <RadioGroup onChange={this.onChange} defaultValue="a">
                  <RadioButton value="a">不限</RadioButton>
                  <RadioButton value="b">0-50</RadioButton>
                  <RadioButton value="c">51-100</RadioButton>
                  <RadioButton value="d">101-150</RadioButton>
                  <RadioButton value="e">151-200</RadioButton>
                  <RadioButton value="f">201-300</RadioButton>
                  <RadioButton value="g">301-500</RadioButton>
                  <RadioButton value="h">501-1000</RadioButton>
                  <RadioButton value="i">自定义</RadioButton>
                </RadioGroup>
              </div>
              <div className="radioborder">
                <span className={styles.sp}>订单均价：</span>
                <RadioGroup onChange={this.onChange} defaultValue="a">
                  <RadioButton value="a">不限</RadioButton>
                  <RadioButton value="b">0-20</RadioButton>
                  <RadioButton value="c">21-50</RadioButton>
                  <RadioButton value="d">51-100</RadioButton>
                  <RadioButton value="e">101-150</RadioButton>
                  <RadioButton value="f">151-200</RadioButton>
                  <RadioButton value="g">201-300</RadioButton>
                  <RadioButton value="h">301-500</RadioButton>
                  <RadioButton value="i">自定义</RadioButton>
                </RadioGroup>
              </div>
              <div className="radioborder">
                <span className={styles.sp}>商品分类：</span>
                <RadioGroup onChange={this.onChange} defaultValue="a">
                  <RadioButton value="a">不限</RadioButton>
                  <RadioButton value="b">服装</RadioButton>
                  <RadioButton value="c">餐厨</RadioButton>
                  <RadioButton value="d">配件</RadioButton>
                  <RadioButton value="e">居家</RadioButton>
                  <RadioButton value="f">洗护</RadioButton>
                  <RadioButton value="g">婴童</RadioButton>
                  <RadioButton value="h">杂货</RadioButton>
                  <RadioButton value="i">饮食</RadioButton>
                </RadioGroup>
              </div>
              <div className="radioborder">
                <span className={styles.sp}>会员等级：</span>
                <RadioGroup onChange={this.onChange} defaultValue="a">
                  <RadioButton value="a">不限</RadioButton>
                  <RadioButton value="b">普通会员</RadioButton>
                  <RadioButton value="c">黄金会员</RadioButton>
                  <RadioButton value="d">白金会员</RadioButton>
                  <RadioButton value="e">钻石会员</RadioButton>
                  
                </RadioGroup>
              </div>
              <div className="radioborder">
                <span className={styles.sp}>用户标签：</span>
                <RadioGroup onChange={this.onChange} defaultValue="a">
                  <RadioButton value="a">标签名称</RadioButton>
                  <RadioButton value="b">标签名称</RadioButton>
                  <RadioButton value="c">标签名称</RadioButton>
                  <RadioButton value="d">标签名称</RadioButton>
                  <RadioButton value="e">标签名称</RadioButton>
                  <RadioButton value="f">标签名称</RadioButton>
                  <RadioButton value="g">标签名称</RadioButton>
                  <RadioButton value="h">标签名称</RadioButton>
                  <RadioButton value="i">更多</RadioButton>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <Shortmsg/>
              <Systemsg/>
              <Appmsg/>
              <Setag/>
              <Coupon/>
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

