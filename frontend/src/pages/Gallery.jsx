import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/websiteData';

// Filter categories
const filterTabs = [
  { name: 'All Collection', value: 'all' },
  { name: 'Bridal Blouses', value: 'bridal-blouses' },
  { name: 'Wedding Sarees', value: 'wedding-sarees' },
  { name: 'Party Wear', value: 'party-wear' },
  { name: 'Kids Wear', value: 'kids-wear' },
  { name: 'Custom Designs', value: 'custom-designs' }
];

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Sync category state with query params if any
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Validate that search query is one of valid values
      const tabExists = filterTabs.some(tab => tab.value === categoryParam);
      if (tabExists) {
        setActiveCategory(categoryParam);
      } else {
        setActiveCategory('all');
      }
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  // Handle Tab filter click
  const handleFilterClick = (value) => {
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  // Filter gallery items based on search and category
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Compose custom WhatsApp text for inquiry
  const getWhatsAppInquiryUrl = (item) => {
    const phone = '919876543210';
    const text = encodeURIComponent(`Hi Aari Aaradhya, I am interested in inquiring about the design: "${item.title}" (ID: ${item.id}). Could you provide pricing and booking slot details?`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <div className="py-12 bg-bg-light dark:bg-bg-dark transition-colors duration-300 min-h-screen">
      {/* 1. Header Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4 text-secondary" /> Lookbook Showcase
        </span>
        <h1 className="font-serif font-black text-4xl md:text-6xl text-primary dark:text-secondary leading-tight">
          Our Embroidery Gallery
        </h1>
        <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        <p className="mt-4 max-w-xl mx-auto text-muted-light dark:text-muted-dark font-sans text-sm">
          Browse through our boutique works catalog containing detailed bead embroideries, flower border patterns and heavy necklines.
        </p>
      </section>

      {/* 2. Filters & Search Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between border-b border-primary/5 dark:border-secondary/15 pb-6">
          {/* Categories Tab Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-none snap-x snap-mandatory">
            {filterTabs.map((tab) => {
              const isSelected = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => handleFilterClick(tab.value)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex-shrink-0 snap-align-start focus:outline-none ${
                    isSelected
                      ? 'bg-primary text-white dark:bg-secondary dark:text-bg-dark shadow-md'
                      : 'bg-white dark:bg-card-dark text-text-light dark:text-text-dark border border-primary/5 dark:border-secondary/10 hover:border-primary dark:hover:border-secondary'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search motif, color, client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-card-dark text-xs border border-primary/5 dark:border-secondary/10 text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-secondary transition-all"
            />
          </div>
        </div>
      </section>

      {/* 3. Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-black"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                {/* Quick Info Box */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-secondary-light">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-serif font-black text-lg text-white mt-1 leading-snug group-hover:text-secondary-light transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-gray-300 font-light mt-1 inline-block">
                    Made for: {item.client.split(',')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-card-dark rounded-2xl border border-dashed border-primary/10 dark:border-secondary/15">
            <p className="text-sm text-muted-light dark:text-muted-dark font-sans">
              No designs found matching your filters.
            </p>
            <button
              onClick={() => {
                setSearchParams({});
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-semibold text-primary dark:text-secondary underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Complete Design Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl bg-bg-light dark:bg-card-dark rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Column */}
              <div className="md:col-span-6 bg-black relative max-h-[40vh] md:max-h-none overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Highlights Column */}
              <div className="md:col-span-6 p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/15 px-2.5 py-1 rounded-full">
                      {selectedItem.category.replace('-', ' ')}
                    </span>
                    <h2 className="font-serif font-black text-2xl md:text-3xl text-primary dark:text-secondary mt-3">
                      {selectedItem.title}
                    </h2>
                  </div>

                  <div className="w-12 h-1 bg-secondary" />

                  <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 pt-2 text-xs">
                    <div className="flex border-b border-primary/5 dark:border-secondary/10 pb-2">
                      <span className="w-24 font-semibold text-primary dark:text-secondary">Designed for:</span>
                      <span className="text-muted-light dark:text-muted-dark">{selectedItem.client}</span>
                    </div>
                    <div className="flex border-b border-primary/5 dark:border-secondary/10 pb-2">
                      <span className="w-24 font-semibold text-primary dark:text-secondary">Stitch Style:</span>
                      <span className="text-muted-light dark:text-muted-dark">Aari / Tambour embroidery frame</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-3">
                  <a
                    href={getWhatsAppInquiryUrl(selectedItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" /> Inquiry via WhatsApp
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-3 rounded-full border border-primary/20 text-primary dark:border-secondary/30 dark:text-secondary hover:bg-black/5 dark:hover:bg-white/5 font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
