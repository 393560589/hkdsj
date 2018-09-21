import React,{PureComponent} from 'react'
import { Button,Radio ,Input,InputNumber } from 'antd'
import Header from '../../components/Card'
import styles from './activity.css'
import Cityadds from './cityadds'

import { connect } from 'dva'
const RadioGroup = Radio.Group;
@connect(({index})=>({index}))

export default class Formadd extends PureComponent{
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
     <Header>添加模板</Header>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left" style={{marginLeft:"20px"}}>添加模板</span>
          </div> 
          <ul>
            <li>
              <span className={styles.sp}><b>* </b>模板名称：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>费用计算方式：</span>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>按重量计算</Radio>
                <Radio value={2}>按商品件数计算</Radio>
              </RadioGroup>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>首重（kg）：</span>
              <InputNumber min={0} size="large" placeholder="" style={{width:220,height:40}} />
             
            </li>
             <li>
              <span className={styles.sp}><b>* </b>首费（元）：</span>
               <InputNumber min={0} size="large" placeholder="" style={{width:220,height:40}} />
              
            </li>
             <li>
              <span className={styles.sp}><b>* </b>续重（kg）：</span>
              <InputNumber min={0} size="large" placeholder="" style={{width:220,height:40}} />
              
            </li>
             <li>
              <span className={styles.sp}><b>* </b>续费（元）：</span>
               <InputNumber min={0} size="large" placeholder="" style={{width:220,height:40}} />
            
            </li>
             <li>
              <span className={styles.sp}><b>* </b>目的地：</span>
              <Cityadds/>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

