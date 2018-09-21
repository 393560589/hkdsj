import React,{PureComponent,Fragment} from 'react'
import { Button , Select,Modal,Input,Checkbox, Radio,Table } from 'antd'

const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Search = Input.Search;
const data = [{
  key: '1',
  name: '银色星芒刺绣网纱底裤',
  number:'No86577',
  price: '¥200.00',
}, {
  key: '2',
  name: '银色星芒刺绣网纱底裤',
  number:'No86577',
  price: '¥200.00',
}];

export default class Appmsg extends PureComponent{
 constructor(props) {
    super(props);
    this.state = {
      visible: false,
      choicevisible:false,
      radiovalue:1,
      topicstitle:'选择专题',
      placeholder:""
    }
   	this.APPmsghandleChange=this.APPmsghandleChange.bind(this);
    this.APPmsgOk=this.APPmsgOk.bind(this);
    this.APPmsgCancel=this.APPmsgCancel.bind(this);
    this.radionChange=this.radionChange.bind(this);
    this.topics=this.topics.bind(this);
    this.choiceCancel=this.choiceCancel.bind(this);
    this.activity=this.activity.bind(this);
    this.goods=this.goods.bind(this);
    this.choiceok=this.choiceok.bind(this);
  }

 radionChange(e){
    this.setState({
      radiovalue: e.target.value,
    });
  }

 APPmsghandleChange(){
  this.setState({
     visible: true
    });
 }
 APPmsgOk(){
  this.setState({
      visible: false
    });
 }
 APPmsgCancel(){
  this.setState({
      visible: false
    });
 }
 topics(){
 	this.setState({
    choicevisible: true,
    topicstitle:'选择专题',
    placeholder:"专题名称搜索"
    });
 }
 activity(){
	this.setState({
	    choicevisible: true,
	    topicstitle:'选择活动',
	    placeholder:"活动名称搜索"
    });
 }
 goods(){
 	this.setState({
	    choicevisible: true,
	    topicstitle:'选择商品',
	    placeholder:"活动名称/商品货号"
    });
 }
 choiceCancel(){
 	this.setState({
      choicevisible:false
    });
 }
 choiceok(){
 	this.setState({
      choicevisible:false
    });
 }
	render(){

	const columns = [{
      title: '活动名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '货号',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={this.choiceok}>选择</a>
        </span>
      )
    }];
		return(
			<Fragment>
			 <Select
                showSearch
                style={{ width: 100,marginLeft:10}}
                placeholder="APP推送"
                optionFilterProp="children"
                onChange={this.APPmsghandleChange}
                onFocus={this.selhandleFocus}
                onBlur={this.selhandleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="30">选中用户</Option>
                <Option value="40">全部用户</Option>
                
              </Select>
              <Modal
                  title="APP推送"
                  visible={this.state.visible}
                  onOk={this.APPmsgOk}
                  onCancel={this.APPmsgCancel}
                  centered={true}
                  width={580}
                  cancelText="取消"
                  okText="确定"
                >
                  <ul className="modelul">
                    <li>
                      <span className="sp"><b>*</b>推送类型：</span>
                      <RadioGroup onChange={this.radionChange} value={this.state.radiovalue}>
                        <Radio value={1}>链接</Radio>
                        <Radio value={2}>专题</Radio>
                        <Radio value={3}>活动</Radio>
                        <Radio value={4}>商品</Radio>
                      </RadioGroup>
                    </li>
                    {this.state.radiovalue===1? <li><span className="sp"><b>*</b>链接：</span><Input placeholder="" style={{width:380,height:40,marginBottom:10}} /> </li>:null}
                    {this.state.radiovalue===2? <li><span className="sp"><b>*</b>选择专题：</span><Button onClick={this.topics} style={{width:150,marginBottom:10}}>选择专题</Button></li>:null}
                    {this.state.radiovalue===3? <li><span className="sp"><b>*</b>选择活动：</span><Button onClick={this.activity} style={{width:150,marginBottom:10}}>选择活动</Button></li>:null}
                    {this.state.radiovalue===4? <li><span className="sp"><b>*</b>选择商品：</span><Button onClick={this.goods} style={{width:150,marginBottom:10}}>选择商品</Button></li>:null}
                    <li>
                      <span className="sp"><b>*</b>推送标题：</span>
                      <Input placeholder="" style={{width:380,height:40,marginBottom:10}} />
                    </li>
                    <li>
                      <span className="sp"><b>*</b>推送内容：</span>
                      <Input placeholder="" style={{width:380,height:40,marginBottom:10}} />
                       <font style={{display:'block'}}>APP推送标题不能超过14个字，内容不能超过20个字。</font>
                    </li>
                  </ul>
                </Modal>
                <Modal
                	title={this.state.topicstitle}
                	visible={this.state.choicevisible}
                	onCancel={this.choiceCancel}
                	centered={true}
                  	width={580}
                  	footer={null}
                >
                	<Search
				      placeholder={this.state.placeholder}
				      onSearch={value => console.log(value)}
				      style={{ width: 200 }}
				    />
				    <Table 
				    	style={{marginTop:20}}
		                bordered={true}		             		               
		                loading={false}
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