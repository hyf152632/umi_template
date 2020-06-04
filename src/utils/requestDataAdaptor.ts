type RequestData = {
  [key: string]: any;
}

export interface ErrorInfoStructure {
  success: boolean; // if request is success
  data?: any; // response data
  errorCode?: string; // code for errorType
  errorMessage?: string; // message display to user
  showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
  host?: string; // onvenient for backend Troubleshooting: host of current access server
}

type RequestRet = Promise<ErrorInfoStructure>;

/**
 * request data adaptor, swallow error, return request data
 */
export function requestDataAdaptor(requestRet: RequestRet): Promise<RequestData> {
  return requestRet.then(({ data }) => {
    return data
  }).catch(console.log)
}
