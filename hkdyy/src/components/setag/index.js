import React,{PureComponent,Fragment} from 'react'
import { Button  , Select,Modal,Input,Checkbox} from 'antd'

const { TextArea } = Input;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];

export default class Setag extends PureComponent{
 constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
   this.setaghandleChange=this.setaghandleChange.bind(this);
    this.setagOk=this.setagOk.bind(this);
    this.setagCancel=this.setagCancel.bind(this);
    this.tagcheckonChange=this.tagcheckonChange.bind(this);
  }

  tagcheckonChange(checkedValues){
     console.log('checked = ', checkedValues);
  }
  
 
 setaghandleChange(){
  this.setState({
      visible: true
    });
 }
setagOk(){
  this.setState({
      visible: false
    });
 }
 setagCancel(){
  this.setState({
      visible: false
    });
 }

	render(){
		return(
			<Fragment>
				<Select
                showSearch
                style={{ width: 100,marginLeft:10}}
                placeholder="设置标签"
                optionFilterProp="children"
                onChange={this.setaghandleChange}
                onFocus={this.selhandleFocus}
                onBlur={this.selhandleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="30">选中用户</Option>
                <Option value="40">全部用户</Option>
               
              </Select>
              <Modal
                  title="设置标签"
                  visible={this.state.visible}
                  onOk={this.setagOk}
                  onCancel={this.setagCancel}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                 <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.tagcheckonChange} />
               </Modal>
			</Fragment>
			)
	}
}