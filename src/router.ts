import { Router, Route, RootRoute } from '@tanstack/react-router';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';

const rootRoute = new RootRoute({
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({ routeTree });
