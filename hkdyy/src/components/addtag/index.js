import React,{PureComponent,Fragment} from 'react'
import { Button ,Modal,Input} from 'antd'
import styles from './index.css'
import { connect } from 'dva'

@connect(({index})=>({...index}))
export default class Addtag extends PureComponent{
	constructor(props) {
	    super(props);
	    this.state = {
	    }
	   this.onClick=this.onClick.bind(this);
	   this.onOk=this.onOk.bind(this);
	   this.onCancel=this.onCancel.bind(this);
	  }
	  componentDidMount(){
	  
	  }

	  onClick(item){
	  	this.disp(item)
	  }
	  disp(item){
	  	 this.props.dispatch({
		  	type:'index/save',
		  	payload:{
		  		addvisible:item
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
				<Button onClick={()=>this.onClick(true)}>添加标签</Button>
				<Modal
                  title="添加标签类型"
                  visible={this.props.addvisible}
                  onOk={()=>this.onOk(false)}
                  onCancel={()=>this.onCancel(false)}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                  <ul className={styles.modelul}>
                    <li>
                      <span className={styles.tsp}><b>*</b>标签名称：</span>
                      <Input placeholder="" style={{width:245,height:40,marginBottom:10}} />
                    </li>
                    <li>
                      <span className={styles.tsp}>自动打标签条件：</span>
                      <small>累计成功交易</small>
                      <Input addonAfter="笔" placeholder="" style={{width:155,height:40,marginBottom:10}} />
                    </li>
                    <li>
                      <span className={styles.tsp}>或者&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <small>累计购买金额</small>
                      <Input addonAfter="元" placeholder="" style={{width:155,height:40,marginBottom:10}} />
                    </li>
                  </ul>
                </Modal>
			</Fragment>
			)
	}
}