import React,{PureComponent,Fragment} from 'react'
import { Button,Modal,Input,Table ,Select} from 'antd'
import { connect } from 'dva'

const Option = Select.Option;
const Search = Input.Search;
const data = [{
  key: '1',
  name: '黄金会员优惠券',
  price: '¥200.00',
  surpls:'无限制',
  condition:'无限制',
  validity:'2017-07-30 至 2026-12-31'
}, {
  key: '2',
  name: '黄金会员优惠券',
  price: '¥200.00',
  surpls:'无限制',
  condition:'无限制',
  validity:'2017-07-30 至 2026-12-31'
}];
@connect(({index})=>({...index}))
export default class Coupon extends PureComponent{
	constructor(props) {
	    super(props);
	    this.state = {
	    }
	   this.handleChange=this.handleChange.bind(this);
       this.onOk=this.onOk.bind(this);
       this.onCancel=this.onCancel.bind(this);
	  }
	  disp(item){
	  	 this.props.dispatch({
		  	type:'index/save',
		  	payload:{
		  		couponvisible:item
		  	}
		  })
		}
	  handleChange(item){
	  	this.disp(item)
	  }
	  onOk(item){
	  	this.disp(item)
	  }
	  onCancel(item){
	  	this.disp(item)
	  }
	render(){
		const columns = [{
	      title: '优惠券名称',
	      dataIndex: 'name',
	      key: 'name',

	    }, {
	      title: '面额',
	      dataIndex: 'price',
	      key: 'price',
	       width: 100,
	    }, {
	      title: '剩余张数',
	      dataIndex: 'surpls',
	      key: 'surpls',
	      
	    },
	    {
	      title: '使用条件',
	      dataIndex: 'condition',
	      key: 'condition',
	      
	    },
	    {
	      title: '有效期',
	      dataIndex: 'validity',
	      key: 'validity',
	      width: 100,
	    }];
		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			},
			getCheckboxProps: record => ({
			disabled: record.name === 'Disabled User', // Column configuration not to be checked
			name: record.name,
			}),
		};
		return(
			<Fragment>
				<Select
	                showSearch
	                style={{ width: 100,marginLeft:10}}
	                placeholder="赠送优惠券"
	                optionFilterProp="children"
	                onChange={()=>this.handleChange(true)}
	                onFocus={this.selhandleFocus}
	                onBlur={this.selhandleBlur}
	                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
	              >
	                <Option value="30">选中用户</Option>
	                <Option value="40">全部用户</Option>
	                
	              </Select>
	              <Modal
                	title="赠送优惠券"
                	visible={this.props.couponvisible}
                	onOk={()=>this.onOk(false)}
                	onCancel={()=>this.onCancel(false)}
                	centered={true}
                  	width={580}
                  	footer={null}
                	>
                	<Search
				      placeholder="优惠券名称/优惠券编号"
				      onSearch={value => console.log(value)}
				      style={{ width: 200 }}
				    />
				    <Table 
				    	style={{marginTop:20,width:530}}
		                bordered={true}		             		               
		                loading={false}
		                pagination={{pageSize:10}}	
		                rowSelection={rowSelection}               
		                position={'center'} 
		                columns={columns} 
		                dataSource={data} 
		                onChange={this.handleChange} />
                </Modal>
			</Fragment>
			)
	}
}