import React,{PureComponent} from 'react'
import moment from 'moment';
import { Input ,DatePicker,  Radio,Upload, Button, Icon } from 'antd';
import Header from '../../components/Card'
import styles from '../setup/activity.css'

import { connect } from 'dva'
const RadioGroup = Radio.Group;

@connect(({index})=>({index}))

export default class Activityadd extends PureComponent{
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
    const fileList = [];
    const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};



    return (
     <div className="content">
      <Header>添加活动</Header>
      <div className="tablebox">
        <div className={styles.addbox}>
          <ul style={{width:700}}>
            <li>
              <span className={styles.sp}><b>* </b>活动标题：</span>
              <Input placeholder="" style={{width:338,height:40}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>开始时间：</span>
              <DatePicker
                style={{width:200}}
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="请选择时间"
                size="large"
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>结束时间：</span>
              <DatePicker
                style={{width:200}}
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="请选择时间"
                size="large"
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              />
            </li>

            <li>
              <span className={styles.sp}>上线/下架：</span>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>上线</Radio>
                <Radio value={2}>下架</Radio>
              </RadioGroup>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>标题图片：</span>
              <Upload {...props2}>
                <Button>
                  <Icon type="upload" /> Upload
                </Button>
              </Upload>
              <font>只能上传jpg/png格式文件，文件不能超过50kb</font>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>活动描述：</span>
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

