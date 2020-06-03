import { defineConfig } from 'umi';

export default defineConfig({
  dva: {
    immer: true
  },
  locale: {
    default: 'en-US',
    title: true,
  },
  routes: [
    { path: '/',
      component: '@/layouts/index',
      routes:[
        {path: "/", component: '@/pages/index', exact: true},
        {component: "@/pages/404"},
    ] },
    {component: "@/pages/404"},
  ],
  nodeModulesTransform: {
    type: 'none',
  },
});
