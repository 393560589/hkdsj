import React,{PureComponent,Fragment} from 'react'
import { Button ,Modal,Input,Radio ,DatePicker} from 'antd'
/*import styles from './index.css'*/
import { connect } from 'dva'
const RadioGroup = Radio.Group;
@connect(({index})=>({...index}))

export default class Addactivity extends PureComponent{
	constructor(props) {
	    super(props);
	    this.state = {
	     value:1
	    }
	    this.onChange=this.onChange.bind(this);
	    this.onClick=this.onClick.bind(this);
	    this.onOk=this.onOk.bind(this);
	    this.onCancel=this.onCancel.bind(this);
	  }

	onChange(e){
		this.setState({
	     value: e.target.value,
	    });
	}
	disp(item){
	  	 this.props.dispatch({
		  	type:'index/save',
		  	payload:{
		  		addactvisible:item
		  	}
		  })
		}
	onClick(item){
		this.disp(item)
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
				<Button onClick={()=>this.onClick(true)}>添加活动</Button>
				<Modal
                  title="添加活动"
                  visible={this.props.addactvisible}
                  onOk={()=>this.onOk(false)}
                  onCancel={()=>this.onCancel(false)}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                  <ul className="modelul" style={{lineHeight:40}}>
                    <li>
                      <span className="sp"><b>*</b>活动标题：</span>
                      <Input placeholder="" style={{width:355,height:40,marginBottom:10}} />
                    </li>
                    <li>
                      <span className="sp"><b>*</b>开始时间：</span>
                      <DatePicker
                          style={{width:240}}
					      showTime
					      format="YYYY-MM-DD HH:mm:ss"
					      placeholder="Select Time"
					      onChange={this.btimeonChange}
					      onOk={this.btimeonOk}
					    />
                    </li>
                    <li>
                      <span className="sp"><b>*</b>结束时间：</span>
                      <DatePicker
                          style={{width:240}}
					      showTime
					      format="YYYY-MM-DD HH:mm:ss"
					      placeholder="Select Time"
					      onChange={this.etimeonChange}
					      onOk={this.etimeonOk}
					    />
                    </li>
                    <li>
                      <span className="sp"><b>*</b>上线/下架：</span>
                      <RadioGroup onChange={this.onChange} value={this.state.value}>
				        <Radio value={1}>上线</Radio>
				        <Radio value={2}>下架</Radio>
				      </RadioGroup>
                    </li>
                  </ul>
                </Modal>
			</Fragment>
			)
	}
}