import { useResponsive } from '@umijs/hooks';

export default function() {
  const responsive = useResponsive();
  return (responsive && !responsive.md) || !responsive.lg;
}
