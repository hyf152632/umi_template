import React, { useEffect, useState } from 'react';
import { useRequest, request, useIntl, setLocale, connect, GlobalModelState, ConnectRC, Loading, currentTabType } from 'umi';
import { useResponsive } from '@umijs/hooks';
import styles from './index.less';

interface Props {
  currentTab: currentTabType;
  loginLoading: boolean | undefined;
}

const Page: ConnectRC<Props> = ({ currentTab, loginLoading, dispatch }) => {

  const [name, setName] = useState<string>('');
  const intl = useIntl();
  const { data, error, loading } = useRequest(() => {
    return request('/api/user/name');
  })

  console.log(data, error, loading, '=========== useRequest =========');

  useEffect(() => {

    dispatch && dispatch({
      type: 'globalstate/login'
    })
  }, []);

  console.log(currentTab, '------ currentTab --------');
  console.log(loginLoading, '--------- loginLoading --------');

  const responsive = useResponsive();

  return (
    <div>
      <h1 className={styles.title}>{intl.formatMessage({ id: 'index.title' })}, <span style={{ color: responsive.lg ? "blue" : "yellow" }}>{name}</span></h1>
      <button onClick={() => {
        setLocale('zh-CN', false);
      }}>zn-CN</button>
      <button onClick={() => {
        setLocale('en-US', false);
      }}>en-US</button>
    </div>
  );
}

export default connect(({ globalstate, loading }: { globalstate: GlobalModelState, loading: Loading }) => ({
  currentTab: globalstate.currentTab,
  loginLoading: loading.effects['globalstate/login']
}))(Page)
