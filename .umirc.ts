import { defineConfig } from 'umi';

export default defineConfig({
  dva: {
    immer: true
  },
  locale: {
    default: 'en-US',
    title: true,
  },
  dynamicImport: {
    loading: '@/Loading'
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: "/", component: '@/pages/index', exact: true },
        { path: '/product', component: '@/pages/products' },
        { path: "/exception", component: "@/pages/exception" },
        { component: "@/pages/404" },
      ]
    },
    { component: "@/pages/404" },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
});
