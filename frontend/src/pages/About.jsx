import { motion } from 'framer-motion';
import { ShieldCheck, Award, Heart, Leaf, Users, MapPin, Sparkles } from 'lucide-react';
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
                <span className="text-3xl font-serif font-black text-primary dark:text-secondary">2014</span>
                <span className="text-xs text-muted-light dark:text-muted-dark font-sans uppercase font-bold tracking-wide mt-1">
                  Est. Year
                </span>
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl p-6 bg-secondary/15 text-center flex flex-col justify-center">
                <span className="text-3xl font-serif font-black text-primary dark:text-secondary-dark">4000+</span>
                <span className="text-xs text-muted-light dark:text-muted-dark font-sans uppercase font-bold tracking-wide mt-1">
                  Custom Fits
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
              Honoring Traditional Handlooms & Tambour Needles
            </h2>
            <div className="w-12 h-1 bg-secondary" />
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
              Aari Aaradhya commenced as a cozy two-hand embroidery workspace in Hyderabad, born with the simple goal of safeguarding the dying heritage of heavy Maggam work. Unlike factory machines that spit cookie-cutter plastic duplicates, classic tambour needlework utilizes a slender hooked needle to pull loops of threads, beads, and gold wires individually.
            </p>
            <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
              Every curve, border, and peacock motif is calculated, meticulously sketched, and transferred hand-printed onto silks. Under the creative directorship of Aadhya Sharma, we grew from a small workshop into a premier bridal design studio, collaborating with master artisans representing several generation links of native zardosi families.
            </p>

            {/* Sub Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-primary/5 dark:border-secondary/15">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-secondary-light">Our Mission</h4>
                  <p className="text-xs text-muted-light dark:text-muted-dark mt-1 font-light leading-relaxed">
                    To keep authentic maggam work sustainable while empowering local craftswomen in the process.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Leaf className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-secondary-light">Conscious Materials</h4>
                  <p className="text-xs text-muted-light dark:text-muted-dark mt-1 font-light leading-relaxed">
                    Sourcing genuine silk threads, metallic zaris, and zero-corrode Japanese glass microbeads.
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
                  alt="Aadhya Sharma Portrait"
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
                  Master Artisan Profile
                </span>
                <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary">
                  {artisanInfo.name}
                </h2>
                <p className="text-sm font-semibold text-secondary-dark dark:text-secondary-light font-sans">
                  {artisanInfo.role}
                </p>
              </div>

              <div className="w-12 h-1 bg-primary dark:bg-secondary" />

              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
                {artisanInfo.bio}
              </p>

              <blockquote className="border-l-4 border-secondary pl-4 italic text-sm text-primary dark:text-secondary-light font-sans bg-primary/5 dark:bg-secondary/5 py-3 pr-4 rounded-r-xl">
                "An Indian bride's wedding blouse is not just another dress. It houses memories, families, traditions, and custom motifs resembling the promises of tomorrow."
              </blockquote>

              {/* Showcase highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans pt-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-primary dark:text-secondary-light">1,500+ Happy Brides</span>
                    <span className="text-xs text-muted-light dark:text-muted-dark">End-to-end setups fitted perfectly</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-primary dark:text-secondary-light">Signature Finish</span>
                    <span className="text-xs text-muted-light dark:text-muted-dark">{artisanInfo.signatureStyle}</span>
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
            Why Choose Aari Aaradhya?
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
