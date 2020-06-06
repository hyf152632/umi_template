import React, { useEffect, useState } from 'react';

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: any = null;
    let start = 0;

    function step(timestamp: number) {
      if (start === 0) {
        start = timestamp;
      }
      let progress = timestamp - start;

      setProgress(prev =>
        Math.min(prev + (progress * Math.random()) / 10, 100),
      );
      start = timestamp;
      if (progress < 100) {
        raf = window.requestAnimationFrame(step);
      }
    }

    raf = window.requestAnimationFrame(step);

    return () => {
      setProgress(100);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: `${progress}%`,
          height: '3px',
          top: 0,
          left: 0,
          background: 'rgb(45, 0, 246)',
          zIndex: 9999,
          borderTopRightRadius: '1px',
          borderBottomRightRadius: '1px',
        }}
      ></div>
    </>
  );
}

export default Loading;
