import React,{PureComponent,Fragment} from 'react'
import {connect} from 'dva'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'   动画引入
import withRouter from 'umi/withRouter'

import 'ant-design-pro/dist/ant-design-pro.css' // ant-design-pro.css 后台选型css文件样式
//import Flexable from '../utils/flexable'  // 手机端选用方法
import Disscale from '../utils/disscale'
import './index.less'
import Top from '../components/Top'
import LeftNav from '../components/Leftnav'
//Flexable.init();
Disscale.init();




class App extends PureComponent {
    constructor(props){
      super(props)
    }
   /* componentDidUpdate(prevProps){
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }*/
    render(){

      return (
          <div>
            {
              this.props.location.pathname !== '/login' ?
                <Fragment>
                  <Top/>
                  <LeftNav {...this.props}/>
                </Fragment>:null
            }
            {
              this.props.children
            }
          </div>
      )
    }
}
export default connect(({ loading })=>({ loading }))(withRouter(App))
/*
<ReactCSSTransitionGroup
transitionName="slide-in"
component="main"
transitionEnterTimeout={300}
transitionLeaveTimeout={300}>
  <div key={this.props.location.pathname}>
{
  this.props.location.pathname !== '/login' ? <Fragment>
    <Top/>
    <LeftNav {...this.props}/>
  </Fragment>:null

}
{
  this.props.children
}
</div>
</ReactCSSTransitionGroup>*/
