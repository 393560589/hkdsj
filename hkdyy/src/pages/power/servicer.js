import React,{PureComponent} from 'react'
import { Button, } from 'antd'
//import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <div className="con-title">
          <div className="titlesec">
            <span className="left">会员列表</span>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="screen">
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <a>查询结果</a>
                <a>高级检索</a>
              </div>
            </div>
            <div className="scr-con">
              <span>用户账号：</span>
              <input type="text" placeholder="用户ID/账号" name=""/>
                <span>用户昵称：</span>
                <input type="text" placeholder="用户昵称" name=""/>
                  <span>注册时间:</span>
                  <div className="left"><input type="text" placeholder="请选择时间" name="" id="chistime"/><i
                    className="fa fa-clock-o"/></div>
            </div>
          </div>
          <div className="datalist">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right">
                <select>
                  <option value="" disabled selected hidden>群发短信</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>群发站内信</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>设置标签</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>导出数据</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select disabled="disabled">
                  <option value="" disabled selected hidden>显示条数</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">40</option>
                </select>
                <select disabled="disabled">
                  <option value="" disabled selected hidden>排序方式</option>
                </select>
              </div>
            </div>
            <table width="100%" className="litable">
              <tr>
                <th><input type="checkbox" className="choice" name=""/><i
                  className="choiceshow allchoice fa fa-square-o"></i></th>
                <th>会员ID</th>
                <th>会员账号</th>
                <th>会员名称</th>
                <th>会员等级</th>
                <th>消费金额</th>
                <th>订单数量</th>
                <th>创建时间</th>
                <th>账户启用状态</th>
                <th>操作</th>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>8848</td>
                <td>15154554846</td>
                <td>大风车</td>
                <td>初级会员</td>
                <td>¥2000.00</td>
                <td>100</td>
                <td>2018.2.23</td>
                <td><input type="checkbox" className="oclse" name=""/><i className="oclseshow fa fa-toggle-off"/></td>
                <td className="operat"><a href="../menber/menberman.html">查看</a><a
                  href="../menber/menberedit.html">编辑</a><a>一键进入</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>8848</td>
                <td>15154554846</td>
                <td>大风车</td>
                <td>初级会员</td>
                <td>¥2000.00</td>
                <td>100</td>
                <td>2018.2.23</td>
                <td><input type="checkbox" className="oclse" checked="" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i></td>
                <td className="operat"><a>查看</a><a>编辑</a><a>一键进入</a></td>
              </tr>
            </table>
            <div className="tip-botbox">
              <div className="left">
                <input type="checkbox" className="choice" name=""/><i
                  className="choiceshow allchoice fa fa-square-o"></i>
                  <span>全选</span>
                  <select>
                    <option value="" disabled selected hidden>批量操作</option>
                    <option value="">启用</option>
                    <option value="">停用</option>
                    <option value="">删除</option>
                  </select>
                  <a>确定</a>
              </div>
              <div className="right">
                <span className="left">共<font>10</font>页/<font>100</font>条数据</span>
                <ul className="left flypag">
                  <li><a>
                    1
                  </a></li>
                  <li><a className="active">1</a></li>
                  <li><a>2</a></li>
                  <li><a>3</a></li>
                  <li><a>4</a></li>
                  <li><a>5</a></li>
                  <li><a>...</a></li>
                  <li><a>10</a></li>
                  <li><a>></a></li>
                </ul>
                <div className="left">
                  跳至<input type="text" className="tiz" value="1"/>页
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

