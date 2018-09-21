import React,{PureComponent} from 'react'
import { Button, Input, Select} from 'antd'
import Header from '../../components/Card'
import styles from '../setup/activity.css'

import { connect } from 'dva'
const Option = Select.Option;
const { TextArea } = Input;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <Header>添加成员</Header>
        <div className="tablebox">
          <div className={styles.addbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}} className="left">添加成员</span>
            </div> 
            <ul>
              <li>
                <span className={styles.sp}><b>* </b>成员名称：</span>
                <Input placeholder="" style={{width:220,height:40}} />
              </li>
              <li>
                <span className={styles.sp}><b>* </b>成员姓名：</span>
                <Input placeholder="" style={{width:220,height:40}} />
              </li>
              <li>
                <span className={styles.sp}><b>* </b>邮箱地址：</span>
                <Input placeholder="" style={{width:220,height:40}} />
              </li>
              <li>
                <span className={styles.sp}><b>* </b>所属部门：</span>
                <Select
                  showSearch
                  size="large"
                  style={{ width: 220}}
                  defaultValue="30"
                  optionFilterProp="children"
                  onChange={this.selhandleChange}
                  onFocus={this.selhandleFocus}
                  onBlur={this.selhandleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                  <Option value="30">全部</Option>
                  <Option value="40">销售部</Option>
                  <Option value="50">技术部</Option>
                </Select>
                <font>选择所属部门后默认继承部门权限，可在成员列表中单独设置权限</font>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>登录密码：</span>
                <Input type="password" placeholder="" style={{width:220,height:40}} />
              </li>
              <li>
                <span className={styles.sp}><b>* </b>确认密码：</span>
                <Input type="password" placeholder="" style={{width:220,height:40}} />
              </li>
              <li>
                <span className={styles.sp}>备注信息：</span>
                <TextArea placeholder="请输入内容" rows={4} />
              </li>
            </ul>
            <Button className={styles.upbtn}>提交</Button>
          </div> 
        </div>
      </div>

    )
  }
}

