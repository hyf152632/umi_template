import React from 'react';
import { Helmet } from 'umi';
const ApplicationHeader = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
}
export default ApplicationHeader;
