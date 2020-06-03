import { Effect, ImmerReducer, Subscription } from 'umi';

export type currentTabType = 'home' | 'models'; //当前选中的 header tab item:  'home' | 'models'

export interface GlobalModelState {
  currentTab: currentTabType;
  isShowShouldLoginModal: boolean; // 是否显示 login 提示 modal
  globalSearchValue: string; // 全局搜索 value
  searchResultList: {}[] //搜索结果
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

const GlobalModel: GlobalModelType =  {
  namespace: "globalstate",
  state: {
    currentTab: "home",
    isShowShouldLoginModal: false,
    globalSearchValue: "",
    searchResultList: []
  },
  reducers: {
    updateStateFieldsByCover: (state, action) => {
      const {payload} = action;
      return {...state, ...payload};
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
    *login() {
      function sleep(): Promise<string> {
        return new Promise((resolve) => {
          setTimeout(() => {
            return resolve('ok')
          }, 2000)
        })
      }
      return yield sleep();
    },
    *logout() {
      // 退出登陆删除 用户登录信息
      return Promise.resolve("success");
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      function changeGlobalTab(tabName = "") {
        dispatch({
          type: "updateStateFieldsByCover",
          payload: {
            currentTab: tabName
          }
        });
      }
      return history.listen((his) => {
        const {pathname, query} = his as (typeof his & {query: {}});
        // if (pathname === "/home") {
        //   changeGlobalTab("home");
        // } else if (pathname === "/design/list") {
        //   changeGlobalTab("models");
        // } else {
        //   changeGlobalTab("");
        // }
      });
    }
  }
};

export default GlobalModel
