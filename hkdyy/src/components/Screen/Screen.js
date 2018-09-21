import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Button,Input,Icon,Form,DatePicker,Row,Col} from 'antd'
import classnames from 'classnames'
import moment from 'moment'

import locale from 'antd/lib/date-picker/locale/zh_CN';
import styles from './index.less'

const {  RangePicker } = DatePicker;
const FormItem = Form.Item;
const dateFormat = 'YYYY/MM/DD';
export default class Screen extends Component{
  static defaultProps={
    style:{},
    HeaderStyle:{
      borderBottom:'1px solid #eee'
    },
  }
  render(){
    const { style,HeaderStyle } = this.props
    return (
      <div className={styles.screen} style={style}>
        <div className={classnames(['fl-sp',styles.screenheader])}  style={HeaderStyle}>
          <div>
            <Icon type="search" theme="outlined" />
            <span>筛选查询</span>
          </div>
          <div>
            <Button type={'primary'}>搜索</Button>
            <Button type={'ghost'}>高级筛选</Button>
          </div>
        </div>
        <div>
          <Form layout="inline">
            <FormItem label={'用户账号'}>
              <Input />
            </FormItem>
            <FormItem label={'用户昵称'}>
              <Input />
            </FormItem>
            <FormItem label={'时间区间'}>
              <RangePicker
                locale={locale}
                format={dateFormat}
              />
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
