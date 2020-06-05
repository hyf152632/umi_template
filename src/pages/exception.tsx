import React from 'react';
import { useHistory } from 'umi';

export default function() {
  const history = useHistory();

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '20%', fontSize: '32px' }}>
        <span>Ooops, Something </span>
        <span style={{ color: 'var(--link-color)' }}>error </span>
        <span>...</span>
      </div>
      <button
        style={{ marginTop: '20px' }}
        onClick={() => {
          history.goBack();
        }}
      >
        go back
      </button>
    </div>
  );
}
