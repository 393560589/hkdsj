import React,{PureComponent} from 'react'
import { Button, Tag, Cascader } from 'antd'
import { p} from 'antd-mobile-area-data'
import styles from './activity.css'

const options = p;

export default class Cityadds extends PureComponent{
	constructor(props) {
		super(props);
		this.state = {
			casvalue:'',
			tags:[],
			citylist:[],
			city:''
		}
	this.onChange=this.onChange.bind(this);
	this.onClick=this.onClick.bind(this);
	}

	handleClose (removedTag){
		
	  const tags = this.state.tags.filter(tag => tag !== removedTag);
	  this.setState({ tags });
	  for(let i in options){
			if(options[i]['label']==removedTag){
				let cityar=[options[i]['value']];
				this.setState((prevState) => {
					const citylist = [...prevState.citylist];
					const index=citylist.indexOf(cityar);
					citylist.splice(index, 1);
					return {citylist}
				});
			}
		} 
    }

	onChange(value) {
		
		for(let i in options){
			if(options[i]['value']==value){
				this.setState(() => ({
					city:options[i]['label'],
					casvalue: value
	    		}));	
			}
		}
	}
	onClick(){
		if(this.state.casvalue==''){return}
		if(this.state.tags.indexOf(this.state.city)!=-1){
			alert('城市已存在');
			return
		}
		this.setState((prevState) => ({
			tags: [...prevState.tags, this.state.city],
			citylist:[...prevState.citylist, this.state.casvalue],
			casvalue: '',
		}));
		console.log(this.state.citylist);
		}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.state.tags);
        console.log(this.state.citylist)
  	}
	
	render(){
		

		
		return(
			<div>
				<Cascader style={{width:220}} value={this.state.casvalue} options={options} onChange={this.onChange} notFoundContent="请选择城市" placeholder="请选择城市" />
				<Button onClick={this.onClick}>添加</Button>
				<div className={styles.citylist}>
					{
					  	this.state.tags.map((tag,index)=>{
					  		return <Tag closable color="#1abc9c" key={tag} afterClose={() =>this.handleClose(tag)}>{tag}</Tag>
					  	})
				  	}
				</div>
			</div>
			)
	}
}