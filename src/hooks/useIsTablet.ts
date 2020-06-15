import { useResponsive } from '@umijs/hooks';

export default function() {
  const responsive = useResponsive();
  console.log(responsive);
  return (responsive && !responsive.md) || !responsive.lg;
}
