import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BackToTopButton from '../components/BackToTopButton';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import Spinner from '../components/Spinner';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
    },
  },
};

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

      {/* Main page content wrapped in Framer Motion Page Transition */}
      <main className="flex-grow pt-[80px] md:pt-[90px]">
        <AnimatePresence>
          <motion.div
            key={location.key}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center">
                  <Spinner />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Interactive Floaters */}
      <WhatsAppButton />
      <BackToTopButton />

      {/* Shared Footer Content */}
      <Footer />
    </div>
  );
}
