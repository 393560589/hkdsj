import React,{PureComponent} from 'react'
import { Button, Select , Radio ,Input, DatePicker,InputNumber} from 'antd'
import Header from '../../components/Card'
import Addfl from './addfl'
import styles from './coupon.css'

import { connect } from 'dva'
const Option = Select.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
@connect(({index})=>({index}))

export default class Addcoupon extends PureComponent{
  state = {
    value: 1,
    value2:1,
    value3:1,
  }
onChanged(date, dateString) {
  console.log(date, dateString);
}
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  }
  onChange3 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  }
  render(){


    return (
      <div className="content">
      <Header>添加优惠券</Header>
      <div className="tablebox">
        <div className="tip-title" style={{border:"1px solid #e4e4e4"}}>
            <span style={{marginLeft:'20px'}}>添加优惠券</span>
        </div>
        <div className={styles.addcouponbox}>
          <ul className={styles.adul}>
            <li>
              <span className={styles.sp}>优惠券类型：</span>
              <Select defaultValue="注册赠券" size="large" style={{ width: 240 }} >
                <Option value="注册赠券">注册赠券</Option>
                <Option value="购物赠券">购物赠券</Option>
                <Option value="全场赠券">全场赠券</Option>
                <Option value="会员赠券">会员赠券</Option>
              </Select>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>优惠券名称：</span>
              <Input placeholder="" style={{width:240,height:40}} />
            </li>
            <li>
              <span className={styles.sp}>适用平台：</span>
              <Select defaultValue="全平台" size="large" style={{ width: 240 }} >
                <Option value="全平台">全平台</Option>
                <Option value="购物赠券">PC端</Option>
                <Option value="全场赠券">移动端</Option>
              </Select>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>总发行量：</span>
              <InputNumber size="large" placeholder="只能输入正整数，输入0为无限制" style={{width:240,height:40,fontSize:14}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>面额：</span>
              <div>
                 <InputNumber size="large" placeholder="" style={{width:240,height:40}} />
                <small>元</small>
              </div>
              <font>面值只能是数值，0.01-10000，限2位小数</font>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>每人限领：</span>
              <small>1张</small>
            </li>
            <li>
              <span className={styles.sp}>使用门槛：</span>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>无限制</Radio>
                <Radio value={2}>
                  满
                  <InputNumber size="large" style={{ width: 80, marginLeft: 10,marginRight:10 }} /> 
                  元可用
                </Radio>
              </RadioGroup>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>有效期：</span>
              <div className="daterang">
                <RadioGroup onChange={this.onChange2} value={this.state.value2}>
                  <Radio value={1}>
                    日期范围
                    <RangePicker size="large" style={{ width: 240, marginLeft: 10 }} onChange={this.onChanged} />
                  </Radio>
                  <br/>
                  <Radio value={2}>
                    固定天数
                    <InputNumber size="large" style={{ width: 240, marginLeft: 10 ,marginTop:10}} /> 
                  </Radio>
                 </RadioGroup>
                  
              </div>
            </li>
            <li>
              <span className={styles.sp}>可使用商品：</span>
              <RadioGroup onChange={this.onChange3} value={this.state.value3}>
                  <Radio value={1}>全场通用</Radio>
                  <Radio value={2}>制定分类</Radio>
                 </RadioGroup>
            </li>
          </ul>
          {this.state.value3===2?<Addfl/>:null}
          <div className={styles.remarks}>
            <span className={styles.sp}>备注：</span>
            <textarea placeholder="请输入内容"></textarea>
          </div>
          <a className={styles.upbtn}>提交</a>
        </div>
      </div>
    </div>

    )
  }
}

