import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Heart, Sparkles } from 'lucide-react';
import { instagramGallery } from '../data/websiteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary dark:bg-card-dark text-white border-t border-secondary/20 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-full border border-secondary bg-white/10">
                <Sparkles className="w-4 h-4 text-secondary" />
              </div>
              <span className="font-serif font-bold text-xl tracking-wider text-secondary">
                Aari Aaradhya
              </span>
            </Link>
            <p className="text-sm text-gray-300 dark:text-muted-dark leading-relaxed font-sans font-light">
              Crafting premium hand-embellished bridal couture since 2014. Reimagining age-old metal threads and tambour techniques for modern bridal luxury.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/amruta_aari_creation_/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-secondary hover:text-bg-dark transition-all duration-300 focus:outline-none"
                aria-label="Instagram Link"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg text-secondary mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Our Work', path: '/about' },
                { name: 'Embroidery Gallery', path: '/gallery' },
                { name: 'Our Boutique Services', path: '/services' },
                { name: 'Book Consultation', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-secondary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif font-semibold text-lg text-secondary mb-6 tracking-wide">
              Contact & Hours
            </h3>
            <ul className="space-y-4 text-sm text-gray-300 dark:text-muted-dark font-light md:pr-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>12-B, Ground Floor, Silk Palace Plaza, Banjara Hills Rd 10, Hyderabad, Telangana 500034</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@aariaaradhya.com" className="hover:text-secondary transition-colors">info@aariaaradhya.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-secondary text-xs mt-1">Sundays by appointment only</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Mini Instagram Gallery */}
          <div>
            <h3 className="font-serif font-semibold text-lg text-secondary mb-6 tracking-wide">
              Instagram Showcase
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramGallery.slice(0, 6).map((img) => (
                <a
                  key={img.id}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="relative group aspect-square rounded-md overflow-hidden bg-black focus:outline-none"
                >
                  <img
                    src={img.url}
                    alt={`Instagram Post ${img.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 dark:border-white/5 my-10" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Aari Aaradhya. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" /> in Hyderabad, India
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
