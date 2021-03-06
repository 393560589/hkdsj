export const menu = [
  {
    key:'首页',
    path:'list-home',
    icon:require('../assets/u135.png'),
    status:'home',
  },
  {
    key:'商家',
    path:'list-seller',
    icon:require('../assets/u127.png'),
    status:'business',
  },
  {
    key:'会员',
    path:'list-member',
    icon:require('../assets/u127.png'),
    status:'member',
  },
  {
    key:'促销',
    path:'list-sales',
    status:'promotion',
    icon:require('../assets/u123.png'),
  },
  {
    key:'运营',
    path:'list-operate',
    icon:require('../assets/u125.png'),
    status:'operate'
  },
  {
    key:'商品',
    path:'list-goods',
    icon:require('../assets/u124.png'),
    status:'commodity'
  },
  {
    key:'统计',
    path:'list-count',
    icon:require('../assets/u137.png'),
    status:'statistics'
  },
  {
    key:'财务',
    path:'list-financ',
    icon:require('../assets/u130.png'),
    status:'finance'
  },
  {
    key:'设置',
    path:'list-set',
    icon:require('../assets/u133.png'),
    status:'setup'
  },
  {
    key:'权限',
    path:'list-power',
    icon:require('../assets/u134.png'),
    status:'pawer'
  },
];
export const MenuChilren = [
  [
    {
      title:'首页',
      keyword:'list-home',
      children:[
        {
          key:'系统首页',
          path:'first',
          route:'/home/first'
        },
        {
          key:'账户设置',
          path:'accountset',
          route:'/home/accountset'
        },
        {
          key:'登录日志',
          path:'loginlog',
          route:'/home/loginlog'
        }
      ]
    }
  ],
  [
    {
      title:'商家管理',
      keyword:'list-seller',
      children:[
        {
          key:'商家列表',
          path:'businesslist',
          route:'/business/businesslist'
        },
      ]
    }
  ],
  [
    {
      title:'会员管理',
      keyword:'list-member',
      children:[
        {
          key:'会员列表',
          path:'memberlist',
          route:'/member/memberlist'
        },
        {
          key:'购买力筛选',
          path:'buypower',
          route:'/member/buypower'
        },
        {
          key:'标签管理',
          path:'labelgl',
          route:'/member/labelgl'
        },
        {
          key:'会员等级设置',
          path:'grade',
          route:'/member/grade'
        },
      ]
    },
    {
      title:'成长值及蝌蚪值',
      keyword:'list-member',
      children:[
        {
          key:'成长值及蝌蚪币查询',
          path:'growth',
          route:'/member/growth'
        },
        {
          key:'任务奖励设置',
          path:'awardset',
          route:'/member/awardset'
        },
        {
          key:'更多规则设置',
          path:'rulerset',
          route:'/member/rulerset'
        },
      ]
    }
  ],
  [
    {
      title:'秒杀专区',
      keyword:'list-sales',
      children:[
        {
          key:'秒杀活动列表',
          path:'seckillactivity',
          route:'/promotion/seckillactivity'
        },
        {
          key:'时间段列表',
          path:'timeslot',
          route:'/promotion/timeslot'
        },
        {
          key:'秒杀提醒通知',
          path:'secremind',
          route:"/promotion/secremind"
        },
      ]
    },
    {
      title:'优惠券管理',
      keyword:'list-sales',
      children:[
        {
          key:'优惠券列表',
          path:'coupons',
          route:'/promotion/coupons'
        },
        {
          key:'添加优惠券',
          path:'addcoupon',
          route:'/promotion/addcoupon'
        },
      ]
    },
    {
      title:'活动管理',
      keyword:'list-sales',
      children:[
        {
          key:'活动列表',
          path:'activitylist',
          route:'/promotion/activitylist'
        },
        {
          key:'添加活动',
          path:'activityadd',
          route:'/promotion/activityadd'
        },
      ]
    },
    {
      title:'首页推荐',
      keyword:'list-sales',
      children:[
        {
          key:'品牌制造商',
          path:'brand',
          route:'/promotion/brand'
        },
        {
          key:'新鲜好物',
          path:'fresh',
          route:'/promotion/fresh'
        },
        {
          key:'人气推荐',
          path:'popularity',
          route:'/promotion/popularity'
        },
        /*{
          key:'专题精选',
          path:'list-power',
        },*/
      ]
    }
  ],
  [
    {
      title:'直播管理',
      keyword:'list-operate',
      children:[
        {
          key:'直播列表',
          path:'livelist',
          route:'/operate/livelist'
        },
      ]
    },
    {
      title:'消息查询',
      keyword:'list-operate',
      children:[
        {
          key:'系统消息',
          path:'systemmsg',
          route:'/operate/systemmsg'
        },
        {
          key:'短信消息',
          path:'shortmsg',
          route:'/operate/shortmsg'
        },
        {
          key:'站内信消息',
          path:'mailmsg',
          route:'/operate/mailmsg'
        },{
          key:'app推送消息',
          path:'appmsg',
          route:'/operate/appmsg'
        },

      ]
    },
    {
      title:'其他查询',
      keyword:'list-operate',
      children:[
        {
          key:'优惠券查询',
          path:'couponquery',
          route:'/operate/couponquery'
        },
        {
          key:'邀请好友查询',
          path:'invitaquery',
          route:'/operate/invitaquery'
        },
        /*{
          key:'幸运抽奖查询',
          path:'list-power',
        }*/
      ]
    },
    {
      title:'广告管理',
      keyword:'list-operate',
      children:[
        {
          key:'广告列表',
          path:'advertlist',
          route:'/operate/advertlist'
        },
        {
          key:'添加广告',
          path:'advertadd',
          route:'/operate/advertadd'
        }
      ]
    }
  ],
  [
    {
      title:'商品管理',
      keyword:'list-goods',
      children:[
        {
          key:'商品分类',
          path:'classif',
          route:'/commodity/classif'
        },
      ]
    }
  ],
  [
    {
      title:'统计分析',
      keyword:'list-count',
      children:[
        {
          key:'交易统计',
          path:'transtatis',
          route:'/statistics/transtatis'
        },
        {
          key:'流量统计',
          path:'flowstatis',
          route:'/statistics/flowstatis'
        },
       /* {
          key:'商品统计',
          path:'menberstatis',
          route:'/statistics/menberstatis'
        },*/
        {
          key:'会员统计',
          path:'menberstatis',
          route:'/statistics/menberstatis'
        },
        {
          key:'搜索统计',
          path:'searchstatis',
          route:'/statistics/searchstatis'
        },
      ]
    }
  ],
  [
    {
      title:'财务报表',
      keyword:'list-financ',
      children:[
        {
          key:'综合统计',
          path:'comprestatis',
          route:'/finance/comprestatis'
        },
        {
          key:'会员排行',
          path:'memeranks',
          route:'/finance/memeranks'
        },
        {
          key:'销售统计',
          path:'salestatis',
          route:'/finance/salestatis'
        }
      ]
    },
    {
      title:'对账管理',
      keyword:'list-financ',
      children:[
        {
          key:'对账列表',
          path:'reconciliations',
          route:'/finance/reconciliations'
        }
      ]
    }
  ],
  [
    {
      title:'平台设置',
      keyword:'list-set',
      children:[
        {
          key:'平台信息',
          path:'paltifor',
          route:'/setup/paltifor'
        },
        {
          key:'基本设置',
          path:'basic',
          route:'/setup/basic'
        },
        {
          key:'消息提醒',
          path:'msgremind',
          route:'/setup/msgremind'
        },
        {
          key:'验证码设置',
          path:'vcode',
          route:'/setup/vcode'
        }
      ]
    },
    {
      title:'支付配送',
      keyword:'list-set',
      children:[
        {
          key:'运费模板',
          path:'freightfrom',
          route:'/setup/freightfrom'
        },
        {
          key:'物流公司',
          path:'logistics',
          route:'/setup/logistics'
        },
        {
          key:'支付设置',
          path:'payset',
          route:'/setup/payset'
        },
        /*{
          key:'区域管理',
          path:'list-power',
        }*/
      ]
    }
  ],
  [
    {
      title:'权限管理',
      keyword:'list-power',
      children:[
        {
          key:'部门管理',
          path:'department',
          route:'/pawer/department'
        },
        {
          key:'成员管理',
          route:'/pawer/manage',
          path:'manage',
        },
        {
          key:'客服管理',
          path:'servicer',
          route:'/pawer/servicer'
        },
        {
          key:'操作日志',
          path:'operlog',
          route:'/pawer/operlog'
        },
        /*{
          key:'数据库管理',
          path:'list-power',
        },*/
      ]
    }
  ],
]
