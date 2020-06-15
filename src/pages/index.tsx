import React from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import useIsTablet from '@/hooks/useIsTablet';
import useStyle from '@/hooks/useStyle';
import MobileView from './index_mobile';
import PcView from './index_pc';
import TabletView from './index_tablet';

export default function() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  console.log(useStyle(), '----- useStyle -------');

  if (isMobile) {
    return <MobileView />;
  }

  if (isTablet) {
    return <TabletView />;
  }

  return <PcView />;
}
