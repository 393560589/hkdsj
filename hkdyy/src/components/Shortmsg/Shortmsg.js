import React,{PureComponent,Fragment} from 'react'
import { Button  , Select,Modal,Input} from 'antd'
import { connect } from 'dva'
/*import styles from './index.css'*/
const { TextArea } = Input;
const Option = Select.Option;
@connect(({index})=>({...index}))
export default class Shortmsg extends PureComponent{
 constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
    this.groupshorthandleChange=this.groupshorthandleChange.bind(this);
    this.groupshortOk=this.groupshortOk.bind(this);
    this.groupshortCancel=this.groupshortCancel.bind(this);
  }
  disp(item){
       this.props.dispatch({
        type:'index/save',
        payload:{
          shortmvisible:item
        }
      })
    }
 groupshorthandleChange(item){
   this.disp(item)
  }
  groupshortOk(item){
     this.disp(item)
  }
 groupshortCancel(item){
  this.disp(item)
 }
  render(){
  	return(
  		 <Fragment>
               {
                this.props.selectv===1?null:<Select
                        showSearch
                        style={{ width: 100,marginLeft:10}}
                        placeholder="群发短信"
                        optionFilterProp="children"
                        onChange={()=>this.groupshorthandleChange(true)}
                        onFocus={this.selhandleFocus}
                        onBlur={this.selhandleBlur}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      >
                        <Option value="30">选中用户</Option>
                        <Option value="40">全部用户</Option>
                       
                      </Select>
               }
	  		     
               <Modal
                  title="群发短信"
                  visible={this.props.shortmvisible}
                  onOk={()=>this.groupshortOk(false)}
                  onCancel={()=>this.groupshortCancel(false)}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                  <ul className="modelul">
                    <li>
                      <span className="sp"><b>*</b>发送对象：</span>
                      {
                        this.props.selectv===1?
                        <Input placeholder="输入用户手机号码，多个号码请用逗号隔开" style={{width:380,height:40,marginBottom:10}} />:<small>共<b>20</b>个用户</small>
                      }
                    </li>
                    <li>
                      <span className="sp"><b>*</b>短信内容：</span>
                      <TextArea style={{width:380}} rows={6} />
                      <font style={{display:'block'}}>发送时系统会自动在结尾追加【源货】，请勿重复添加。<br/>内容上限不能超过<b>500</b>字，当前已输入<b>3</b>字，将作为<b>1</b>条发送</font>
                    </li>
                    <li>
                      <span className="sp"><b>*</b>发送统计：</span>
                      <small>发送条数：<b>20</b>条     可用短信条数：<b>100000</b>条   </small>
                    </li>
                  </ul>
                </Modal>
              </Fragment>
  		)
  }

}