import React,{PureComponent} from 'react'
import { Button, Radio ,Input,InputNumber,Upload, Icon } from 'antd'
import Header from '../../components/Card'
import styles from './rulerset.css'

import { connect } from 'dva'
const RadioGroup = Radio.Group;
@connect(({index})=>({index}))

export default class Basic extends PureComponent{
  state = {
    value: 1,
    value2:1,
    value3:1,
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
    <Header>基本设置</Header>
    <div className="tablebox">
      <div className={styles.rulerbox}>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>常规设置</span>
          </div>
          <div className={styles.con}>
            <ul>
              <li>
                <span className={styles.sp}><b>* </b>热门搜索关键字：</span>
                <Input placeholder="" style={{width:220,height:40}} />
                <font className={styles.btip}>热门搜索关键字,请用半角逗号(,)分隔多个关键字</font>
              </li>
              <li>
                <span  className={styles.sp}><b>* </b>时间格式：</span>
                <Input placeholder="Y-m-d H:i:s" style={{width:220,height:40}} />
              </li>
              <li>
                <span className={styles.sp}><b>* </b>货币格式：</span>
                <Input placeholder="<em>¥</em>%s" style={{width:220,height:40}} />
                <font className={styles.btip}>显示商品价格的格式，%s将被替换为相应的价格数字。</font>
              </li>
              <li>
                <span className={styles.sp}>退货上传图片凭证：</span>
                <InputNumber min="0" size="large" placeholder="" style={{width:220,height:40}} />
                <font className={styles.btip}>设置退换货上传图片凭证数量限制</font>
              </li>
              <li>
                <span className={styles.sp}>商品评价是否需要审核：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>是</Radio>
                  <Radio value={2}>否</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>站点统计代码：</span>
                <textarea></textarea>
              </li>
              <li>
                <span className={styles.sp}><b>* </b>商品默认图片：</span>
                <Upload {...props2}>
                  <Button>
                    <Icon type="upload" /> Upload
                  </Button>
                </Upload>
                <font className={styles.btip}>只能上传jpg/png格式文件，文件不能超过50kb</font>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>购物设置</span>
          </div>
          <div className={styles.con}>
            <ul>
              <li>
                <span className={styles.sp}>最小购物金额：</span>
                <InputNumber min="0" size="large" placeholder="" style={{width:220,height:40}} />
                <font className={styles.btip}>达到此购物金额，才能提交订单。</font>
              </li>
              <li>
                <span className={styles.sp}>是否开启自动确认收货：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>关闭</Radio>
                  <Radio value={2}>开启</Radio>
                </RadioGroup>
                <font className={styles.btip}>确认收货时长请在订单设置中进行设置</font>
              </li>
              <li>
                <span className={styles.sp}>能否开发票：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>能</Radio>
                  <Radio value={2}>不能</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>发票内容选项：</span>
                <textarea></textarea>
                <font className={styles.btip}>客户要求开发票时可以选择的内容。例如：办公用品。每一行代表一个选项。</font>
              </li>
              <li>
                <span className={styles.sp}>减库存的时机：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>下订单时</Radio>
                  <Radio value={2}>发货时</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>增加销量的时机：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>发货时</Radio>
                  <Radio value={2}>付款时</Radio>
                </RadioGroup>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>备注设置</span>
          </div>
          <div className={styles.con}>
            <ul>
              <li>
                <span className={styles.sp}>修改订单“发票信息”时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>修改订单“收货人信息”时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>修改订单“商品信息”时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>修改订单“费用信息”时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>关闭订单时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>取消订单时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>退货处理时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>退货确认收货时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>退款处理时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
              <li>
                <span className={styles.sp}>修改优币或成长值时：</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>必须填写备注</Radio>
                  <Radio value={2}>无需填写备注</Radio>
                </RadioGroup>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>用户协议</span>
          </div>
          <div className={styles.con} id="comment">
            用户协议
          </div>
        </div>
        <a className={styles.upbtn}>提交</a>
      </div>
        </div>

  </div>

    )
  }
}

