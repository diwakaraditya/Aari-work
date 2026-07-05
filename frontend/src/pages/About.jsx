import { motion } from 'framer-motion';
import { ShieldCheck, Award, Heart, Leaf, Users, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import { artisanInfo } from '../data/websiteData';

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function About() {
  return (
    <div className="py-12 bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      {/* 1. Header Banner */}
      <section className="relative bg-primary dark:bg-card-dark text-white py-20 px-4 mb-20 rounded-2xl overflow-hidden max-w-7xl mx-auto shadow-md">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80"
            alt="Handcraft Details Banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark via-primary/80 to-transparent" />
        </div>

        <div className="relative text-center max-w-3xl mx-auto space-y-4">
          <span className="text-secondary font-sans uppercase text-xs tracking-widest font-bold">
            Fine Tambour Embroidery Studio
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-white leading-tight">
            Our Heritage & Artistry
          </h1>
          <p className="text-sm font-sans tracking-wide text-gray-200 mt-2 font-light">
            Founded with a passion to design luxurious embroidery that resonates with generations.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Craft Description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Visual Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-secondary/25 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
                  alt="Embroidery frame details"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl p-6 bg-primary/5 dark:bg-secondary/5 text-center flex flex-col justify-center">
                <span className="text-2xl font-serif font-black text-primary dark:text-secondary">Hadapsar</span>
                <span className="text-xs text-muted-light dark:text-muted-dark font-sans uppercase font-bold tracking-wide mt-1">
                  Pune, Maharashtra
                </span>
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl p-6 bg-secondary/15 text-center flex flex-col justify-center">
                <span className="text-2xl font-serif font-black text-primary dark:text-secondary-dark">Bridal</span>
                <span className="text-xs text-muted-light dark:text-muted-dark font-sans uppercase font-bold tracking-wide mt-1">
                  Specialization
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-secondary/25 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=600&q=80"
                  alt="Bead work stitching"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary">
              The Genesis
            </span>
            <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary leading-tight">
              Honoring Traditional Handlooms &amp; Tambour Needles
            </h2>
            <div className="w-12 h-1 bg-secondary" />
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
              Amruta's Aari Creation is a boutique specializing in handcrafted Aari Work, Maggam Work, bridal blouses, designer sleeves, saree embroidery, customized embroidery, and elegant traditional craftsmanship — located in the heart of Hadapsar, Pune.
            </p>
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
              Founded with a passion for preserving the heritage of fine tambour needlework, every design is meticulously handcrafted — from the initial sketch to the final stitch. We believe that every bride deserves embroidery that reflects her story, her culture, and her individuality.
            </p>

            {/* Sub Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-primary/5 dark:border-secondary/15">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-secondary-light">Our Mission</h4>
                  <p className="text-xs text-muted-light dark:text-muted-dark mt-1 font-light leading-relaxed">
                    Delivering personalized, quality embroidery that brings your bridal vision to life with precision and care.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Leaf className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-secondary-light">Conscious Materials</h4>
                  <p className="text-xs text-muted-light dark:text-muted-dark mt-1 font-light leading-relaxed">
                    Sourcing genuine silk threads, metallic zaris, and premium glass microbeads for lasting beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Meet the Master Artisan */}
      <section className="bg-white dark:bg-card-dark transition-colors duration-300 py-20 mb-24 border-y border-primary/5 dark:border-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Visual Column */}
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-secondary shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
                  alt="Dhanashree Pawar – Founder of Amruta's Aari Creation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-secondary/80 text-bg-dark rounded-full p-2.5 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary">
                  Master Artisan &amp; Founder
                </span>
                <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary">
                  Dhanashree Pawar
                </h2>
                <p className="text-sm font-semibold text-secondary-dark dark:text-secondary-light font-sans">
                  Founder &amp; Lead Artisan, Amruta's Aari Creation
                </p>
              </div>

              <div className="w-12 h-1 bg-primary dark:bg-secondary" />

              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
                Dhanashree Pawar is the heart behind Amruta's Aari Creation. With years of dedication to the art of Aari Work and Maggam embroidery, she has crafted hundreds of personalized bridal blouses, designer sleeves, and saree embroideries — each one a reflection of her meticulous craftsmanship and genuine passion for traditional Indian textile arts.
              </p>

              <blockquote className="border-l-4 border-secondary pl-4 italic text-sm text-primary dark:text-secondary-light font-sans bg-primary/5 dark:bg-secondary/5 py-3 pr-4 rounded-r-xl">
                "Every stitch is a promise — of quality, of beauty, and of a bride's most precious moment made perfect."
              </blockquote>

              {/* Showcase highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans pt-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-primary dark:text-secondary-light">Bridal Specialists</span>
                    <span className="text-xs text-muted-light dark:text-muted-dark">Dedicated to crafting your perfect bridal look</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-primary dark:text-secondary-light">Customer Satisfaction</span>
                    <span className="text-xs text-muted-light dark:text-muted-dark">Personalized designs crafted with love and care</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Us (Grid features) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary">
            Process Excellence
          </span>
          <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary mt-1">
            Why Choose Amruta's Aari Creation?
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Tidy Node Backs",
              desc: "We stitch smooth backing lining overlays. Absolutely zero double-nodes or messy gold thread loops showing inside to scrape your skin."
            },
            {
              title: "Original Sketches Only",
              desc: "Crafting original bridal patterns. No copy-pasting of templates. You coordinate with the artisan to draw your motifs from scratch."
            },
            {
              title: "Wash-Tested Silks",
              desc: "We source and pre-shrink pure, heavy-weave raw silks to eliminate puckering, shrinking or bubble layers upon subsequent dry cleans."
            },
            {
              title: "Interactive Fitting Rounds",
              desc: "Includes post-embroidery measurement validation checks to adjust neck width margins prior to the final stitching lock."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-primary/5 dark:border-secondary/15 shadow-sm hover:translate-y-[-4px] transition-transform duration-300"
            >
              <span className="font-serif font-black text-4xl text-secondary/35 mb-4 block">
                0{idx + 1}
              </span>
              <h3 className="font-serif font-bold text-lg text-primary dark:text-secondary mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
