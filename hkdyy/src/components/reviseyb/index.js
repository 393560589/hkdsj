import React,{PureComponent,Fragment} from 'react'
import { Button,Modal,Input, Radio } from 'antd'
import { connect } from 'dva'

const RadioGroup = Radio.Group;
const { TextArea } = Input;
@connect(({index})=>({...index}))
export default class Reviseyb extends PureComponent{

	constructor(props) {
	    super(props);
	    this.state = {
	      kdvalue: 1,
	      czvalue: 1,
	    }
	    this.kdonChange=this.kdonChange.bind(this);
	    this.czonChange=this.czonChange.bind(this);
	    this.onClick=this.onClick.bind(this);
	    this.onOk=this.onOk.bind(this);
	    this.onCancel=this.onCancel.bind(this);
	  }
	kdonChange(e){
		this.setState({
	     kdvalue: e.target.value,
	    });
	}
	czonChange(e){
		this.setState({
	      czvalue: e.target.value,
	    });
	}
	disp(item){
	  	 this.props.dispatch({
		  	type:'index/save',
		  	payload:{
		  		ybmodvisible:item
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
				 <Button onClick={()=>this.onClick(true)}>批量修改</Button>
				 <Modal
                  title="修改优币或成长值"
                  visible={this.props.ybmodvisible}
                  onOk={()=>this.onOk(false)}
                  onCancel={()=>this.onCancel(false)}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                  <ul className="modelul" style={{lineHeight:40}}>
                    <li>
                      <span className="sp"><b>*</b>调整蝌蚪币：</span>
                      <RadioGroup onChange={this.kdonChange} value={this.state.kdvalue}>
				        <Radio value={1}>增加<Input addonAfter="个" placeholder="" size="large" style={{width:320,marginBottom:10,marginLeft:10}} /></Radio><br/>
				        <Radio value={2}>减少<Input addonAfter="个" placeholder="" size="large" style={{width:320,marginBottom:10,marginLeft:10}} /></Radio>
				      </RadioGroup>
                    </li>
                    <li>
                      <span className="sp"><b>*</b>调整成长值：</span>
                      <RadioGroup onChange={this.czonChange} value={this.state.czvalue}>
				        <Radio value={1}>增加<Input addonAfter="个" placeholder="" size="large" style={{width:320,marginBottom:10,marginLeft:10}} /></Radio><br/>
				        <Radio value={2}>减少<Input addonAfter="个" placeholder="" size="large" style={{width:320,marginBottom:10,marginLeft:10}} /></Radio>
				      </RadioGroup>
                    </li>
                    <li>
                      <span className="sp">备注信息：</span>
                      <TextArea style={{width:380}} rows={6} />
                    </li>
                  </ul>
                </Modal>
			</Fragment>
			)
	}
}