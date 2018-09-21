import React,{PureComponent} from 'react'
import { Button, Select , Table, Divider, Tag } from 'antd'
import styles from './coupon.css'



const { Option, OptGroup } = Select;


export default class Addfl extends PureComponent{

	constructor(props) {
		super(props);
		this.state = {
			list:[],
			slist:["服装>裤子","服装>衣服","服装>裙子","服装>围巾","服装>T恤"],
			tablekey:1,
			inputValue: '',
		}
	this.handleChange=this.handleChange.bind(this);
	this.handleBtnClick = this.handleBtnClick.bind(this);
/*	this.handleItemDelete=this.handleItemDelete.bind(this,record.key);*/
	}

	render(){
	const data=this.state.list;
	const columns = [{
	  title: '分类名称',
	  dataIndex: 'name',
	  key: 'name',
	  render: text => <a href="javascript:;">{text}</a>,
	}, {
	  title: '操作',
	  key: 'action',
	  render: (text, record,index) => (
	    <span>
	      <a onClick={this.handleItemDelete.bind(this,index,record)} href="javascript:;">删除</a>
	      
	    </span>
	  ),
	}];

		return(
			 <div className={styles.appoint}>
              <span className={styles.sp}><b>* </b>添加商品：</span>
              <div className={styles.addsel}>
                <Select
				    size="large"
				    style={{ width: 240 }}
				    placeholder="请选择分类"
				    onChange={this.handleChange}
				    value={this.state.inputValue}
				  >
				  {
				  	this.state.slist.map((item,index)=>{
				  		return <Option key={index} value={item}>{item}</Option>
				  	})
				  }
			
				</Select>
                <Button onClick={this.handleBtnClick} size="large">+</Button>
              </div>
              <font>购买以下分类商品可使用优惠券抵扣金额  已选中<b>{this.state.list.length}</b>个分类</font>
              <Table 
              columns={columns} 
              dataSource={data} 
              bordered
              style={{width:460,marginLeft:399}}
               />
             
          </div>
			)

	}

	handleChange(e){
		this.setState(() => ({
			inputValue: e
	    }));
	}
	handleBtnClick() {
		if(this.state.inputValue==''){return}
		this.setState((prevState) =>{
			const del=prevState.inputValue;
			const slist=[...prevState.slist];
			const index=slist.indexOf(del);
			slist.splice(index,1);
			return{slist}
		});
		this.setState((prevState) => ({
			list: [...prevState.list, {key: this.state.tablekey, name:prevState.inputValue}],
			inputValue: '',
			tablekey:this.state.tablekey+1
		}));
		
	}
	handleItemDelete(index,record) {
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		});
		this.setState((prevState) => ({
			slist: [...prevState.slist, record.name],
		}));
	}
}