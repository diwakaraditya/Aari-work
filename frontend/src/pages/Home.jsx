import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, ShieldCheck, Clock, CheckCircle, Award } from 'lucide-react';
import { categories, reviews, galleryItems, artisanInfo } from '../data/websiteData';

// Stagger animation container config for cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.6, 0.3, 1],
    },
  },
};

export default function Home() {
  // Use first 3 items of gallery as featured designs
  const featuredDesigns = galleryItems.slice(0, 3);

  // Phone and message setup
  const phoneNumber = '919876543210';
  const customMessage = encodeURIComponent("Hi Aari Aaradhya, I'd like to book a custom embroidery consultation.");

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black">
        {/* Soft high-contrast image backdrop */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590075865003-e48277aff551?auto=format&fit=crop&w=1920&q=80"
            alt="Maggam Embroidery Detail Background"
            className="w-full h-full object-cover opacity-35 dark:opacity-25"
          />
          {/* Luxurious maroon/magenta-to-dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary/70 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/90" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-4 text-center mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary bg-secondary/10 text-secondary mb-6"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span className="text-xs uppercase tracking-widest font-semibold font-sans">
              Luxurious Maggam Embroidery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight"
          >
            Handcrafted Aari & <span className="text-secondary">Maggam</span> Embroidery Designs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-200 mt-6 font-light font-sans"
          >
            Where traditional timber-frame tambour embroidery meets modern bridal couture. Exquisitely crafted sleeves, necklines, and pallus designed for your most precious moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10"
          >
            <Link
              to="/gallery"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-secondary text-bg-dark hover:bg-secondary-light font-semibold text-sm tracking-wide transition-all uppercase shadow-lg duration-300 transform hover:-translate-y-1 block text-center"
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/40 text-white hover:text-secondary hover:border-secondary font-semibold text-sm tracking-wide transition-all uppercase backdrop-blur-sm bg-white/5 duration-300 transform hover:-translate-y-1 block text-center"
            >
              Book Custom Design
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Core Highlights */}
      <section className="py-12 bg-white dark:bg-card-dark transition-colors duration-300 border-y border-primary/5 dark:border-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Award Winning Artistry", desc: "Recognized for preserving traditional tambour techniques and delivering neat finished linings." },
              { icon: ShieldCheck, title: "100% Fit Guarantee", desc: "Perfect-maggam lining designs measured precisely to your sleeve curves and neckline dimensions." },
              { icon: Clock, title: "Punctual Delivery Guarantee", desc: "Crafted details require time, but we promise delivery right on schedule for your big day." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 hover:bg-bg-light dark:hover:bg-bg-dark/50 rounded-2xl transition-colors duration-300">
                <span className="flex-shrink-0 p-3 rounded-full bg-primary/10 dark:bg-secondary/15 text-primary dark:text-secondary">
                  <feature.icon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-primary dark:text-secondary-light mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Categories Grid */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary leading-tight">
              Design Categories
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
            <p className="mt-4 max-w-xl mx-auto text-muted-light dark:text-muted-dark font-sans text-sm">
              Discover beautiful tambour patterns crafted on premium silk bases, sorted by function and styles.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-md bg-white dark:bg-card-dark border border-primary/5 dark:border-secondary/5 flex flex-col justify-end p-6"
              >
                {/* Background image with lazy loading fallback */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest bg-secondary text-bg-dark px-2.5 py-1 rounded-full mb-3">
                    {category.count} Designs
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-secondary-light group-hover:text-secondary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-200 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-light">
                    {category.description}
                  </p>
                  <div className="mt-4 pt-2 border-t border-white/20 flex items-center justify-between">
                    <Link
                      to={`/gallery?category=${category.slug}`}
                      className="text-xs font-semibold text-secondary hover:text-white flex items-center gap-1.5"
                    >
                      Browse Gallery <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Featured Designs */}
      <section className="py-20 bg-white dark:bg-card-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
            <div>
              <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary">
                Spotlight Creations
              </h2>
              <div className="w-16 h-1 bg-secondary mt-4" />
              <p className="mt-4 text-muted-light dark:text-muted-dark font-sans text-sm max-w-lg">
                Sneak peek of our signature Bridal blouses and heavy Zardosi work, reflecting absolute precision matching Indian bridal norms.
              </p>
            </div>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-bg-dark font-semibold text-xs tracking-wider uppercase transition-all duration-300"
            >
              View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredDesigns.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group bg-bg-light dark:bg-bg-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/5 dark:border-secondary/5 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Info Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-primary dark:text-secondary uppercase">
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-serif font-black text-xl text-primary dark:text-white mt-1 group-hover:text-secondary-dark dark:group-hover:text-secondary-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed font-sans mt-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary/5 dark:border-secondary/10 flex justify-between items-center text-xs">
                    <span className="font-light text-muted-light">Designed for:</span>
                    <span className="font-semibold text-primary dark:text-secondary">{item.client}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. About Preview */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark transition-colors duration-300 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-primary/5 dark:bg-secondary/5 blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-secondary shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
                  alt="Aadhya Sharma Working on tambour frames"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
              {/* Overlapping badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary dark:bg-secondary text-white dark:text-bg-dark p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center">
                <span className="text-3xl font-serif font-black">{artisanInfo.experience}</span>
                <span className="text-[10px] font-sans uppercase font-bold tracking-wider mt-1">Experience</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 animate-bounce" /> Meet The Artisan
              </span>
              <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary leading-tight">
                Honoring Traditional Tambour Needlecraft
              </h2>
              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
                {artisanInfo.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="text-2xl font-serif font-black text-primary dark:text-secondary">{artisanInfo.happyClients}</h4>
                  <p className="text-xs text-muted-light dark:text-muted-dark font-sans font-light mt-1">Happy Brides</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="text-2xl font-serif font-black text-primary dark:text-secondary">{artisanInfo.designsCreated}</h4>
                  <p className="text-xs text-muted-light dark:text-muted-dark font-sans font-light mt-1">Embroidery Swatches</p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white hover:bg-primary-light dark:bg-secondary dark:text-bg-dark dark:hover:bg-secondary-light font-semibold text-xs tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews */}
      <section className="py-20 bg-white dark:bg-card-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary">
              Client Testimonials
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
            <p className="mt-4 max-w-xl mx-auto text-muted-light dark:text-muted-dark font-sans text-sm">
              Read how our hand-stitched bridal embroidery became a cherished part of our clients' wedding stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((srv) => (
              <div
                key={srv.id}
                className="bg-bg-light dark:bg-bg-dark/55 border border-primary/5 dark:border-secondary/10 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(srv.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary" />
                    ))}
                  </div>
                  <p className="text-sm font-sans italic text-muted-light dark:text-muted-dark leading-relaxed">
                    "{srv.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-primary/5 dark:border-secondary/10">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-secondary/15 flex items-center justify-center font-serif font-bold text-primary dark:text-secondary text-sm">
                    {srv.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-secondary text-sm">{srv.name}</h4>
                    <p className="text-[10px] text-muted-light dark:text-muted-dark mt-0.5">{srv.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="py-20 bg-primary dark:bg-card-dark text-white border-t border-secondary/20 relative">
        <div className="absolute inset-0 opacity-15 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(214,175,55,0.7),transparent)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif font-black text-3xl md:text-5xl text-secondary">
            Ready to design your dream outfit?
          </h2>
          <p className="text-sm md:text-base text-gray-200 font-light font-sans max-w-xl mx-auto leading-relaxed">
            Schedule a complimentary boutique design consultation. Choose fabrics, map custom motifs, and sketch layout outlines with our lead designer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href={`https://wa.me/${phoneNumber}?text=${customMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-sm tracking-wide transition-all uppercase rounded-full shadow-lg block text-center"
            >
              Consult via WhatsApp
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-bg-dark hover:bg-secondary-light font-semibold text-sm tracking-wide transition-all uppercase rounded-full shadow-lg block text-center"
            >
              Online Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
