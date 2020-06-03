import React, { PropsWithChildren } from 'react';
import { withRouter } from "umi";

function BasicLayout(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <>{children}</>;
}

export default withRouter(BasicLayout);
