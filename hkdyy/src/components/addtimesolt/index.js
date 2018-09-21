import React,{PureComponent,Fragment} from 'react'
import { Button,Modal,Input, TimePicker,Switch} from 'antd'
import moment from 'moment';
import { connect } from 'dva'


@connect(({index})=>({...index}))

export default class Addtimesolt extends PureComponent{
	constructor(props) {
	    super(props);
	    this.state = {
	     
	    }
	    this.onClick=this.onClick.bind(this);
	    this.onOk=this.onOk.bind(this);
	    this.onCancel=this.onCancel.bind(this);
	  }
	  disp(item){
	  	 this.props.dispatch({
		  	type:'index/save',
		  	payload:{
		  		addtimevisible:item
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
				 <Button onClick={()=>this.onClick(true)}>添加时间段</Button>
				 <Modal
                  title="修改优币或成长值"
                  visible={this.props.addtimevisible}
                  onOk={()=>this.onOk(false)}
                  onCancel={()=>this.onCancel(false)}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                  <ul className="modelul" style={{lineHeight:40}}>
                    <li>
                      <span className="sp"><b>*</b>秒杀时段名称：</span>
                      <Input placeholder="" style={{width:355,height:40,marginBottom:10}} />
                    </li>
                    <li>
                      <span className="sp"><b>*</b>每日开始时间：</span>
                      <TimePicker style={{width:200}} onChange={this.btimeonChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </li>
                    <li>
                      <span className="sp"><b>*</b>每日结束时间：</span>
                      <TimePicker style={{width:200}} onChange={this.etimeonChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </li>
                    <li>
                      <span className="sp">是否启用：</span>
                      <Switch defaultChecked onChange={this.onChange} />
                    </li>
                  </ul>
                </Modal>
			</Fragment>
			)
	}
}