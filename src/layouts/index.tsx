import React, { PropsWithChildren } from 'react';
import { useLocation } from 'umi';
import ApplicationHeader from './ApplicationHeader';
import BasicLayout from './BasicLayout';

function SimpleLayout(props: PropsWithChildren<{}>) {
  return <>
    <ApplicationHeader />
    <>{props.children}</>
  </>;
}

export default function (props: PropsWithChildren<{}>) {
  const { children } = props;

  const { pathname } = useLocation();
  if (pathname === '/') {
    return <>
      <ApplicationHeader />
      <BasicLayout>{children}</BasicLayout>
    </>

  }

  return SimpleLayout(props);
}
