import { Effect, ImmerReducer, Subscription } from 'umi';
import { fetchUserName } from '@/services/user';

export type currentTabType = 'home' | 'models'; //当前选中的 header tab item:  'home' | 'models'

export interface GlobalModelState {
  currentTab: currentTabType;
  isShowShouldLoginModal: boolean; // 是否显示 login 提示 modal
  globalSearchValue: string; // 全局搜索 value
  searchResultList: {}[]; //搜索结果
  userName: string; // 当前登录用户名
}

export interface GlobalModelType {
  namespace: "globalstate";
  state: GlobalModelState;
  effects: {
    fetchSearchRet: Effect; // fetch global search result
    login: Effect;
    logout: Effect;
  },
  reducers: {
    updateStateFieldsByCover: ImmerReducer<GlobalModelState>;
  },
  subscriptions: {
    setup: Subscription;
  }
}

const GlobalModel: GlobalModelType = {
  namespace: "globalstate",
  state: {
    currentTab: "home",
    isShowShouldLoginModal: false,
    globalSearchValue: "",
    searchResultList: [],
    userName: ""
  },
  reducers: {
    updateStateFieldsByCover: (state, action) => {
      const { payload } = action;
      return { ...state, ...payload };
    }
  },
  effects: {
    *fetchSearchRet({ payload }, { put }) {
      const { queryVal } = payload;

      const reqRet = yield fetch(
        `https://swapi.co/api/people?search=${queryVal}`
      )
        .then(ret => ret.json())
        .then(data => {
          return data;
        })
        .catch(console.error);

      if (!reqRet || !reqRet.results) {
        return;
      }
      yield put({
        type: "updateStateFieldsByCover",
        payload: {
          searchResultList: reqRet.results
        }
      });
    },
    *login(_, { call, put }) {
      const ret = yield call(fetchUserName);
      if (!ret) {
        return Promise.reject('error');
      }
      const { name } = ret;

      yield put({
        type: 'updateStateFieldsByCover',
        payload: {
          userName: name
        }
      })
      return Promise.resolve();
    },
    *logout() {
      console.log('logout');
      // 退出登陆删除 用户登录信息
      return Promise.resolve("success");
    }
  },
  subscriptions: {
    setup({ history, /*dispatch*/ }) {
      // dispatch({
      //   type: 'login'
      // })
      return history.listen(({ pathname }) => {
        console.log(pathname);
      });
    }
  }
};

export default GlobalModel
