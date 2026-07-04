import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Gallery from './pages/Gallery';
import { preloadAllRoutes } from './utils/routePreloads';

// Lazy loading pages for initial bundle split
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// Preload route chunks right after mount so first navigation never suspends.
function RoutePreloader() {
  useEffect(() => {
    preloadAllRoutes();
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutePreloader />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="text-center py-24 bg-bg-light dark:bg-bg-dark transition-colors font-sans space-y-4">
                <h2 className="font-serif font-black text-4xl text-primary dark:text-secondary">404</h2>
                <p className="text-sm text-muted-light dark:text-muted-dark">Page not found</p>
                <a href="/" className="inline-block text-xs font-semibold text-primary dark:text-secondary underline">Return to Home</a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
