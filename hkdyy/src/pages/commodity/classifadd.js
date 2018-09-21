import React,{PureComponent} from 'react'
import { Button,Input,Select,InputNumber ,Radio , Upload, Icon} from 'antd'
import Header from '../../components/Card'
import styles from '../setup/activity.css'

import { connect } from 'dva'
const Option = Select.Option;
const RadioGroup = Radio.Group;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
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
        <Header>添加分类</Header>
        <div className="tablebox">
          <div className={styles.addbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}} className="left">添加分类</span>
            </div>
            <ul>
              <li>
                <span className={styles.sp}><b>* </b>分类名称：</span>
                <Input placeholder="" style={{width:250,height:40}} />
              </li>
              <li>
                <span className={styles.sp}>上级分类：</span>
                 <Select size="large" placeholder="请选择分类" style={{ width: 250 }} onChange={this.handleChange}>
                  <Option value="服装">服装</Option>
                  <Option value="内衣">内衣</Option>
                  <Option value="童装">童装</Option>
                 </Select>
                <font>不选择分类默认为顶级分类</font>
              </li>
              <li>
                <span className={styles.sp}>排序：</span>
                <InputNumber size="large" onChange={this.onc} />
              </li>

              <li>
                <span className={styles.sp}>是否显示在导航栏：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>分类图标：</span>
                 <Upload {...props2}>
                    <Button>
                      <Icon type="upload" /> Upload
                    </Button>
                  </Upload>
                  <font>图标尺寸为18*18比例，大小不能超过200KB，图片只能为jpg、png、gif格式</font>
              </li>
              <li>
                <span className={styles.sp}>分类描述：</span>
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

