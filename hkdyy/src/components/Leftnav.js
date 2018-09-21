import React, { Component,Fragment } from 'react';
import { menu,MenuChilren } from './menu'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import router from 'umi/router'
@connect(({business})=>({
  keypath:business.keypath,
  localword:business.localword
}))
export default class Leftnav extends Component{
	render(){
    const { keypath, localword} = this.props;
    console.log(this.props);
		return(
			<Fragment>
        <Menu
          {...this.props}>
          {menu}
        </Menu>
        <div className="nav-lt">
          {
            MenuChilren.map((item,i)=>{
              return (
                <ChildrenRouter {...this.props.location} keypath = {keypath} arrays={item} key={i}/>
              )
            })
          }
        </div>
			</Fragment>
			)
	}
}
//pathname
//status

const Menu = (props) =>{
  const children = props.children;
  const localword = props.localword;
  const { dispatch ,location} = props;
  return (
    <div className="nav-lo">
      <ul>
        {
          children.map((child,i)=>{
            return (
              <li className="list-home" key={i} onClick={()=>{
                dispatch({
                  type:'business/save',
                  payload:{
                    keypath:child.path,
                    localword:child.status
                  }
                })
              }}>
                <img alt={child.key} src={child.icon} />
                <span>{child.key}</span>
                <img
                  style={{display: localword.indexOf(child.status) > -1? 'block':"none"}}
                  src={require('../assets/ico3.png')} className={classNames('acioc')} alt="高亮"/>
              </li>
            )
          })
        }
        </ul>
    </div>

  )
}
const ChildrenRouter = (props) =>{
  let blockword = props.arrays.length>0 ? props.arrays[0].keyword : null;
  const { pathname } = props;
  return (
    <div className={classNames('navchild')} style={{display:props.keypath == blockword?'block':'none'}}>
      {
        props.arrays.map((item,i)=>{
          return (
            <Fragment key={i}>
              <span>{item.title}</span>
              {
                item.children.map((child,index)=>{
                  return (
                    <ul key={index}>
                      <li id="navhome"
                          className={classNames({'active':pathname.indexOf(child.path)>-1})}
                        onClick={()=>{router.push(child.route)}}
                      ><a>• { child.key }</a></li>
                    </ul>
                  )
                })
              }
            </Fragment>
          )
        })
      }
    </div>
  )
};
ChildrenRouter.propTypes = {
    arrays:PropTypes.array
}

