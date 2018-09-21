import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import styles from './index.less'
import Header from '../../components/Card'
import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
         <Header>任务奖励设置</Header>
        <div className="tablebox">
          <div className={styles.asetbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}}>任务奖励设置</span>
            </div>
            <div className={styles.neptitle}>
              <i className="fa fa-bookmark"></i>
              <span>新手任务</span>
              <small>新手任务每个用户只奖励一次，相关值必须为大于0的整数</small>
            </div>
            <dl className={styles.nepdl}>
              <dt>新手欢迎奖励</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>设置头像</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>设置昵称</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>完善个人信息</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>成功关注1位达人</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>首次分享商品或专题</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>首次收藏商品或专题</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>首次购物成功</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>首次完成评价</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
            </dl>
            <div className={styles.neptitle}>
              <i className="fa fa-bookmark"></i>
              <span>日常任务</span>
              <small>日常任务可以奖励多次，相关值必须为大于0的整数</small>
            </div>
            <dl className={styles.nepdl}>
              <dt>每日登录</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>每日签到</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>分享商品或专题</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>邀请好友</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>好友首次下单成功</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
              <dt>购买天数达标</dt>
              <dd>
                <span>成长值：</span>
                <input type="text" name=""/>
                  <small>分</small>
                  <span>蝌蚪币：</span>
                  <input type="text" name=""/>
                    <small>个</small>
              </dd>
            </dl>
            <Button className={styles.upbtn}>提交</Button>
          </div>
        </div>
      </div>

    )
  }
}

