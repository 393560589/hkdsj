import React,{PureComponent} from 'react'
import { Button, Radio,DatePicker} from 'antd'
import Header from '../../components/Card'
import styles from './awardset.css'

import { connect } from 'dva'

const { RangePicker } = DatePicker;
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <Header>综合统计</Header>
        <div className="tablebox">
          <div className={styles.asetbox,styles.statisbox}>
            <div className="tip-title">
              <span style={{marginLeft:20}}>综合统计</span>
              <div className="right">
                <Button>导出数据</Button>
                <Radio.Group defaultValue="a" buttonStyle="solid" style={{marginLeft:10}}>
                  <Radio.Button value="a">全部</Radio.Button>
                  <Radio.Button value="b">最近30天</Radio.Button>
                  <Radio.Button value="c">最近90天</Radio.Button>
                </Radio.Group>
                <RangePicker onChange={this.onChange} style={{marginLeft:10}} />
              </div>
            </div>
            <div className={styles.neptitle}>
              <i className="fa fa-bookmark"></i>
              <span>订单统计</span>

            </div>
            <dl className={styles.nepdt}>
              <dt>销售总额</dt>
              <dd>
                ¥1000000.00
              </dd>
              <dt>有效订单总数</dt>
              <dd>
                10000
              </dd>
              <dt>有效订单总额</dt>
              <dd>
                ¥1000000.00
              </dd>
              <dt>无效订单总数(关闭或取消)</dt>
              <dd>
                100
              </dd>
              <dt>无效订单总额</dt>
              <dd>
                ¥100000.00
              </dd>
              <dt>已成交订单总数</dt>
              <dd>
                10000
              </dd>
              <dt>已成交订单总额</dt>
              <dd>
                ¥1000000.00
              </dd>
            </dl>
            <div className={styles.neptitle}>
              <i className="fa fa-bookmark"></i>
              <span>会员统计</span>

            </div>
            <dl className={styles.nepdt}>
              <dt>会员总数</dt>
              <dd>
                100000
              </dd>
              <dt>有订单会员数</dt>
              <dd>
                10000
              </dd>
              <dt>会员订单总数</dt>
              <dd>
                10000
              </dd>
              <dt>会员购物总额</dt>
              <dd>
                ¥1000000.00
              </dd>
              <dt>会员购买率</dt>
              <dd>
                10.00%
              </dd>
              <dt>每会员订单数</dt>
              <dd>
                0.1
              </dd>
              <dt>每会员购物额</dt>
              <dd>
                ¥100.00
              </dd>
            </dl>
            <div className={styles.neptitle}>
              <i className="fa fa-bookmark"></i>
              <span>积分统计</span>

            </div>
            <dl className={styles.nepdt}>
              <dt>总赠送消费积分(优币)</dt>
              <dd>
                100000
              </dd>
              <dt>总赠送等级积分(成长值)</dt>
              <dd>
                100000
              </dd>
              <dt>操作</dt>
              <dd>
                <a>查看商品</a>
                <a>查看订单</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    )
  }
}

