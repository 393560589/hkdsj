import React,{PureComponent,Fragment} from 'react'
import { Button  , Select,Modal,Input} from 'antd'
import { connect } from 'dva'
const { TextArea } = Input;
const Option = Select.Option;
@connect(({index})=>({...index}))
export default class Systemsg extends PureComponent{
 constructor(props) {
    super(props);
    this.state = {
     
    }
    this.systemsghandleChange=this.systemsghandleChange.bind(this);
    this.systemsgOk=this.systemsgOk.bind(this);
    this.systemsgCancel=this.systemsgCancel.bind(this);
  }
disp(item){
       this.props.dispatch({
        type:'index/save',
        payload:{
          systemvisible:item
        }
      })
    }
systemsghandleChange(item){
  this.disp(item)
 }
 systemsgOk(item){
  this.disp(item)
 }
 systemsgCancel(item){
  this.disp(item)
 }
	render(){
		return(
			<Fragment>
      {
        this.props.inputvalue===1?null:<Select
            showSearch
            style={{ width: 100,marginLeft:10}}
            placeholder="群发站内信"
            optionFilterProp="children"
            onChange={()=>this.systemsghandleChange(true)}
            onFocus={this.selhandleFocus}
            onBlur={this.selhandleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="30">选中用户</Option>
            <Option value="40">全部用户</Option>
        </Select>
      }
			   
        <Modal
            title="群发站内信"
            visible={this.props.systemvisible}
            onOk={()=>this.systemsgOk(false)}
            onCancel={()=>this.systemsgCancel(false)}
            centered={true}
            width={580}
            cancelText="取消"
            okText="确定"
          >
            <ul className="modelul">
              <li>
                <span className="sp"><b>*</b>发送对象：</span>
                {
                  this.props.inputvalue===1?
                  <Input placeholder="输入用户手机号码，多个号码请用逗号隔开" style={{width:380,height:40,marginBottom:10}} />:
                  <small>共<b>20</b>个用户</small>
                }
                
              </li>
              <li>
                <span className="sp"><b>*</b>标题：</span>
                <Input placeholder="" style={{width:380,height:40,marginBottom:10}} />
              </li>
              <li>
                <span className="sp"><b>*</b>内容：</span>
                <TextArea style={{width:380}} rows={6} />
                <font style={{display:'block'}}>站内信标题不能超过20个字，内容不能超过100个字。</font>
              </li>
            </ul>
          </Modal>
			</Fragment>

			)
	}
}