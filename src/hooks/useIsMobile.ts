import { useResponsive } from '@umijs/hooks';

export default function() {
  const responsive = useResponsive();
  return responsive && !responsive.sm;
}
