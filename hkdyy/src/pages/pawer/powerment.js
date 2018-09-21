import React,{PureComponent} from 'react'
import { Button, Checkbox } from 'antd'
import Header from '../../components/Card'
import styles from '../setup/activity.css'
import { connect } from 'dva'
import Powerlist from './powerlist'

const opower=[{
  "商品管理":["商品添加/编辑","商品删除/恢复","分类添加/编辑","分类转移/删除","图片批量处理","商品自动上下架"],
  },
  {
    "会员管理":["商品添加/编辑","商品删除/恢复","分类添加/编辑","分类转移/删除","图片批量处理","商品自动上下架"]
  },
  {
    "运营管理":["商品添加/编辑","商品删除/恢复","分类添加/编辑","分类转移/删除","图片批量处理","商品自动上下架"]
}];
const defaultvalue=[{
  "商品管理":["商品添加/编辑","图片批量处理","商品自动上下架"]
  },
  {
    "会员管理":["商品删除/恢复","分类添加/编辑","分类转移/删除"]
  },
  {
    "运营管理":["商品添加/编辑","商品删除/恢复","分类添加/编辑","商品自动上下架"]
}];
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
constructor(props) {
    super(props);
    this.state = {
      opowerlist:opower
    }
  }
  render(){
    return (
      <div className="content">
        <Header>权限设置</Header>
        <div className="tablebox">
          <div className={styles.addbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}}>当前部门：销售部</span>
            </div>
            {
              this.state.opowerlist.map((item,index)=>{
                return <Powerlist key={index} content={item}/>
              })
            }
          </div>
        </div>
      </div>
    )
  }
  
 

}

