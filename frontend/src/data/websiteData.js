import maggamWork1 from '../assets/Maggamworkimage1.jpeg';
import earcuff1 from '../assets/EarcuffImage1.jpeg';
import sareeEmbroidery1 from '../assets/SareeEmbroideryimage1.jpeg';
import sareeEmbroidery2 from '../assets/SareeEmbroideryimage2.jpeg';
import threadWork1 from '../assets/Threadworkimage1.jpeg';
import maggamWork3 from '../assets/Maggamworkimage3.jpeg';

export const categories = [
  {
    id: 'bridal-blouses',
    name: 'Bridal Blouses',
    slug: 'bridal-blouses',
    description: 'Detailed heavy Aari & Maggam work designed to make your special day absolute perfection.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    count: 18
  },
  {
    id: 'wedding-sarees',
    name: 'Wedding Sarees',
    slug: 'wedding-sarees',
    description: 'Bespoke scalloped borders, buttis, and heavy pallu craftsmanship on pure silk sarees.',
    image: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=800&q=80',
    count: 12
  },
  {
    id: 'party-wear',
    name: 'Party Wear',
    slug: 'party-wear',
    description: 'Minimalist contemporary tambour work for designer lehengas, kurtis, and gowns.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    count: 15
  },
  {
    id: 'kids-wear',
    name: 'Kids Wear',
    slug: 'kids-wear',
    description: 'Adorable custom pattu langas and designer frocks with soft, skin-friendly embroidery backings.',
    image: 'https://images.unsplash.com/photo-1621259182978-f09e5e24b584?auto=format&fit=crop&w=800&q=80',
    count: 8
  },
  {
    id: 'custom-designs',
    name: 'Custom Designs',
    slug: 'custom-designs',
    description: 'Personalized motifs, sketches translated into needlework, and customized beadwork compositions.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    count: 24
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

export const galleryItems = [
  {
    id: 1,
    title: 'Golden Peacock Zardosi Blouse',
    category: 'bridal-blouses',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional peacock motif adorned with antique gold kundan work, fine zardosi outlines, and micro bead fillings.',
    client: 'Priyanka S., Hyderabad'
  },
  {
    id: 2,
    title: 'Scalloped Wedding Saree Border',
    category: 'wedding-sarees',
    image: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=800&q=80',
    description: 'Gold-copper thread meshwork with pearl chain inserts and fine cutwork embroidery along the drape border.',
    client: 'Ananya R., Bangalore'
  },
  {
    id: 3,
    title: 'Pastel Flora Lehenga Embroidery',
    category: 'party-wear',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    description: 'Shaded pink and green silk threads intertwined with tiny transparent sequence beads for a modern romantic glow.',
    client: 'Meera K., Chennai'
  },
  {
    id: 4,
    title: 'Tiny Tots Blossom Pattu Pavadai',
    category: 'kids-wear',
    image: 'https://images.unsplash.com/photo-1621259182978-f09e5e24b584?auto=format&fit=crop&w=800&q=80',
    description: 'Dainty floral vines embroidered with soft threads and zero-abrasion lining layout for baby skin comfort.',
    client: 'Suhasini M., Vijayawada'
  },
  {
    id: 5,
    title: 'Bespoke Radha-Krishna Bridal Neckline',
    category: 'custom-designs',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    description: 'An extraordinary narrative masterpiece hand-embroidered on crimson silk showcasing the divine couple in a garden posture.',
    client: 'Kavitha D., Vizag'
  },
  {
    id: 6,
    title: 'Royal Elephant Heritage Sleeve',
    category: 'bridal-blouses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    description: 'Elephant march motif bordered with hand-rolled gold thread beads and finished with heavy velvet patch trims.',
    client: 'Deepika G., Hyderabad'
  },
  {
    id: 7,
    title: 'Contemporary Geometrical Silk Kurti',
    category: 'party-wear',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=800&q=80',
    description: 'Modern lines met with ancient tambour stitch methods, using metallic copper thread on raw forest green silk.',
    client: 'Rithika V., Mumbai'
  },
  {
    id: 8,
    title: 'Pearl Symphony Saree Pallu',
    category: 'wedding-sarees',
    image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=80',
    description: 'Over 5000 salt-water pearls hand-woven into matching mesh patterns, creating a mesmerizing drape tail.',
    client: 'Nirupama P., Kochi'
  }
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
  { id: 1, url: maggamWork1,      alt: 'Maggam Work Embroidery' },
  { id: 2, url: earcuff1,         alt: 'Aari Earcuff Design' },
  { id: 3, url: sareeEmbroidery1, alt: 'Saree Embroidery Work 1' },
  { id: 4, url: sareeEmbroidery2, alt: 'Saree Embroidery Work 2' },
  { id: 5, url: threadWork1,      alt: 'Thread Work Design' },
  { id: 6, url: maggamWork3,      alt: 'Maggam Work Design 3' }
];
