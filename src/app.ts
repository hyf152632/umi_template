import { RequestConfig, /*ErrorShowType*/ } from 'umi';

// 运行时 request 配置
export const request: RequestConfig = {
  timeout: 3000,
  errorConfig: {
    // 当后端接口不满足该规范的时候你需要通过该配置把后端接口数据转换为该格式，
    // 该配置只是用于错误处理，不会影响最终传递给页面的数据格式。
    // adaptor: (resData, ctx) => {

    //   // return {
    //   //   ...resData,
    //   //   success: resData.ok,
    //   //   showType: ErrorShowType.REDIRECT,
    //   // }
    // }
  }
}

// initial state
export async function getInitialState() {
  return []
}
