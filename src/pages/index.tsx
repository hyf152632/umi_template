import React, { useEffect, useCallback } from 'react';
import {
  useIntl,
  setLocale,
  GlobalModelState,
  ConnectRC,
  Loading,
  useSelector,
  useDispatch,
} from 'umi';
import { useResponsive } from '@umijs/hooks';
import styles from './index.less';

interface Props {
  userName: string;
  loginLoading: boolean | undefined;
}

const Page: ConnectRC<Props> = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const { userName, loginLoading }: Props = useSelector(
    ({
      globalstate,
      loading,
    }: {
      globalstate: GlobalModelState;
      loading: Loading;
    }) => ({
      userName: globalstate.userName,
      loginLoading: loading.effects['globalstate/login'],
    }),
  );

  const login: any = useCallback(
    () =>
      dispatch &&
      dispatch({
        type: 'globalstate/login',
      }),
    [dispatch],
  );

  useEffect(() => {
    login().catch(console.log);
  }, []);

  const responsive = useResponsive();

  return (
    <div>
      <h1 className={styles.title}>
        {intl.formatMessage({ id: 'index.title' })},{' '}
        <span style={{ color: responsive.lg ? 'blue' : 'yellow' }}>
          {loginLoading ? 'loading...' : userName}
        </span>
      </h1>
      <button
        onClick={() => {
          setLocale('zh-CN', false);
        }}
      >
        zn-CN
      </button>
      <button
        onClick={() => {
          setLocale('en-US', false);
        }}
      >
        en-US
      </button>
    </div>
  );
};

export default Page;
