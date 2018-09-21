import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import Header from '../../components/Card'
import styles from './awardset.css'
//import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <Header>对账单详情</Header>
        <div className="tablebox">
          <div className={styles.asetbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}}>对账单信息</span>
            </div>
            <div className={styles.neptitle}>
              <i className="fa fa-bookmark"></i>
              <span>订单信息</span>

            </div>
            <dl className={styles.nepdl}>
              <dt>订单编号</dt>
              <dd>
                <span>201707196398345</span>
              </dd>
              <dt>订单金额</dt>
              <dd>
                <span>¥200.00</span>
              </dd>
              <dt>支付方式</dt>
              <dd>
                <span>支付宝</span>
              </dd>
              <dt>支付时间</dt>
              <dd>
                <span>2017-07-19 14:48:38 </span>
              </dd>
              <dt>订单状态</dt>
              <dd>
                <span>已完成</span>
              </dd>

            </dl>
            <div className={styles.neptitle}>
              <i className="fa fa-bookmark"></i>
              <span>对账信息</span>

            </div>
            <dl className={styles.nepdl}>
              <dt>对账状态</dt>
              <dd>
                <span>未对账</span>
              </dd>

            </dl>
            <a className={styles.upbtn}>完成对账</a>
          </div>
        </div>
      </div>

    )
  }
}

