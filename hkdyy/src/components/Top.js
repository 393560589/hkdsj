import React, { Component } from 'react';
import router from 'umi/router'
const color=[{
	clname:'green',
	color:'#1abc9c',
	bordercolro:'#279c85'
},
{
	clname:'blue',
	color:'#3498db',
	bordercolro:'#2a7aaf'
},
{
	clname:'org',
	color:'#ed6e4d',
	bordercolro:'#be583e'
},
{
	clname:'yel',
	color:'#fabb3d',
	bordercolro:'#c89631'
},
{
	clname:'pur',
	color:'#aa7ab3',
	bordercolro:'#88628f'
},
{
	clname:'tgreen',
	color:'#9ad0b9',
	bordercolro:'#7ba694'
},
{
	clname:'pink',
	color:'#ea94be',
	bordercolro:'#bb7698'
},
{
	clname:'dred',
	color:'#c1374a',
	bordercolro:'#9a2c3b'
}];
class Top extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	backcolor:'',
	    	bordercolro:''
	    }
	  }

	  colorChange(item){
	  	this.setState({
	  		backcolor:item.color,
	    	bordercolro:item.bordercolro
	  	});
	  }

	render(){
		return(
			<div className="top" style={{background:this.state.backcolor,borderColor:this.state.bordercolro}}>
				<h1 className="left">源货后台业务管理系统</h1>
				<ul className="tnav">
					<li>
						<img alt="" src={require('../assets/u152.png')} /><span>admin</span>
						<div className="ntip  tn1">
							<div className="tn-title">
								<span className="left">账户信息</span>
								<a className="right" href="">账户设置</a>
							</div>
							<div className="tn-con">
							• 所在部门：<small>销售部</small><br/>
							• 本次登录：<small>2017-07-03 14:36:21 </small><br/>
							• 登录地区：<small>广东省深圳市 (IP：183.14.135.1)</small><br/>
							• 上次登录：<small>2017-07-03 14:36:21 </small>
							</div>
						</div>
					</li>
					<li><i></i><a href=""><img onClick={()=>{router.push('/home/first')}} alt="首页" src={require('../assets/u153.png')} /></a></li>
					<li>
						<i></i><img alt="" src={require('../assets/u155.png')} />
						<div className="ntip tn2">
							<div className="tn-title">
								<span className="left">常用菜单</span>
								<a className="right" href="">菜单管理</a>
							</div>
							<div className="link-list">
								<a>商品列表</a>
								<a>添加商品</a>
								<a>订单列表</a>
								<a>用户管理</a>
								<a>交易统计</a>
								<a>广告管理</a>
								<a>专题列表</a>
								<a>部门管理</a>
								<a>成员管理</a>
							</div>
						</div>
					</li>
					<li>
						<i></i><img alt="" src={require('../assets/u158.png')} /><font>10</font>
						<div className="ntip tn3">
							<div className="tn-title">
								<span className="left">广告位提示</span>
							</div>
							<ul className="info-tips">
								<li><a className="left" href="">广告位即将到期<small className="right">(<b>10</b>)</small></a></li>
								<li><a className="left" href="">广告位即将到期<small className="right">(<b>10</b>)</small></a></li>
								<li><a className="left" href="">广告位即将到期<small className="right">(<b>10</b>)</small></a></li>
							</ul>
						</div>
					</li>
					<li>
						<i></i><img alt="" src={require('../assets/u150.png')} />
						<div className="ntip tn4">
							<ul className="colors">
								{
									color.map((item,i)=>{
										return(
											<li key={i} className={item.clname} onClick={this.colorChange.bind(this,item)}><span>点击换肤</span></li>
											)
									})
								}
							</ul>
						</div>
					</li>
					<li><i></i><img alt="" src={require('../assets/u162.png')} /></li>
				</ul>
			</div>
			);
	}
}

export default Top
