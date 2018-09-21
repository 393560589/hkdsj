import React,{PureComponent,Fragment} from 'react'
import { Button ,Modal,Input} from 'antd'
import { connect } from 'dva'
const { TextArea } = Input;
@connect(({index})=>({...index}))

export default class Adddepartment extends PureComponent{
	constructor(props) {
	    super(props);
	    this.state = {
	    }
	   this.onClick=this.onClick.bind(this);
	   this.onOk=this.onOk.bind(this);
	   this.onCancel=this.onCancel.bind(this);
	  }

	  onClick(item){
	  	this.disp(item)
	  }
	  disp(item){
	  	 this.props.dispatch({
		  	type:'index/save',
		  	payload:{
		  		departmentvisible:item
		  	}
		  })
	  }
	  onOk(item){
	  	this.disp(item)
	  }
	  onCancel(item){
	  	this.disp(item)
	  }
	render(){
		return(
			<Fragment>
				<Button onClick={()=>this.onClick(true)}>添加</Button>
				<Modal
                  title="添加部门"
                  visible={this.props.departmentvisible}
                  onOk={()=>this.onOk(false)}
                  onCancel={()=>this.onCancel(false)}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                  <ul className="modelul">
                    <li>
                      <span className="sp"><b>*</b>部门名称：</span>
                      <Input placeholder="" style={{width:360,height:40,marginBottom:10}} />
                    </li>
                    <li>
                      <span className="sp"><b>*</b>职能描述：</span>
                      <TextArea placeholder="请输入内容" style={{width:360,marginBottom:10}} rows={5} />
                    </li>
                  </ul>
                </Modal>
			</Fragment>
			)
	}
}