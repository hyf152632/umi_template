import { useRef } from 'react';
import { useInViewport } from '@umijs/hooks';


type AnimationOptions = {
  isSingleUse?: boolean;  // 是否只是初始入场时使用，如果是，那么再次入场则不触发
  isUseOpacity?: boolean; // 是否有 opactity 动效效果；
}

/**
 * 对 element 元素应用入场动效
 */
function useEnterAnimation<T extends HTMLElement>({ isSingleUse = true, isUseOpacity = true }: AnimationOptions = { isSingleUse: true, isUseOpacity: true }) {
  const flag = useRef(false);
  const [inViewPort, ref] = useInViewport<T>();

  const isShouldResetElementInitialState = !inViewPort && ref && ref.current && !flag.current;

  if (isShouldResetElementInitialState) {
    if (isSingleUse) {
      flag.current = true;
    }
    if (isUseOpacity) {
      ref.current.style.opacity = '0.5';
    }

    ref.current.style.transform = 'translateY(15px)';
  }

  if (inViewPort) {
    if (ref) {
      if (isUseOpacity) {
        ref.current.style.opacity = '1';
      }
      ref.current.style.transform = 'translateY(0px)';
      ref.current.style.transition = 'opacity ease-out 0.3s, transform ease-out 0.5s';
    }
  }
  return [ref]
}

export default useEnterAnimation;
