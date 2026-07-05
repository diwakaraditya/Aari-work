import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { services } from '../data/websiteData';

// Helper to resolve icon components dynamically
const DynamicIcon = ({ name, className }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  const getWhatsAppServiceUrl = (title) => {
    const phone = '919527505630';
    const text = encodeURIComponent(`Hello, I'm interested in your Aari Work designs. Specifically about: "${title}".`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <div className="py-12 bg-bg-light dark:bg-bg-dark transition-colors duration-300 min-h-screen">
      {/* 1. Header intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary flex items-center justify-center gap-1.5 mb-2">
          <Icons.Sparkles className="w-4 h-4 text-secondary" /> Professional Craftsmanship
        </span>
        <h1 className="font-serif font-black text-4xl md:text-6xl text-primary dark:text-secondary leading-tight">
          Boutique Embroidery Services
        </h1>
        <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        <p className="mt-4 max-w-xl mx-auto text-muted-light dark:text-muted-dark font-sans text-sm">
          Everything from initial sketches and design mapping down to the final fits. We offer custom bridal tailoring that matches perfect luxury parameters.
        </p>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((srv) => (
            <motion.div
              key={srv.id}
              variants={cardVariants}
              className="group bg-white dark:bg-card-dark rounded-3xl p-8 border border-primary/5 dark:border-secondary/15 shadow-sm hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-primary/10 dark:bg-secondary/15 text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-bg-dark transition-all duration-300">
                    <DynamicIcon name={srv.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-primary dark:text-white group-hover:text-secondary-dark dark:group-hover:text-secondary-light transition-colors">
                      {srv.title}
                    </h3>
                    <span className="text-[10px] text-muted-light dark:text-muted-dark font-sans font-semibold tracking-wider">
                      Amruta's Aari Creation
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed font-sans mb-6">
                  {srv.description}
                </p>

                {/* Inclusion bullet points */}
                <ul className="space-y-2 mb-8 text-xs font-sans text-muted-light dark:text-muted-dark font-light">
                  {srv.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icons.Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions & Price */}
              <div className="pt-6 border-t border-primary/5 dark:border-secondary/10 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold text-muted-light">Estimation Range:</span>
                  <span className="font-serif font-bold text-primary dark:text-secondary-light text-md">
                    {srv.price}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={getWhatsAppServiceUrl(srv.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-[10px] tracking-wider uppercase text-center transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                  <Link
                    to="/contact"
                    className="py-2.5 rounded-full border border-primary/20 text-primary dark:border-secondary/30 dark:text-secondary hover:bg-black/5 dark:hover:bg-white/5 font-semibold text-[10px] tracking-wider uppercase text-center transition-colors"
                  >
                    Fill Inquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Sizing and measurement guide preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 bg-white dark:bg-card-dark rounded-3xl p-8 lg:p-12 border border-primary/5 dark:border-secondary/15 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary-dark flex-shrink-0">
          <Icons.Scissors className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif font-bold text-xl text-primary dark:text-secondary">
            Note on Out-of-City Custom Orders
          </h3>
          <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
            Don't live in Pune? No problem! We offer virtual design consultations via video calls and take measurement confirmation sheets online. We send embroidery swatches for sample confirmation and ship finished bridal blouses with secure tracking.
          </p>
          <Link
            to="/contact"
            className="text-xs font-semibold text-primary dark:text-secondary flex items-center gap-1 mt-2 hover:underline"
          >
            Learn How It Works <Icons.ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
