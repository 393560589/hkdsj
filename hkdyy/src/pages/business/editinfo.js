import React,{PureComponent,Fragment} from 'react'
import Header from '../../components/Card'
import { Input, Radio , Cascader,Switch} from 'antd';
import styles from './editinfo.css'
const RadioGroup = Radio.Group;
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    
  }],
}];
export default class BusinessList extends PureComponent{

  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
onChangesw(checked) {
  console.log(`switch to ${checked}`);
}

  render(){
    return (
      <Fragment>
        <div className="content">
          <Header>编辑资料</Header>
          <div className="tablebox">
            <div class={styles.editbox}>
              <div class="tip-title">
                <span style={{marginLeft:20}}>编辑资料</span>
              </div>
              <ul>
                <li>
                  <span className={styles.sp}>手机号码：</span>
                  <Input placeholder="" style={{width:250,height:40}} />
                </li>
                <li>
                  <span className={styles.sp}>商家名称：</span>
                  <Input placeholder="" style={{width:250,height:40}} />
                </li>
                <li>
                  <span className={styles.sp}>商家联系人：</span>
                 <Input placeholder="" style={{width:250,height:40}} />
                </li>
                <li>
                  <span className={styles.sp}>商家来源：</span>
                  <Input placeholder="" style={{width:250,height:40}} />
                </li>
                <li>
                  <span className={styles.sp}>性别：</span>
                   <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>保密</Radio>
                    <Radio value={2}>男</Radio>
                    <Radio value={3}>女</Radio>
                  </RadioGroup>
                </li>
                <li>
                  <span className={styles.sp}>城市：</span>
                  <Cascader style={{width:250}}  sty options={options} onChange={this.onChangecas} placeholder="Please select" />
                </li>
                <li>
                  <span className={styles.sp}>新密码：</span>
                  <Input type="password" style={{width:250,height:40}} />
                </li>
                <li>
                  <span className={styles.sp}>确认密码：</span>
                  <Input type="password" style={{width:250,height:40}} />
                </li>
                <li>
                  <span className={styles.sp}>账户启用状态：</span>
                  <Switch defaultChecked onChange={this.onChangesw} />
                </li>
              </ul>
              <a className={styles.upbtn}>提交</a>
            </div>
           
          </div>
        </div>
        
      </Fragment>
    )
  }
}

