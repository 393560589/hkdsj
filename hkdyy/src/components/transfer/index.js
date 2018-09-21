import React,{PureComponent,Fragment} from 'react'
import { Button ,Modal,Input,Select} from 'antd'
import styles from './index.css'
import { connect } from 'dva'

const Option = Select.Option;
@connect(({index})=>({...index}))

export default class Transfer extends PureComponent{
	constructor(props) {
	    super(props);
	    this.state = {
	    }
	   this.onOk=this.onOk.bind(this);
	   this.onCancel=this.onCancel.bind(this);
	  }

	  disp(item){
	  	 this.props.dispatch({
		  	type:'index/save',
		  	payload:{
		  		transfervisible:item
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
			<Modal
		          title="转移商品"
		          visible={this.props.transfervisible}
		          onOk={()=>this.onOk(false)}
		          onCancel={()=>this.onCancel(false)}
		          centered={true}
		          width={580}
		          cancelText="取消"
		          okText="开始转移"
		        >
		        <div style={{overflow:'hidden'}}>
			        <div className={styles.left}>
			        	<span>原商品分类：</span><br/>
			        	<Select defaultValue="Lucy" style={{ width: 180 }} disabled>
					      <Option value="lucy">Lucy</Option>
					    </Select>
			        </div>
				    <div className={styles.right}>
				    	<span>目标商品分类：</span><br/>
				    	<Select placeholder="请选择商品分类" style={{ width: 180 }} onChange={this.handleChange}>
					      <Option value="jack">Jack</Option>
					      <Option value="lucy">Lucy</Option>
					      <Option value="disabled" disabled>Disabled</Option>
					      <Option value="Yiminghe">yiminghe</Option>
					    </Select>
				    </div>
			    </div>
		    </Modal>
			)
	}
}