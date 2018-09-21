import React,{PureComponent} from 'react'
import { Checkbox } from 'antd'
const CheckboxGroup = Checkbox.Group;

export default class Powerlist extends PureComponent{
	constructor(props) {
		super(props);
		this.state = {
			conlist:[],
			checkedList: [],
	    indeterminate: true,
	    checkAll: false,
      title:''
		}
	}
	componentWillMount(){
		const contentvalue=this.props.content;
		for (var name in contentvalue) 
			{
			  this.state.title=name;
			  this.state.conlist=contentvalue[name];
			}
	}
	render(){
		return(
			  <div style={{marginTop:20,marginLeft:30,marginRight:30}}>
           <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange.bind(this)}
              checked={this.state.checkAll}
            >
              {this.state.title}
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup options={this.state.conlist} value={this.state.checkedList} onChange={this.onChange.bind(this)} />
        </div>
			)
	}

 onChange(checkedList){
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < this.state.conlist.length),
      checkAll: checkedList.length === this.state.conlist.length,
    });
  }
  onCheckAllChange(e){
    this.setState({
      checkedList: e.target.checked ? this.state.conlist : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });

  }
}