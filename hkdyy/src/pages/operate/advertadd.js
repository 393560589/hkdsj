import React,{PureComponent} from 'react'
import { Button,  Select ,Radio,Input, DatePicker,InputNumber,Upload,Icon} from 'antd'
import Header from '../../components/Card'
import styles from '../setup/activity.css'

import { connect } from 'dva'
const Option = Select.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  state = {
    value: 1
  }

  onChange1 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
onChange(date, dateString) {
  console.log(date, dateString);
}
  render(){
    const fileList = [];
    const props2 = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      defaultFileList: [...fileList],
      className: 'upload-list-inline',
    };
    return (
      <div className="content">
       <Header>添加广告</Header>
        <div className="tablebox">
          <div className={styles.addbox}>
            <div className="tip-title">
              <span className="left" style={{marginLeft:20}}>添加广告</span>
            </div> 
            <ul style={{width:700}}>
              <li>
                <span className={styles.sp}><b>* </b>广告名称：</span>
                <Input placeholder="" style={{width:360,height:40}} />
                <font>广告名称只是作为辨别多个广告条目之用，并不显示在广告中</font>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>广告位置：</span>
                <Select defaultValue="PC端首页轮播" size="large" style={{ width: 240 }} >
                  <Option value="注册赠券">APP首页轮播</Option>
                  <Option value="购物赠券">PC端首页轮播</Option>
                  <Option value="全场赠券">PC端分类广告</Option>
                </Select>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>开始时间：</span>
                <DatePicker size="large" onChange={this.onChange} style={{ width: 240}} />
              </li>
              <li>
                <span className={styles.sp}><b>* </b>结束时间：</span>
                 <DatePicker size="large" onChange={this.onChange} style={{ width: 240 }} />
              </li>

              <li>
                <span className={styles.sp}>上线/下线：</span>
                <RadioGroup onChange={this.onChange1} value={this.state.value}>
                  <Radio value={1}>上线</Radio>
                  <Radio value={2}>下线</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>广告图片：</span>
                <Upload {...props2}>
                  <Button>
                    <Icon type="upload" /> Upload
                  </Button>
                </Upload>
                <font>只能上传jpg/png格式文件，文件不能超过50kb</font>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>广告链接：</span>
                <Input placeholder="" style={{width:360,height:40}} />
              </li>
              <li>
                <span className={styles.sp}>广告备注：</span>
                <textarea placeholder="请输入内容"></textarea>
              </li>
            </ul>
            <a className={styles.upbtn}>提交</a>
          </div> 
        </div>
      </div>

    )
  }
}

