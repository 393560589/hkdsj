
export default {

  namespace: 'index',

  state: {
    app:[],
    list:'111',
    addvisible:false,
    ybmodvisible:false,
    addactvisible:false,
    addtimevisible:false,
    systemvisible:false,
    shortmvisible:false,
    couponvisible:false,
    logisticsvisible:false,
    departmentvisible:false,
    transfervisible:false
  },

  subscriptions: {
    setup({ dispatch, history }) {
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
