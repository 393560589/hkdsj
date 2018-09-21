import React,{PureComponent} from 'react'
import { Button, Input,Checkbox ,Radio } from 'antd'
import Header from '../../components/Card'
import styles from './activity.css'

import { connect } from 'dva'
const RadioGroup = Radio.Group;
@connect(({index})=>({index}))

export default class Vcode extends PureComponent{

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
     <Header>验证码设置</Header>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left"  style={{marginLeft:"20px"}}>验证码设置</span>
          </div> 
          <ul>
            <li>
              <span className={styles.sp}><b>* </b>启用验证码：</span>
              <div className="left">
                <Checkbox onChange={this.onChange}>新用户注册</Checkbox><br/>
                <Checkbox onChange={this.onChange}>用户登录</Checkbox><br/>
                <Checkbox onChange={this.onChange}>发表相关评论</Checkbox><br/>
                <Checkbox onChange={this.onChange}>后台系统登录</Checkbox>
              </div>
              
              <font>启用验证码可以避免恶意批量评论或提交信息，推荐打开验证码功能。注意: 启用验证码<br/>会使得部分操作变得繁琐，建议仅在必需时打开</font>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>登录失败时显示验证码：</span>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>关闭</Radio>
                <Radio value={2}>开启</Radio>
              </RadioGroup>
              <font>选择“是”将在用户登录失败 3 次后才显示验证码，选择“否”将始终在登录时显示验证<br/>码。注意: 只有在启用了用户登录验证码时本设置才有效</font>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>验证码方式：</span>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>图形验证码</Radio>
                <Radio value={2}>滑动验证码</Radio>
              </RadioGroup>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>图形验证码宽度：</span>
              <Input placeholder="" style={{width:220,height:40}} />
              <font>验证码图片的宽度，范围在 40～145 之间</font>
            </li>
             <li>
              <span className={styles.sp}><b>* </b>图形验证码高度：</span>
              <Input placeholder="" style={{width:220,height:40}} />
              <font>验证码图片的高度，范围在 15～50 之间</font>
            </li>
             <li>
              <span className={styles.sp}><b>* </b>图形验证码内容大小：</span>
              <Input placeholder="" style={{width:220,height:40}} />
              <font>验证码内容大小，范围在16-20之间</font>
            </li>
             <li>
              <span className={styles.sp}><b>* </b>图形验证码位数：</span>
              <Input placeholder="" style={{width:220,height:40}} />
              <font>图形验证码位数，范围4-6之间</font>
            </li>
             <li>
              <span className={styles.sp}><b>* </b>图形验证码预览：</span>
              
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

