import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BackToTopButton from '../components/BackToTopButton';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import Spinner from '../components/Spinner';

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgressBar />

      {/* Helper to reset scroll position on route changes */}
      <ScrollToTop />

      {/* Sticky Header */}
      <Navbar />

      {/* Route content — CSS transition avoids AnimatePresence + lazy route bug */}
      <main className="flex-grow pt-[80px] md:pt-[90px]">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <div key={location.pathname} className="w-full page-enter">
            <Outlet />
          </div>
        </Suspense>
      </main>

      {/* Interactive Floaters */}
      <WhatsAppButton />
      <BackToTopButton />

      {/* Shared Footer Content */}
      <Footer />
    </div>
  );
}
