import React, { useEffect } from 'react';
import { onRouteUpdate, onRouteUpdateDelayed } from '@/vendors/gatsby-browser';

function Loading() {
  useEffect(() => {
    onRouteUpdateDelayed();

    return () => {
      onRouteUpdate();
    };
  }, []);

  return <></>;
}

export default Loading;
