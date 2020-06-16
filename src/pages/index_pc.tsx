import React from 'react';
import { useVideo } from 'react-use';
import videoPoster from './assets/home_video_poster.jpg';

export default function() {
  return (
    <div>
      <FirstScreen />
    </div>
  );
}

function FirstScreen() {
  const [video, state, controls, ref] = useVideo({
    src: 'https://giant.gfycat.com/SneakyAnyGuernseycow.mp4',
    muted: true,
    autoPlay: true,
    loop: true,
    poster: videoPoster,
    style: {
      objectFit: 'cover',
      fontFamily: 'object-fit: cover',
      objectPosition: 'center center',
      verticalAlign: 'bottom',
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
    },
  });

  return <>{video}</>;
}
