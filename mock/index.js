import { delay } from './utils/delay';

// interface ErrorInfoStructure {
//   success: boolean; // if request is success
//   data?: any; // response data
//   errorCode?: string; // code for errorType
//   errorMessage?: string; // message display to user
//   showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
//   traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
//   host?: string; // onvenient for backend Troubleshooting: host of current access server
// }

const errorUserNameData = {
  success: false,
  errorCode: 1,
  errorMessage: 'can not get user name',
  showType: 9
}

const userNameData = {
  success: true,
  data: {name: 'ivi'},
  errorCode: 0
}

const proxy = {
  'GET /api/user/name': userNameData,
  // 'GET /api/user/name': errorUserNameData,
  // 'GET /api/user/name': (req, res) => {
  //   res.status(404).send('not found');
  // },
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },
  // GET 类型不能存在 queryString, 形如 a?name=b, 其中 ?name=b 不能直接加上
  // 参考 https://github.com/umijs/umi/issues/2424
  'GET /api/ivi-system/dict/list': (req, res) => {
    const { query } = req;
    const { code } = query;
    if (code === 'Printing_Main_Category') {
      res.status(200).send('Printing_Main_Category');
    } else {
      res.status(404).send('not found');
    }
  },

  'GET /api/printer': {
    data: {
      printers: [
        {
          id: '001',
          address: 'http://raspberrypi.local:5000/api/',
          socket: 'ws://raspberrypi.local:5000/sockjs/355/sq4qhb32/websocket',
          apiKey: '7295EB2EE4464A589EE6CD825A0EB705',
          users: [
            {
              userName: 'andy',
              password: 'mjmjmj',
            },
          ],
        }
      ],
    },
  },
  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  },
};

// 调用 delay 函数，统一处理
export default delay(proxy, 1000);
