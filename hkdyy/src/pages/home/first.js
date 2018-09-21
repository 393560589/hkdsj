import React,{PureComponent} from 'react'
import { Button,List,Card,Icon,Tooltip,Avatar,Tabs,DatePicker,message } from 'antd'
import Header from '../../components/Card'
import {Link} from 'dva/router'
import styles from './index.less'
import { getTimeDistance } from '../../utils/func';
import G2 from '@antv/g2'; //图标引入
import Trend from 'ant-design-pro/lib/Trend';
import { connect } from 'dva'

const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;

const data = [
  {
    title: '总订单量',
    tips:'今日订单量'
  },
  {
    title: '访问量',
    tips:'日访问量'
  },
  {
    title: '支付笔数',
    tips:'转化率'
  },
  {
    title: '运营效果',
    tips:'转化率'
  },
];


@connect(({index})=>({index}))


export default class Home extends PureComponent{
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };
  callback=(key)=> {
    console.log(key);
  }
  handleRangePickerChange = rangePickerValue => {
    this.setState({
      rangePickerValue,
    });

    const { dispatch } = this.props;
    dispatch({
      type: 'chart/fetchSalesData',
    });
  };
  selectDate = type => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    const { dispatch } = this.props;
    dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  isActive(type) {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return;
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
  }

  render(){
    const { rangePickerValue } = this.state;
    const salesExtra = (
      <div style={{height:'56px'}}>
        <div className={styles.salesExtra}>
          <a className={this.isActive('today')} onClick={() => this.selectDate('today')}>
            今日
          </a>
          <a className={this.isActive('week')} onClick={() => this.selectDate('week')}>
            本周
          </a>
          <a className={this.isActive('month')} onClick={() => this.selectDate('month')}>
            本月
          </a>
          <a className={this.isActive('year')} onClick={() => this.selectDate('year')}>
            全年
          </a>
        </div>
        <RangePicker
          value={rangePickerValue}
          onChange={this.handleRangePickerChange}
          style={{ width: 256 }}
        />
      </div>
    );
    return (
     <div className="content">
       <Header>系统首页</Header>
      <div className="tablebox">

        <Headerblock />
        {/*未注入数据之前先这样处理*/}
        <div className="shortenter" style={{marginBottom:'20px'}}>
          <div className="tip-title" style={{lineHeight:'56px',height:'56px'}}>
            <h3 className="left">运营快捷入口</h3>
          </div>
          <ul>
            <li><a>
              <img src={require("../../assets/u254.png")}/>
                <span>用户管理</span>
            </a></li>
            <li><a>
              <img src={require("../../assets/u258.png")}/>
                <span>交易统计</span>
            </a></li>
            <li><a>
              <img src={require("../../assets/u263.png")}/>
                <span>短信营销</span>
            </a></li>
            <li><a>
              <img src={require("../../assets/u265.png")}/>
                <span>广告管理</span>
            </a></li>
          </ul>
        </div>
        <MesDetail />

        <Tabs defaultActiveKey="1"
              tabBarExtraContent={salesExtra}
              //style={{backgroundColor:'#fff'}}
              size="large" tabBarStyle={{ marginBottom: 0,backgroundColor:'#f3f3f3',marginTop:20,padding:'0 20px' }}
              onChange={this.callback}>
          <TabPane tab="订单统计" key="1">
            <div className="orderstats divhidden">

              <div className="order-tab">
                <div className="left">
                  <small>本月订单总数</small>
                  <span>10000</span>
                  <div className="rise"><font><i className="fa fa-caret-up"></i>10%</font>同比上周</div>
                  <small>本周订单总数</small>
                  <span>1000</span>
                  <div className="fall"><font><i className="fa fa-caret-down"></i>10%</font>同比上周</div>
                </div>
                <div className="roder-tabbox" id="ordertlb"></div>

              </div>
            </div>
          </TabPane>
          <TabPane tab="销售统计" key="2">
            <div className="orderstats divhidden">

              <div className="order-tab">
                <div className="left">
                  <small>本月销售总额</small>
                  <span>10000</span>
                  <div className="rise"><font><i className="fa fa-caret-up"></i>10%</font>同比上周</div>
                  <small>本周销售总额</small>
                  <span>1000</span>
                  <div className="fall"><font><i className="fa fa-caret-down"></i>10%</font>同比上周</div>
                </div>
                <div className="roder-tabbox" id="selltlb"></div>

              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
    )
  }
}

const Headerblock=(props)=>{
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card bodyStyle={{paddingBottom:'10px'}}>
            <div className={'fl-sp'}>
              <span>{item.title}</span>
              <Tooltip title={item.tips}>
                <Icon type="info-circle" />
              </Tooltip>
            </div>
            <p style={{fontSize:'22px'}}>123,00</p>
            <div style={{borderTop:'1px solid #eee',lineHeight:'40px',marginTop:'5px'}}>
              今日订单量: 9000
            </div>
          </Card>
        </List.Item>
      )}
    />
  )
};

const MesDetail=(props)=>{

  const gridStyle = {
    width: '25%',
    textAlign: 'left',
    height:'150px',
    paddingBottom:0,
    cursor:'pointer'
  };
  const yydata=[
    {
      avatar:'user',
      title:'用户管理',
      description:'用户管理:总用户88位，今日新增10位'
    },
    {
      avatar:'line-chart',
      title:'交易统计',
      description:'交易明细:总订单200单，今日10单'
    },
    {
      avatar:'mail',
      title:'短信营销',
      description:'短信发送量:总传送短信1000条，今日100条'
    },
    {
      avatar:'desktop',
      title:'广告管理',
      description:'广告管理:广告管理是什么，？？'
    },
  ];

  return (
    <Card
      headStyle={{backgroundColor:'#f3f3f3'}}
      bodyStyle={{ padding: 0 }}
      title={<p>用户总览</p>}>
      {
        yydata.map((item,index)=>{
          return (
            <Card.Grid style={gridStyle} key={index} onClick={()=>{ message.error('还未增加快捷跳转');}}>
              <Card bodyStyle={{ padding: 0 }} bordered={false}>
                <Card.Meta
                  style={{height:'80px',overflow:'hidden'}}
                  title={
                    <div>
                      <Avatar size="small" icon={item.avatar} style={{backgroundColor:'#31c3a6'}}/>
                      <a style={{marginLeft:'10px'}}>{item.title}</a>
                    </div>
                  }
                  description={item.description}
                />
                <div className={'fl-sp'} style={{borderTop:'1px solid #eee',marginTop:'10px',lineHeight:'40px'}}>
                  <a style={{color:'#999'}}>红蝌蚪数据</a>
                  <span>
                    <Trend flag="up">10%</Trend>
                  </span>
                </div>
              </Card>

            </Card.Grid>
          )
        })
      }

    </Card>
  )
};


