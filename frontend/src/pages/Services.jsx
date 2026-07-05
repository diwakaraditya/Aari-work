import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles, Gem, Crown, Diamond, Circle, Star,
  CircleDot, Scissors, Shirt, Grid3X3, Layers,
  Flower2, Check, ArrowRight, MessageSquare, Images
} from 'lucide-react';
import expertiseCollage from '../assets/AllTypesOfWorkImage2.png';

// ─── Service Data ─────────────────────────────────────────────────────────────
const services = [
  {
    id: 'aari-work',
    icon: Sparkles,
    title: 'Aari Work',
    categorySlug: 'bridal-blouses',
    description:
      'The ancient tambour hook technique mastered over generations — delivering dense, luminous threadwork that transforms every garment into a wearable heirloom.',
    features: [
      'Fine silk & zari thread combinations',
      'Heavy bridal blouse & sleeve work',
      'Intricate floral & peacock motifs',
      'Custom density as per fabric weight',
      'Zero thread pull on garment back',
    ],
  },
  {
    id: 'maggam-work',
    icon: Gem,
    title: 'Maggam Work',
    categorySlug: 'bridal-blouses',
    description:
      'Opulent frame embroidery fusing metallic elements and gemstone inserts — the gold standard for South Indian bridal embellishment.',
    features: [
      'Kundan, mirror & stone placements',
      'Zardosi & cut-dana metallic work',
      'Neckline, border & pallu designs',
      'Custom motif sketching included',
      'Suitable for silk & dupion fabrics',
    ],
  },
  {
    id: 'zardosi-work',
    icon: Crown,
    title: 'Zardosi Work',
    categorySlug: 'bridal-blouses',
    description:
      'Regal Mughal-heritage embroidery worked in heavy metallic gold and silver threads — the hallmark of ceremonial grandeur.',
    features: [
      'Pure gold & silver bullion threads',
      'Relief raised embroidery technique',
      'Elephant, paisley & vine motifs',
      'Backed with felt for structure',
      'Ideal for lehengas & bridal blouses',
    ],
  },
  {
    id: 'kundan-work',
    icon: Diamond,
    title: 'Kundan Work',
    categorySlug: 'bridal-blouses',
    description:
      'The royal Rajasthani art of setting precious & semi-precious stones in pure gold foil — bringing timeless gemstone brilliance to your ensemble.',
    features: [
      'Flat-set glass kundan stones',
      'Gold foil setting technique',
      'Neckline & hem detailing',
      'Custom stone color selection',
      'Combines with Maggam & Zardosi',
    ],
  },
  {
    id: 'stone-work',
    icon: Circle,
    title: 'Stone Work',
    categorySlug: 'bridal-blouses',
    description:
      'Precision-set rhinestones, Swarovski crystals, and semi-precious stones expertly placed to add brilliant sparkle and dimension to any outfit.',
    features: [
      'Crystal, rhinestone & flat-back gems',
      'All-over scatter or border placement',
      'Permanent heat-set adhesion',
      'Suitable for heavy & sheer fabrics',
      'Pairs beautifully with bead work',
    ],
  },
  {
    id: 'sequence-work',
    icon: Star,
    title: 'Sequence Work',
    categorySlug: 'wedding-sarees',
    description:
      'Thousands of hand-stitched sequins layered to create breathtaking shimmers — delivering modern festive brilliance with classical discipline.',
    features: [
      'Flat, cupped & holographic sequins',
      'Dense full-coverage & lattice work',
      'Ombre color-gradient sequin fills',
      'Works on georgette, net & silk',
      'Lightweight despite heavy coverage',
    ],
  },
  {
    id: 'bead-work',
    icon: CircleDot,
    title: 'Bead Work',
    categorySlug: 'bridal-blouses',
    description:
      'Meticulously strung seed beads, bugle beads, and pearl chains woven into refined patterns — adding texture and luminosity to bridal wear.',
    features: [
      'Japanese seed & bugle beads',
      'Freshwater pearl & crystal drops',
      'Tambour beading on frame',
      'Border, motif & all-over fill work',
      'Individually knotted for security',
    ],
  },
  {
    id: 'thread-work',
    icon: Scissors,
    title: 'Thread Work',
    categorySlug: 'wedding-sarees',
    description:
      'Vibrant hand-embroidery in pure silk, cotton, and metallic threads — bringing color, texture, and narrative to every stitch.',
    features: [
      'Pure silk & mercerized cotton threads',
      'Satin stitch, chain stitch & filling',
      'Phulkari, kantha & regional styles',
      'Custom color thread matching',
      'Fade-resistant dye-lot threads',
    ],
  },
  {
    id: 'velvet-work',
    icon: Shirt,
    title: 'Velvet Work',
    categorySlug: 'custom-designs',
    description:
      'Luxurious embroidery directly on velvet fabric — a rare technique requiring exceptional needle precision to preserve the pile and achieve crisp motifs.',
    features: [
      'Heavy & micro-velvet compatible',
      'Silk thread over velvet pile',
      'Zardosi & gold thread combinations',
      'Appliqué & cutwork on velvet',
      'Rich texture for winter bridal wear',
    ],
  },
  {
    id: 'net-work',
    icon: Grid3X3,
    title: 'Net Work',
    categorySlug: 'wedding-sarees',
    description:
      'Delicate, gossamer embroidery on net and organza — creating ethereal, floaty designs ideal for dupattas, veils, and sheer blouse overlays.',
    features: [
      'Tambour & hand needle on net',
      'Sequin, bead & thread on organza',
      'Scalloped & picot edge finishing',
      'Bridal veil & dupatta specialization',
      'Reinforced edges to prevent tearing',
    ],
  },
  {
    id: 'silk-fabric-work',
    icon: Layers,
    title: 'Silk Fabric Work',
    categorySlug: 'wedding-sarees',
    description:
      'Master-level embroidery on pure Kanjivaram, Banarasi, and raw silk — enhancing the natural lustre of silk with thoughtfully placed handcraft.',
    features: [
      'Pure silk blouse & saree embroidery',
      'Pallu extension & border updates',
      'Buttas, all-over & scalloped work',
      'Pre-shrunk & tension-tested silk',
      'Colour-matched thread selection',
    ],
  },
  {
    id: 'jewellery-work',
    icon: Flower2,
    title: 'Jewellery Work',
    categorySlug: 'earcuff',
    description:
      'Handcrafted Aari-embroidered bridal jewellery — naths, earcuffs, choker sets, hair accessories, and complete bridal sets crafted in traditional thread art.',
    features: [
      'Nath (nose ring) in thread & pearl',
      'Aari earcuffs — light & intricate',
      'Choker sets with matching earrings',
      'Hair pins, jhoomar & passa work',
      'Complete bridal jewellery packages',
    ],
  },
];

// ─── Animations ───────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Services() {
  const navigate = useNavigate();

  const getWhatsAppUrl = (title) => {
    const phone = '919527505630';
    const text = encodeURIComponent(
      `Hello! I'm interested in your "${title}" service at Amruta's Aari Creation. Could you please share more details?`
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  const handleViewGallery = (categorySlug) => {
    if (categorySlug) {
      navigate(`/gallery?category=${categorySlug}`);
    } else {
      navigate('/gallery');
    }
  };

  return (
    <div className="py-12 bg-bg-light dark:bg-bg-dark transition-colors duration-300 min-h-screen">

      {/* ── Hero Header ─────────────────────────────────────────────────────── */}


      {/* ── Our Expertise Showcase ──────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        {/* Section heading */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            Our Expertise
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
          </span>
          <h2 className="font-serif font-black text-3xl md:text-5xl text-primary dark:text-secondary leading-tight">
            Explore Our Complete Range of Embroidery Art
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 max-w-2xl mx-auto text-muted-light dark:text-muted-dark font-sans text-sm leading-relaxed">
            From traditional Aari and Maggam embroidery to bridal jewellery, every creation is
            handcrafted with precision, creativity, and timeless elegance.
          </p>
        </div>

        {/* Collage image container */}
        <div className="group relative rounded-3xl overflow-hidden border border-secondary/30 shadow-lg hover:shadow-2xl transition-shadow duration-500">
          {/* Thin gold shimmer top border */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent z-10" />
          <img
            src={expertiseCollage}
            alt="Complete range of embroidery techniques — Aari, Maggam, Zardosi, Bead Work, Thread Work, Jewellery and more by Amruta's Aari Creation"
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Bottom shimmer */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent z-10" />
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary flex items-center justify-center gap-1.5 mb-3">
          <Sparkles className="w-4 h-4 text-secondary" />
          Luxury Handcraft Atelier
          <Sparkles className="w-4 h-4 text-secondary" />
        </span>
        <h1 className="font-serif font-black text-4xl md:text-6xl text-primary dark:text-secondary leading-tight">
          Our Embroidery Services
        </h1>
        <div className="w-20 h-1 bg-secondary mx-auto mt-5 rounded-full" />
        <p className="mt-5 max-w-2xl mx-auto text-muted-light dark:text-muted-dark font-sans text-sm leading-relaxed">
          Twelve distinct handcraft disciplines — each mastered across years of bridal artistry.
          Every creation is bespoke, every stitch intentional, every piece uniquely yours.
        </p>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                variants={cardVariants}
                className="group relative bg-white dark:bg-card-dark rounded-3xl border border-primary/8 dark:border-secondary/15 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col overflow-hidden"
              >
                {/* Decorative top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-secondary/40 via-secondary to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3.5 rounded-2xl bg-primary/8 dark:bg-secondary/12 text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-bg-dark transition-all duration-300 flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-serif font-bold text-xl text-primary dark:text-white leading-snug group-hover:text-secondary-dark dark:group-hover:text-secondary-light transition-colors duration-300">
                        {srv.title}
                      </h3>
                      <span className="text-[9px] text-secondary font-sans font-bold tracking-[0.15em] uppercase mt-0.5 block opacity-70">
                        Amruta's Aari Creation
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-10 h-px bg-secondary/40 mb-5" />

                  {/* Description */}
                  <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed font-sans mb-6 flex-shrink-0">
                    {srv.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-muted-light dark:text-muted-dark">
                        <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="pt-5 border-t border-primary/5 dark:border-secondary/10 grid grid-cols-2 gap-3 mt-auto">
                    {/* View Gallery */}
                    <button
                      onClick={() => handleViewGallery(srv.categorySlug)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-primary/8 dark:bg-secondary/12 text-primary dark:text-secondary hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-bg-dark font-semibold text-[10px] tracking-wider uppercase transition-all duration-300 focus:outline-none"
                    >
                      <Images className="w-3.5 h-3.5" />
                      View Gallery
                    </button>

                    {/* WhatsApp Enquiry */}
                    <a
                      href={getWhatsAppUrl(srv.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#25D366] text-white hover:bg-[#1da851] font-semibold text-[10px] tracking-wider uppercase transition-colors duration-300 focus:outline-none"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── Out-of-City Banner ───────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white dark:bg-card-dark rounded-3xl p-8 lg:p-12 border border-primary/5 dark:border-secondary/15 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
            <Scissors className="w-8 h-8" />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-serif font-bold text-xl text-primary dark:text-secondary">
              Note on Out-of-City Custom Orders
            </h3>
            <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed font-sans font-light">
              Don't live in Pune? No problem! We offer virtual design consultations via video calls and take measurement confirmation sheets online.
              We send embroidery swatches for sample confirmation and ship finished pieces with secure tracking across India.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary dark:text-secondary hover:underline mt-1"
            >
              Learn How It Works <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

