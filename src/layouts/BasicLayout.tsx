import React, { PropsWithChildren } from 'react';
import { withRouter } from 'umi';
import Header from './Header';
import useIsMobile from '@/hooks/useIsMobile';
import useIsTablet from '@/hooks/useIsTablet';

function BasicLayout(props: PropsWithChildren<{}>) {
  const { children } = props;

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <>
      <Header isMobile={isMobile} isTablet={isTablet} />
      {children}
    </>
  );
}

function PageTopPlaceholderContent(props: { isPc: boolean }) {
  const { isPc } = props;
  return <>{isPc && <div style={{ width: '100%', height: '60px' }}></div>}</>;
}

export default withRouter(BasicLayout);
