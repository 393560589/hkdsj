import React,{PureComponent,Fragment} from 'react'
import styles from './login.less'
import classNames from 'classnames';
export default class Login extends PureComponent{
  render (){
    return (
      <div className={styles.body}>
        <div className={styles["login-model"]}>
          <h3>源货运营管理平台</h3>
          <span>Business Management System</span>
          <form id="loginForm">
            <div className={classNames(styles.inputbox,styles.lusename)}>
              <img src={require("../../assets/u12.png")}/>
              <input type="text" id="userid" placeholder="请输入用户名称" name="loginid"/>
            </div>
            <div className={classNames(styles.inputbox,styles.lpassword)}>
              <img src={require("../../assets/u13.png")}/>
              <input type="password" id="password" placeholder="请输入登录密码" name="password"/>
            </div>
          </form>
          <a className={styles["login-btn"]}>登录</a>
          <div className={styles.warn}>
            <i className={[styles.fa, styles["fa-exclamation-circle"]]}/>
            <small>用户名或密码不正确</small>
          </div>
        </div>
      </div>

    )
  }
}
/*
*
* <div className={styles["login-model"]}>
        <h3>源货运营管理平台</h3>
        <span>Business Management System</span>
        <form id="loginForm">
          <div className={classNames("inputbox lusename")}>
            <img src={require("../../assets/u12.png")}/>
            <input type="text" id="userid" placeholder="请输入用户名称" name="loginid"/>
          </div>
          <div className={classNames("inputbox lpassword")}>
            <img src={require("../../assets/u13.png")}/>
            <input type="password" id="password" placeholder="请输入登录密码" name="password"/>
          </div>
        </form>
        <a className="login-btn">登录</a>
        <div className={'warn'}>
          <i className="fa fa-exclamation-circle"/>
          <small>用户名或密码不正确</small>
        </div>
      </div>
* */
