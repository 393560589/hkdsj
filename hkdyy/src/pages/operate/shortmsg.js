import React,{PureComponent} from 'react'
import { Button,List, Avatar, Icon , Select,Card,Checkbox } from 'antd'
import Header from '../../components/Card'
import Shortmsg from '../../components/Shortmsg/Shortmsg'
import styles from './shortmsg.css'

import { connect } from 'dva'

const data = [
  {
    populer: 'admin',
    time:'2017-08-02 15:47:44',
    number:'200',
    content:'敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
  },
  {
     populer: 'admin',
    time:'2017-08-02 15:47:44',
    number:'200',
    content:'敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
  },
  {
     populer: 'admin',
    time:'2017-08-02 15:47:44',
    number:'200',
    content:'敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
  },
  {
     populer: 'admin',
    time:'2017-08-02 15:47:44',
    number:'200',
    content:'敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
  },
  {
     populer: 'admin',
    time:'2017-08-02 15:47:44',
    number:'200',
    content:'敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
  },
  {
     populer: 'admin',
    time:'2017-08-02 15:47:44',
    number:'200',
    content:'敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
  },
];
const Option = Select.Option;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
 constructor(props) {
    super(props);
    this.state = {
     
    }
   this.shortonClick=this.shortonClick.bind(this);
  }

  shortonClick(){
    const { dispatch }=this.props;
    dispatch({
      type:'index/save',
      payload:{
        shortmvisible:true
      }
    });
  }

  render(){
  
    return (
      <div className="content">
         <Header>短信消息</Header>
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
            <div className="table-operations" style={{textAlign:'right'}}>
                <Button onClick={this.shortonClick}>发送短信</Button>
                <Shortmsg selectv={1}/>
                <Button>群发消息</Button>
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
            <List
              size="small"
              header="数据列表"
              grid={{ gutter: 10 }}
              dataSource={data}
              footer={
                      <div>
                        <Checkbox style={{marginLeft:20}}>全选</Checkbox>
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
                    }
              pagination={true}

              pagination={{ 
                    showQuickJumper:true,
                    showSizeChanger:true,
                    total:100,
                    showTotal: function () {  
                        return '共 ' + 100 + ' 条数据'; 
                    }
                   }}
              renderItem={item => (
                <List.Item>
                  <Card title={<div><Checkbox/><span>发布人员：</span>{item.populer}<span style={{marginLeft:10}}>发送时间：</span>{item.time}<span style={{marginLeft:10}}>接受对象：</span>{item.number}人<a style={{float:'right'}}>删除</a></div>}>{item.content}</Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>

    )
  }
}

