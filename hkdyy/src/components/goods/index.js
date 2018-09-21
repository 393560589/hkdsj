import React,{PureComponent,Fragment} from 'react'
import { Button ,Modal,Input,Table } from 'antd'
const Search = Input.Search;
const data = [{
  key: '1',
  name: "银色星芒刺绣网纱底裤",
  number:"No86577",
  price:"¥100.00"
 
}, {
  key: '2',
  name: "银色星芒刺绣网纱底裤",
  number:"No86577",
  price:"¥100.00"
}];
export default class Goods extends PureComponent{
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
	  		visible:true
	  	});
	  }
	  onOk(){
	  	this.setState({
	  		visible:false
	  	});
	  }
	  onCancel(){
	  	this.setState({
	  		visible:false
	  	});
	  }
	render(){
		const columns = [{
	      title: '商品名称',
	      dataIndex: 'name',
	      key: 'name',
	    },
	    {
	      title:'货号',
	      dataIndex:'number',
	      key:'number',
	    },
	    {
	      title:'价格',
	      dataIndex:'price',
	      key:'price',
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
				  <Button onClick={this.onClick}>选择商品</Button>
				  <Modal
                  title="选择商品"
                  visible={this.state.visible}
                  onOk={this.onOk}
                  onCancel={this.onCancel}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                <Search
			      placeholder="商品名称搜索"
			      onSearch={value => console.log(value)}
			      style={{ width: 200 }}
			    />
			    <Table 
			    	style={{marginTop:20}}
	                bordered={true}		             		               
	                loading={false}
	                rowSelection={rowSelection}
	                pagination={{pageSize:10}}	               
	                position={'center'} 
	                columns={columns} 
	                dataSource={data} 
	                onChange={this.handleChange} />
                </Modal>
			</Fragment>
		)
	}
}