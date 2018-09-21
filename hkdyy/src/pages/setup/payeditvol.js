import React,{PureComponent} from 'react'
import { Button, Input} from 'antd'
import Header from '../../components/Card'
import styles from './activity.css'

import { connect } from 'dva'
const { TextArea } = Input;
@connect(({index})=>({index}))

export default class Payeditvol extends PureComponent{
  render(){
    return (
    <div className="content">
     <Header>编辑支付方式</Header>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left" style={{marginLeft:"20px"}}>编辑支付方式</span>
          </div> 
          <ul>
            <li>
              <span className={styles.sp}><b>* </b>支付方式名称：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}>支付方式描述：</span>
              <TextArea placeholder="请输入内容" rows={6} />
            </li>
            <li>
              <span className={styles.sp}>微信公众号AppId：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
             <li>
              <span className={styles.sp}>微信公众号AppSecret：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
             <li>
              <span className={styles.sp}>商户支付密钥Key：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
             <li>
              <span className={styles.sp}>受理商ID(即微信支付商户号)：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
             <li>
              <span className={styles.sp}>支付手续费：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
             <li>
              <span className={styles.sp}>货到付款：</span>
              <small>是</small>
            </li>
             <li>
              <span className={styles.sp}>在线支付：</span>
              <small>否</small>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

