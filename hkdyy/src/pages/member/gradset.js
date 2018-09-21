import React,{PureComponent} from 'react'
import { Button, Input,Radio,Switch} from 'antd'
import Header from '../../components/Card'
import styles from '../business/editinfo.css'

import { connect } from 'dva'
const RadioGroup = Radio.Group;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
 state = {
    value: 1,
  }
    onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render(){
    return (
      <div className="content">
        <Header>添加会员类型</Header>
        <div className="tablebox">
          <div className={styles.editbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}}>添加会员类型</span>
            </div>
            <ul>
              <li>
                <span className={styles.sp}><b>* </b>会员等级名称：</span>
                <Input placeholder="" style={{width:250,height:40}} />
              </li>
              <li>
                <span className={styles.sp}><b>* </b>成长值满足点：</span>
                <Input placeholder="" style={{width:250,height:40}} />
              </li>
              <li>
                <span className={styles.sp}>设为默认会员等级：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>是</Radio>
                  <Radio value={2}> 否</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>免运费标准：</span>
                
                  <Input placeholder="" style={{width:200,height:40}} />
                    <small>元/每笔</small>
                
              </li>
              <li>
                <span className={styles.sp}><b>* </b>奖励评价：</span>
                
                  <Input placeholder="" style={{width:200,height:40}} />
                    <small>成长值/条</small>
                
              </li>
              <li>
                <span className={styles.sp}>满免运费特权：</span>
                <Switch defaultChecked onChange={this.onChangesw} />
              </li>
              <li>
                <span className={styles.sp}>签到奖励特权：</span>
                <Switch defaultChecked onChange={this.onChangesw} />
              </li>
              <li>
                <span className={styles.sp}>评价奖励特权：</span>
                <Switch defaultChecked onChange={this.onChangesw} />
              </li>
              <li>
                <span className={styles.sp}>专享活动特权：</span>
                <Switch defaultChecked onChange={this.onChangesw} />
              </li>
              <li>
                <span className={styles.sp}>会员特价特权：</span>
                <Switch defaultChecked onChange={this.onChangesw} />
              </li>
              <li>
                <span className={styles.sp}>生日礼包特权：</span>
                <Switch defaultChecked onChange={this.onChangesw} />
              </li>
            </ul>
            <a className={styles.upbtn}>提交</a>
          </div>
        </div>
      </div>

    )
  }
}

