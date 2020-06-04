import { request } from 'umi';
import { requestDataAdaptor } from '@/utils/requestDataAdaptor';

export const fetchUserName = () => requestDataAdaptor(request('/api/user/name'))

