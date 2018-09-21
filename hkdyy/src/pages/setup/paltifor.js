import React,{PureComponent} from 'react'
import { Button, Input, Upload, Icon } from 'antd'
import Header from '../../components/Card'
import styles from './activity.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Paltifor extends PureComponent{
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
     <Header>平台信息</Header>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left"  style={{marginLeft:"20px"}}>平台信息设置</span>
          </div> 
          <ul>
            <li>
              <span className={styles.sp}><b>* </b>平台名称：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>平台标题：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>平台描述：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>关键词：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>平台LOGO：</span>
              <Upload {...props2}>
                  <Button>
                    <Icon type="upload" /> Upload
                  </Button>
              </Upload>
              <font>只能上传jpg/png格式文件，文件不能超过50kb</font>
            </li>
            <li>
              <span className={styles.sp}><b>* </b>客服热线：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}><b>* </b>客服邮箱：</span>
              <Input placeholder="" style={{width:220,height:40}} />
            </li>
            <li>
              <span className={styles.sp}>简介：</span>
              <textarea placeholder="请输入内容"></textarea>
              <font>该信息将在用户中心欢迎页面显示</font>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

