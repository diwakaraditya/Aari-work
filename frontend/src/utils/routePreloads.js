const routePreloads = {
  '/': () => import('../pages/Home'),
  '/about': () => import('../pages/About'),
  '/gallery': () => import('../pages/Gallery'),
  '/services': () => import('../pages/Services'),
  '/contact': () => import('../pages/Contact'),
};

export function preloadRoute(path) {
  routePreloads[path]?.();
}

export function preloadAllRoutes() {
  Object.values(routePreloads).forEach((load) => load());
}
