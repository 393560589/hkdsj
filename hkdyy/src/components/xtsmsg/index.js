import React,{PureComponent,Fragment} from 'react'
import { Button  , Select,Modal,Input} from 'antd'

const { TextArea } = Input;
const Option = Select.Option;

export default class Systemsg extends PureComponent{
 constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
    this.onClick=this.onClick.bind(this);
    this.onOk=this.onOk.bind(this);
    this.onCancel=this.onCancel.bind(this);
  }

onClick(){
   this.setState({
      visible: true
    });
 }
 onOk(){
  this.setState({
      visible: false
    });
 }
 onCancel(){
  this.setState({
      visible: false
    });
 }
	render(){
		return(
			<Fragment>
			  <Button onClick={this.onClick}>发布消息</Button>
        <Modal
            title="发布消息"
            visible={this.state.visible}
            onOk={this.onOk}
            onCancel={this.onCancel}
            centered={true}
            width={580}
            cancelText="取消"
            okText="发布"
          >
            <ul className="modelul">
              <li>
                <span className="sp"><b>*</b>消息标题：</span>
                <Input placeholder="" style={{width:380,height:40,marginBottom:10}} />
              </li>
              <li>
                <span className="sp"><b>*</b>消息内容：</span>
                <TextArea style={{width:380}} rows={10} />
              </li>
            </ul>
          </Modal>
			</Fragment>

			)
	}
}