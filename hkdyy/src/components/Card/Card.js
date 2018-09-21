import styles from './index.less'
import {Button,Icon} from 'antd'
import React,{PureComponent} from 'react'

export default class Card extends PureComponent{
  state={
    loading:false
  }
  render(){
    const { loading } = this.state;
    return (
      <div className={styles["con-title"]}>
        <div className={styles["titlesec"]}>
          <span className="left spantitle">{this.props.children}</span>
            <Button icon="sync" loading={loading} className="right refresh"
                    onClick={()=>{
                      this.setState({
                        loading:true
                      })
                      setTimeout(()=>{
                        window.location.reload();
                        this.setState({
                          loading:false
                        })
                      },600)}
                    }>
              刷新</Button>


        </div>
      </div>
    )
  }

}
