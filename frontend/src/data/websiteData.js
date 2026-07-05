// ─── Instagram Gallery Imports ────────────────────────────────────────────────
import maggamWork1 from '../assets/Maggamworkimage1.jpeg';
import earcuff1    from '../assets/EarcuffImage1.jpeg';
import sareeEmb1   from '../assets/SareeEmbroideryimage1.jpeg';
import sareeEmb2   from '../assets/SareeEmbroideryimage2.jpeg';
import threadWork1 from '../assets/Threadworkimage1.jpeg';
import maggamWork3 from '../assets/Maggamworkimage3.jpeg';

// ─── Bridal Blouses Imports ───────────────────────────────────────────────────
import bridalBlouse1 from '../assets/Maggamworkimage1.jpeg';
import bridalBlouse2 from '../assets/Maggamworkimage2.jpeg';
import bridalBlouse3 from '../assets/Maggamworkimage3.jpeg';
import bridalBlouse4 from '../assets/MaggamworkImage4.jpeg';

// ─── Wedding Sarees Imports ───────────────────────────────────────────────────
import weddingSaree1 from '../assets/SareeEmbroideryimage1.jpeg';
import weddingSaree2 from '../assets/SareeEmbroideryimage2.jpeg';
import weddingSaree3 from '../assets/SareeEmbroideryimage3.jpeg';
import weddingSaree4 from '../assets/SareeEmbroideryimage4.jpeg';
import weddingSaree5 from '../assets/SareeEmbroideryimage5.jpeg';

// ─── Earcuff Imports ──────────────────────────────────────────────────────────
import earcuffImg1 from '../assets/EarcuffImage1.jpeg';
import earcuffImg2 from '../assets/EarcuffImage2.jpeg';
import earcuffImg3 from '../assets/EarcuffImage5.jpeg';
import earcuffImg4 from '../assets/EarcuffImage3.jpeg';
import earcuffImg5 from '../assets/EarcuffImage7.jpeg';

// ─── Chokerset Imports ────────────────────────────────────────────────────────
import chokerSet1 from '../assets/Chokersetimage1.jpeg';
import chokerSet2 from '../assets/Chokersetimage2.jpeg';
import chokerSet3 from '../assets/Chokersetimage3.jpeg';
import chokerSet4 from '../assets/Chokersetimage4.jpeg';
import chokerSet5 from '../assets/Dhanashreeimage2.jpeg';

// ─── Nath Imports ─────────────────────────────────────────────────────────────
import nath1 from '../assets/NathImage1.jpeg';
import nath2 from '../assets/NathImage2.jpeg';
import nath3 from '../assets/NathImage3.jpeg';

// ─── Custom Designs Imports ───────────────────────────────────────────────────
import customDesign1 from '../assets/Dhanashreeimage3.jpeg';
import customDesign2 from '../assets/Dhanashreeimage1.jpeg';

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────
export const categories = [
  {
    id: 'bridal-blouses',
    name: 'Bridal Blouses',
    slug: 'bridal-blouses',
    description: 'Detailed heavy Aari & Maggam work designed to make your special day absolute perfection.',
    image: bridalBlouse1,
    count: 4
  },
  {
    id: 'wedding-sarees',
    name: 'Wedding Sarees',
    slug: 'wedding-sarees',
    description: 'Bespoke scalloped borders, buttis, and heavy pallu craftsmanship on pure silk sarees.',
    image: weddingSaree1,
    count: 5
  },
  {
    id: 'earcuff',
    name: 'Earcuff',
    slug: 'earcuff',
    description: 'Handcrafted Aari work earcuffs — delicate, lightweight, and perfectly detailed for every occasion.',
    image: earcuffImg1,
    count: 5
  },
  {
    id: 'chokerset',
    name: 'Chokerset',
    slug: 'chokerset',
    description: 'Elegant Aari embroidered choker sets crafted with fine threads and traditional motifs.',
    image: chokerSet1,
    count: 5
  },
  {
    id: 'nath',
    name: 'Nath',
    slug: 'nath',
    description: 'Traditional nose rings (nath) beautifully adorned with intricate Aari threadwork and floral designs.',
    image: nath1,
    count: 3
  },
  {
    id: 'custom-designs',
    name: 'Custom Designs',
    slug: 'custom-designs',
    description: 'Personalized motifs, sketches translated into needlework, and customized beadwork compositions.',
    image: customDesign1,
    count: 2
  }
];

export const services = [
  {
    id: 'bridal-aari',
    title: 'Bridal Aari Work',
    icon: 'Sparkles',
    description: 'Masterfully stitched tambour embroidery utilizing zari, golden beads, and premium silk threads designed for traditional brides.',
    details: ['Pure silk blouses only', 'High density beadwork', 'Custom design consultation included', 'Stitching coordination support'],
    price: 'Starting from ₹7,500'
  },
  {
    id: 'maggam-work',
    title: 'Maggam Work',
    icon: 'Maximize',
    description: 'Intricate and heavy metallic embellishments, custom cutwork, mirror work, and zardosi detailing done on traditional frames.',
    details: ['Heavy zardosi motifs', 'Kundan & stone placement', 'Neckline & sleeve borders customization', 'Urgent delivery option (5 days)'],
    price: 'Starting from ₹5,500'
  },
  {
    id: 'custom-stitching',
    title: 'Custom Blouse Stitching',
    icon: 'Scissors',
    description: 'Perfect-fit tailoring matching your body contours, detailed with matching piping, designer Dori, and custom back cuts.',
    details: ['Measurement validation (in-person/online)', 'Can-can pads support option', 'Inner cotton lining pre-washed', 'Invisible zippers implementation'],
    price: 'Starting from ₹2,000'
  },
  {
    id: 'saree-embroidery',
    title: 'Saree Embroidery',
    icon: 'Layers',
    description: 'Elegant border updates, handcrafted all-over buttas, and bespoke pallu layouts that elevate standard sarees into designer items.',
    details: ['Scalloped edge finishing', 'Stone and pearl drop fringes', 'Perfect border alignment', 'Lightweight silk-thread border variants'],
    price: 'Starting from ₹9,000'
  },
  {
    id: 'bridal-collection',
    title: 'Bridal Collection Package',
    icon: 'Heart',
    description: 'A comprehensive outfit creation combining heavy bridal blouse embroidery, saree border extensions, and matching veil/dupatta stitching.',
    details: ['Blouse + Saree Pallu + Veil', 'Custom color dyeing of silks', 'Complimentary master measurement trial', 'Luxurious heirloom packaging box'],
    price: 'Starting from ₹18,000'
  },
  {
    id: 'boutique-consultation',
    title: 'Boutique Consultation',
    icon: 'UserCheck',
    description: 'Personal conversation with our lead artisan to conceptualize colors, motifs, layout options, and sketch a preview before production.',
    details: ['Color palette matching', 'Original motif sketching', 'Budget optimization suggestions', 'Fabric selection guidance'],
    price: '₹500 (Adjustable in order)'
  }
];

// ── Per-Category Gallery Arrays ───────────────────────────────────────────────

export const bridalBlousesGallery = [
  {
    id: 'bb-1',
    title: 'Golden Maggam Work Blouse',
    category: 'bridal-blouses',
    categoryLabel: 'Bridal Blouses',
    image: bridalBlouse1,
    description: 'Rich Maggam work blouse adorned with antique gold kundan motifs, fine zardosi outlines, and intricate bead fillings — handcrafted for the perfect bridal look.',
    client: 'Priyanka S., Pune',
    keywords: ['maggam', 'bridal', 'gold', 'kundan', 'zardosi', 'blouse']
  },
  {
    id: 'bb-2',
    title: 'Heavy Zardosi Sleeve Blouse',
    category: 'bridal-blouses',
    categoryLabel: 'Bridal Blouses',
    image: bridalBlouse2,
    description: 'Heavily embellished bridal blouse sleeve with zardosi detailing, mirror work, and hand-rolled gold thread — a timeless traditional masterpiece.',
    client: 'Deepika G., Hyderabad',
    keywords: ['zardosi', 'sleeve', 'bridal', 'mirror work', 'blouse', 'gold thread']
  },
  {
    id: 'bb-3',
    title: 'Traditional Peacock Neckline',
    category: 'bridal-blouses',
    categoryLabel: 'Bridal Blouses',
    image: bridalBlouse3,
    description: 'Peacock motif neckline embroidered with authentic silk threads, zari accents, and micro bead work for an elegant bridal finish.',
    client: 'Anjali R., Mumbai',
    keywords: ['peacock', 'neckline', 'bridal', 'silk', 'zari', 'blouse']
  },
  {
    id: 'bb-4',
    title: 'Royal Heritage Bridal Blouse',
    category: 'bridal-blouses',
    categoryLabel: 'Bridal Blouses',
    image: bridalBlouse4,
    description: 'A regal bridal blouse featuring heritage floral and geometric motifs, richly worked in Maggam style with layered metallic embellishments.',
    client: 'Kavitha D., Vizag',
    keywords: ['royal', 'heritage', 'floral', 'geometric', 'maggam', 'bridal', 'blouse']
  }
];

export const weddingSareesGallery = [
  {
    id: 'ws-1',
    title: 'Scalloped Silk Saree Border',
    category: 'wedding-sarees',
    categoryLabel: 'Wedding Sarees',
    image: weddingSaree1,
    description: 'Gold-copper thread meshwork with pearl chain inserts and fine cutwork embroidery along the drape border of a pure silk wedding saree.',
    client: 'Ananya R., Bangalore',
    keywords: ['saree', 'border', 'scalloped', 'silk', 'pearl', 'gold', 'wedding']
  },
  {
    id: 'ws-2',
    title: 'Floral Pallu Wedding Saree',
    category: 'wedding-sarees',
    categoryLabel: 'Wedding Sarees',
    image: weddingSaree2,
    description: 'Bespoke floral pallu with layered buttis across the body and intricate handcrafted border — a show-stopper bridal saree.',
    client: 'Nirupama P., Kochi',
    keywords: ['saree', 'pallu', 'floral', 'butti', 'bridal', 'wedding']
  },
  {
    id: 'ws-3',
    title: 'Pearl Symphony Saree Pallu',
    category: 'wedding-sarees',
    categoryLabel: 'Wedding Sarees',
    image: weddingSaree3,
    description: 'Thousands of pearls hand-woven into matching mesh patterns, creating a mesmerizing drape tail that glows under every light.',
    client: 'Meera K., Chennai',
    keywords: ['pearl', 'saree', 'pallu', 'silk', 'wedding', 'mesh']
  },
  {
    id: 'ws-4',
    title: 'Heritage Zari Saree Work',
    category: 'wedding-sarees',
    categoryLabel: 'Wedding Sarees',
    image: weddingSaree4,
    description: 'Traditional zari and silk thread embroidery on a pure Kanjivaram saree, capturing the essence of South Indian bridal heritage.',
    client: 'Suhasini M., Vijayawada',
    keywords: ['zari', 'kanjivaram', 'saree', 'heritage', 'silk', 'south indian', 'wedding']
  },
  {
    id: 'ws-5',
    title: 'Designer Silk Border Saree',
    category: 'wedding-sarees',
    categoryLabel: 'Wedding Sarees',
    image: weddingSaree5,
    description: 'Custom designer border on a silk saree with stone drop fringes, scalloped edge finishing, and lightweight thread border variants.',
    client: 'Rithika V., Mumbai',
    keywords: ['designer', 'border', 'saree', 'silk', 'stone', 'fringes', 'scalloped', 'wedding']
  }
];

export const earcuffGallery = [
  {
    id: 'ec-1',
    title: 'Aari Floral Earcuff',
    category: 'earcuff',
    categoryLabel: 'Earcuff',
    image: earcuffImg1,
    description: 'Delicate Aari work floral earcuff crafted with fine silk threads — lightweight, elegant, and perfect for bridal and festive occasions.',
    client: 'Priya M., Pune',
    keywords: ['earcuff', 'floral', 'aari', 'silk', 'bridal', 'festive', 'jewelry']
  },
  {
    id: 'ec-2',
    title: 'Traditional Beaded Earcuff',
    category: 'earcuff',
    categoryLabel: 'Earcuff',
    image: earcuffImg2,
    description: 'Handcrafted earcuff with traditional motifs and micro bead embellishments — a perfect complement to any ethnic outfit.',
    client: 'Sneha R., Nashik',
    keywords: ['earcuff', 'beaded', 'traditional', 'ethnic', 'jewelry', 'aari']
  },
  {
    id: 'ec-3',
    title: 'Gold Thread Earcuff',
    category: 'earcuff',
    categoryLabel: 'Earcuff',
    image: earcuffImg3,
    description: 'Stunning gold-thread Aari earcuff with peacock and floral motifs, designed to add a regal touch to bridal jewellery.',
    client: 'Tanvi S., Kolhapur',
    keywords: ['earcuff', 'gold thread', 'peacock', 'floral', 'bridal', 'regal', 'jewelry']
  },
  {
    id: 'ec-4',
    title: 'Pearl Drop Earcuff',
    category: 'earcuff',
    categoryLabel: 'Earcuff',
    image: earcuffImg4,
    description: 'Elegant earcuff featuring pearl drops and fine Aari threadwork, inspired by traditional South Indian jewellery design.',
    client: 'Divya K., Pune',
    keywords: ['earcuff', 'pearl', 'drop', 'south indian', 'aari', 'jewelry', 'traditional']
  },
  {
    id: 'ec-5',
    title: 'Kundan Aari Earcuff',
    category: 'earcuff',
    categoryLabel: 'Earcuff',
    image: earcuffImg5,
    description: 'Rich kundan-set Aari earcuff with intricate needlework and stone embellishments — a luxurious accessory for weddings and receptions.',
    client: 'Pooja D., Solapur',
    keywords: ['earcuff', 'kundan', 'stone', 'wedding', 'reception', 'aari', 'luxury', 'jewelry']
  }
];

export const chokersetGallery = [
  {
    id: 'cs-1',
    title: 'Bridal Aari Choker Set',
    category: 'chokerset',
    categoryLabel: 'Chokerset',
    image: chokerSet1,
    description: 'Exquisite Aari work bridal choker set with matching earrings, crafted in gold and red silk threads for a classic traditional look.',
    client: 'Anitha P., Pune',
    keywords: ['choker', 'chokerset', 'bridal', 'aari', 'gold', 'silk', 'traditional', 'jewelry']
  },
  {
    id: 'cs-2',
    title: 'Floral Choker Necklace',
    category: 'chokerset',
    categoryLabel: 'Chokerset',
    image: chokerSet2,
    description: 'Delicate floral choker necklace handcrafted with intricate Aari embroidery and tiny beads, ideal for festive and bridal wear.',
    client: 'Madhuri S., Nashik',
    keywords: ['choker', 'floral', 'necklace', 'aari', 'beads', 'festive', 'bridal', 'jewelry']
  },
  {
    id: 'cs-3',
    title: 'Pearl Choker Set',
    category: 'chokerset',
    categoryLabel: 'Chokerset',
    image: chokerSet3,
    description: 'Traditional pearl-adorned choker set featuring Aari threadwork and pearl drops — a timeless piece for brides and bridesmaids.',
    client: 'Lata K., Mumbai',
    keywords: ['choker', 'pearl', 'set', 'aari', 'threadwork', 'bridal', 'bridesmaid', 'jewelry']
  },
  {
    id: 'cs-4',
    title: 'Heritage Temple Choker',
    category: 'chokerset',
    categoryLabel: 'Chokerset',
    image: chokerSet4,
    description: 'Temple-inspired choker set with rich gold-thread Aari work, stone setting, and traditional motifs for grand occasions.',
    client: 'Rekha M., Kolhapur',
    keywords: ['choker', 'temple', 'heritage', 'gold thread', 'stone', 'traditional', 'aari', 'jewelry']
  },
  {
    id: 'cs-5',
    title: 'Designer Choker with Pendant',
    category: 'chokerset',
    categoryLabel: 'Chokerset',
    image: chokerSet5,
    description: 'Contemporary designer choker with an Aari-embroidered pendant and matching earrings, blending tradition with modern style.',
    client: 'Dhanashree P., Pune',
    keywords: ['choker', 'designer', 'pendant', 'contemporary', 'aari', 'modern', 'jewelry']
  }
];

export const nathGallery = [
  {
    id: 'nth-1',
    title: 'Maharashtrian Bridal Nath',
    category: 'nath',
    categoryLabel: 'Nath',
    image: nath1,
    description: 'Traditional Maharashtrian bridal nath with Aari threadwork detailing and authentic pearl and floral embellishments — a cultural treasure.',
    client: 'Sonali D., Pune',
    keywords: ['nath', 'maharashtrian', 'bridal', 'pearl', 'floral', 'traditional', 'jewelry']
  },
  {
    id: 'nth-2',
    title: 'Gold Bead Nath',
    category: 'nath',
    categoryLabel: 'Nath',
    image: nath2,
    description: 'Elegant nose ring crafted with gold-toned beads and fine Aari embroidery, designed for both traditional and contemporary bridal looks.',
    client: 'Varsha T., Satara',
    keywords: ['nath', 'gold', 'bead', 'nose ring', 'bridal', 'aari', 'jewelry']
  },
  {
    id: 'nth-3',
    title: 'Stone-Set Festive Nath',
    category: 'nath',
    categoryLabel: 'Nath',
    image: nath3,
    description: 'Festive nath adorned with precious stones and hand-stitched Aari motifs — a showpiece for weddings, receptions, and special celebrations.',
    client: 'Prachi B., Nagpur',
    keywords: ['nath', 'stone', 'festive', 'wedding', 'reception', 'aari', 'jewelry']
  }
];

export const customDesignsGallery = [
  {
    id: 'cd-1',
    title: 'Bespoke Portrait Blouse Design',
    category: 'custom-designs',
    categoryLabel: 'Custom Designs',
    image: customDesign1,
    description: 'A custom portrait-inspired hand-embroidered motif, personally sketched and brought to life with needle and thread for a one-of-a-kind creation.',
    client: 'Dhanashree P., Pune',
    keywords: ['custom', 'portrait', 'bespoke', 'sketch', 'hand embroidered', 'aari', 'unique']
  },
  {
    id: 'cd-2',
    title: 'Custom Radha-Krishna Neckline',
    category: 'custom-designs',
    categoryLabel: 'Custom Designs',
    image: customDesign2,
    description: 'An extraordinary narrative masterpiece hand-embroidered on crimson silk, showcasing a divine motif composed by the client and crafted with devotion.',
    client: 'Dhanashree P., Pune',
    keywords: ['custom', 'radha krishna', 'neckline', 'crimson', 'silk', 'narrative', 'devotion', 'aari']
  }
];

// ── Merged All Collection ─────────────────────────────────────────────────────
export const galleryItems = [
  ...bridalBlousesGallery,
  ...weddingSareesGallery,
  ...earcuffGallery,
  ...chokersetGallery,
  ...nathGallery,
  ...customDesignsGallery
];

export const reviews = [
  {
    id: 1,
    name: 'Sravanthi Reddy',
    role: 'Bride from June 2026',
    avatar: 'SR',
    rating: 5,
    text: 'Amruta\'s Aari Creation crafted my dream wedding blouse. The peacock zardosi work was stunning, and the fitting was flawless. Everyone at the wedding kept asking where I got it done! Worth every single rupee.'
  },
  {
    id: 2,
    name: 'Meenakshi Iyer',
    role: 'Mother of the Bride',
    avatar: 'MI',
    rating: 5,
    text: 'The artisan team has incredible patience. They sat down for a 2-hour drawing session with us to map the custom story onto the dupatta. The silk embroidery was neat, clean, and delivered on schedule.'
  },
  {
    id: 3,
    name: 'Tanvi Shinde',
    role: 'Fashion Designer',
    avatar: 'TS',
    rating: 5,
    text: 'Highly professional tambour and maggam work. As a designer, I am extremely particular about finish lines and backing knots. Their clean back-side padding ensures zero threads pull when worn.'
  }
];

export const artisanInfo = {
  name: 'Dhanashree Pawar',
  role: 'Founder & Lead Artisan',
  bio: 'Dhanashree Pawar is the heart and creative spirit behind Amruta\'s Aari Creation. With years of dedication to the art of Aari Work and Maggam embroidery, she has crafted hundreds of personalized bridal blouses, designer sleeves, and saree embroideries — each a reflection of her meticulous craftsmanship and genuine passion for traditional Indian textile arts. Based in Hadapsar, Pune, Dhanashree brings a personal, boutique touch to every creation.',
  experience: 'Years of Dedication',
  happyClients: 'Happy Brides',
  designsCreated: 'Custom Designs',
  signatureStyle: 'Handcrafted precision with genuine silk threads, zari, and elegant traditional motifs.'
};

export const instagramGallery = [
  { id: 1, url: maggamWork1,  alt: 'Maggam Work Embroidery' },
  { id: 2, url: earcuff1,     alt: 'Aari Earcuff Design' },
  { id: 3, url: sareeEmb1,    alt: 'Saree Embroidery Work 1' },
  { id: 4, url: sareeEmb2,    alt: 'Saree Embroidery Work 2' },
  { id: 5, url: threadWork1,  alt: 'Thread Work Design' },
  { id: 6, url: maggamWork3,  alt: 'Maggam Work Design 3' }
];
