
export default {

  namespace: 'business',

  state: {
    keypath:'list-home',
    localword:''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if(location.pathname) {
          let path = location.pathname;
          //监听返回上一页 leftnav 高亮跳转显示用
          dispatch({
            type:'save',
            payload:{
              localword:path,
              keypath: path.indexOf('home')>-1? 'list-home':
                       path.indexOf('member')>-1? 'list-member':
                         path.indexOf('promotion')>-1? 'list-sales':
                           path.indexOf('operate')>-1? 'list-operate':
                             path.indexOf('commodity')>-1? 'list-goods':
                               path.indexOf('statistics')>-1? 'list-count':
                                 path.indexOf('finance')>-1? 'list-financ':
                                   path.indexOf('setup')>-1? 'list-set':
                                     path.indexOf('pawer')>-1? 'list-power':
                       path.indexOf('business')>-1?'list-seller':null
            }
          })
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
