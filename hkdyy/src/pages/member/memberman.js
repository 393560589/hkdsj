import React,{PureComponent,Fragment} from 'react'
import Header from '../../components/Card'
import { Button,Switch,Icon } from 'antd'
import styles from '../business/businessman.css'
//import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
     <Fragment>
        <div className="content">
          <Header>用户详情</Header>
          <div className="tablebox">
              <table width="100%" className={styles.toubu}>
                <tr>
                  <td rowSpan="5" width="238">
                    <div className={styles.headpoto}><Icon type="user" theme="outlined" /></div>
                    <span className={styles.name}>1515151515</span>
                    <small class={styles.denji}>高级会员</small>
                  </td>
                  <td className={styles.th}>商家ID</td>
                  <td>8447466</td>
                  <td className={styles.th}>商家联系人</td>
                  <td>马修</td>
                </tr>
                <tr>
                  <td className={styles.th}>商家名称</td>
                  <td>大风车</td>
                  <td className={styles.th}>性别</td>
                  <td>男</td>
                </tr>
                <tr>
                  <td className={styles.th}>联系方式</td>
                  <td>15258884455</td>
                  <td className={styles.th}>注册时间</td>
                  <td>2017-07-24 17:25:38</td>
                </tr>
                <tr>
                  <td className={styles.th}>城市</td>
                  <td>广东省深圳市</td>
                  <td className={styles.th}>用户来源</td>
                  <td>渠道合作</td>
                </tr>
                <tr>
                  <td className={styles.th}></td>
                  <td></td>
                  <td className={styles.th}></td>
                  <td></td>
                </tr>
              </table>
              <div className={styles.xqtitle}>
                <i className="fa fa-bookmark"></i>
                <span>统计信息</span>
              </div>
              <table width="100%" className="litable bodz">
                      <tr>
                        <th>收入金额</th>
                        <th>订单数量</th>
                        <th>粉丝</th>
                        <th>成长值</th>
                        <th>商品数量</th>
                        <th>好评数</th>
                        <th>登录次数</th>
                      </tr>
                      <tr>
                        <td>¥20000.00</td>
                        <td>10</td>
                        <td>100</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>10</td>
                        <td>10</td>
                      </tr>
                  </table>
              <div className={styles.xqtitle}>
                <i className="fa fa-bookmark"></i>
                <span>发货地址</span>
              </div>
              <table width="100%" className="litable">
                  <tr>
                    <th>姓名</th>
                    <th>手机号码</th>
                    <th>详细地址</th>
                    <th>邮政编码</th>
                    <th>默认地址</th>
                  </tr>
                  <tr>
                    <td>大梨</td>
                    <td>180****1849</td>
                    <td>广东省深圳市南山区科兴科学园</td>
                    <td>518000</td>
                    <td><Switch defaultChecked onChange={this.onChange} /></td>
                  </tr>
                  <tr>
                    <td>大梨</td>
                    <td>180****1849</td>
                    <td>广东省深圳市南山区科兴科学园</td>
                    <td>518000</td>
                    <td><Switch defaultChecked onChange={this.onChange} /></td>
                  </tr>
                </table>
                </div>
        </div>
      </Fragment>
    )
  }
}

