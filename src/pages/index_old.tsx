import React, { useEffect, useCallback } from 'react';
import logo from '@/assets/logo.png';
import {
  useIntl,
  setLocale,
  GlobalModelState,
  ConnectRC,
  Loading,
  useSelector,
  useDispatch,
  Link,
} from 'umi';
import { useResponsive } from '@umijs/hooks';
import useEnterAnimation from '@/hooks/useEnterAnimation';
import Select from '@/components/Select';
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

  const [enterAnimationRef] = useEnterAnimation<HTMLImageElement>();

  return (
    <div>
      <h1 className={styles.title}>
        {intl.formatMessage({ id: 'index.title' })},{' '}
        <span style={{ color: responsive.lg ? 'blue' : 'yellow' }}>
          {loginLoading ? 'loading...' : userName}
        </span>
      </h1>
      <div>
        <Select />
      </div>
      <div>
        <p>this is index page.</p>
        <div>
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
        <div style={{ textAlign: 'center' }}>
          <Link to="/product">to product page</Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <img src={logo} alt="logo" ref={enterAnimationRef} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
          magni, saepe commodi totam quod ducimus facere laborum corrupti.
          Ducimus iusto possimus accusamus ea ex odit quia reprehenderit at
          vero.
        </p>
      </div>
    </div>
  );
};

export default Page;
