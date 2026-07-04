import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, Sparkles, MessageSquare, Instagram, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'bridal-blouse',
    date: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request/submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        category: 'bridal-blouse',
        date: '',
        message: ''
      });
    }, 1500);
  };

  const getWhatsAppLocationUrl = () => {
    const phone = '919876543210';
    const text = encodeURIComponent("Hi Aari Aaradhya, I'd like to book an in-person design consultation slot at your Banjara Hills studio.");
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <div className="py-12 bg-bg-light dark:bg-bg-dark transition-colors duration-300 min-h-screen">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-secondary flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4 text-secondary" /> Studio Coordinates
        </span>
        <h1 className="font-serif font-black text-4xl md:text-6xl text-primary dark:text-secondary leading-tight">
          Consult With Our Designer
        </h1>
        <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        <p className="mt-4 max-w-xl mx-auto text-muted-light dark:text-muted-dark font-sans text-sm">
          Write to us with details about your wedding outfit, colors, sleeves, and timeline parameters. We're looking forward to making your dream design a reality.
        </p>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Details Column - 5 Cols */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-card-dark rounded-3xl p-8 border border-primary/5 dark:border-secondary/15 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-2xl text-primary dark:text-secondary border-b border-primary/5 dark:border-secondary/10 pb-4">
                Boutique Info
              </h3>

              <div className="space-y-6 font-sans">
                {/* Address */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 dark:bg-secondary/15 text-primary dark:text-secondary">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark mb-1">
                      Our Location
                    </h4>
                    <p className="text-xs text-text-light dark:text-text-dark leading-relaxed font-light">
                      12-B, Ground Floor, Silk Palace Plaza, Banjara Hills Rd 10, Hyderabad, Telangana 500034
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 dark:bg-secondary/15 text-primary dark:text-secondary">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark mb-1">
                      Phone / Call Hours
                    </h4>
                    <p className="text-xs text-text-light dark:text-text-dark leading-relaxed font-light">
                      <a href="tel:+919876543210" className="hover:text-secondary">+91 98765 43210</a>
                    </p>
                    <span className="text-[10px] text-muted-light/65 dark:text-muted-dark/65 block mt-0.5">
                      Mon-Sat: 10:00 AM - 8:00 PM
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 dark:bg-secondary/15 text-primary dark:text-secondary">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark mb-1">
                      Email Inquiries
                    </h4>
                    <p className="text-xs text-text-light dark:text-text-dark leading-relaxed font-light">
                      <a href="mailto:info@aariaaradhya.com" className="hover:text-secondary">info@aariaaradhya.com</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours Banner */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 dark:bg-secondary/15 text-primary dark:text-secondary">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark mb-1">
                      Studio Hours
                    </h4>
                    <p className="text-xs text-text-light dark:text-text-dark leading-relaxed font-light">
                      Sundays are exclusively reserved for heavy bridal consultation sessions under pre-booked tokens.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Social Buttons */}
              <div className="pt-6 border-t border-primary/5 dark:border-secondary/10 flex gap-4">
                <a
                  href={getWhatsAppLocationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-[10px] tracking-wider uppercase text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" /> Book Consultation Slot
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-full bg-primary text-white dark:bg-secondary dark:text-bg-dark hover:opacity-90 transition-opacity flex items-center justify-center"
                  aria-label="Instagram Link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Google Map Mock Up */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm h-64 border border-primary/5 dark:border-secondary/15 bg-white dark:bg-card-dark">
              {/* Map background placeholder pattern */}
              <div className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-45 dark:opacity-20"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-light/95 via-bg-light/60 to-transparent dark:from-card-dark/95 dark:via-card-dark/70 dark:to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                <span className="text-secondary font-bold text-xs uppercase font-sans tracking-widest block">Google Maps Placeholder</span>
                <span className="text-primary dark:text-white font-serif font-semibold text-sm mt-1 block">Banjara Hills Rd 10, Hyderabad</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 inline-block mx-auto px-5 py-2.5 bg-primary dark:bg-secondary text-white dark:text-bg-dark rounded-full font-sans font-bold text-[10px] tracking-wider uppercase shadow-md hover:scale-105 transition-transform"
                >
                  Get Directions on Map
                </a>
              </div>
            </div>
          </div>

          {/* Form Column - 7 Cols */}
          <div className="lg:col-span-7 bg-white dark:bg-card-dark rounded-3xl p-8 lg:p-12 border border-primary/5 dark:border-secondary/15 shadow-sm relative overflow-hidden">
            <h3 className="font-serif font-bold text-2xl text-primary dark:text-secondary border-b border-primary/5 dark:border-secondary/10 pb-4 mb-8">
              Inquiry / Request Form
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 font-sans text-xs"
                >
                  {/* Name and Phone Input Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-semibold text-muted-light dark:text-muted-dark">
                        Your Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Priyanjali Sen"
                        className="w-full px-4 py-3 rounded-full border border-primary/10 dark:border-secondary/15 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-secondary transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-semibold text-muted-light dark:text-muted-dark">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-full border border-primary/10 dark:border-secondary/15 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-secondary transition-all"
                      />
                    </div>
                  </div>

                  {/* Email and Select Dropdown Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-semibold text-muted-light dark:text-muted-dark">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-full border border-primary/10 dark:border-secondary/15 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-secondary transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="font-semibold text-muted-light dark:text-muted-dark">
                        Service Category Interest
                      </label>
                      <select
                        name="category"
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-full border border-primary/10 dark:border-secondary/15 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-secondary transition-all"
                      >
                        <option value="bridal-blouse">Bridal Aari Blouse Work</option>
                        <option value="wedding-saree">Wedding Saree Border Embroidery</option>
                        <option value="party-wear">Contemporary Party Wear</option>
                        <option value="kids-wear">Ethnic Kids Wear</option>
                        <option value="custom-stitching">Bespoke Fitting & Stitching</option>
                        <option value="consultation">Designer Consultation Slot</option>
                      </select>
                    </div>
                  </div>

                  {/* Wedding Date Input */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="font-semibold text-muted-light dark:text-muted-dark">
                      Tentative Wedding / Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-full border border-primary/10 dark:border-secondary/15 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-secondary transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-semibold text-muted-light dark:text-muted-dark">
                      Custom Motif Details or Styling Inquiries
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention color preferences, border width, sleeves style preference, and if you are providing the fabric yourself..."
                      className="w-full px-4 py-3.5 rounded-2xl border border-primary/10 dark:border-secondary/15 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-secondary transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-primary text-white hover:bg-primary-light dark:bg-secondary dark:text-bg-dark dark:hover:bg-secondary-light font-semibold text-xs tracking-wider uppercase rounded-full shadow-md transition-all flex items-center justify-center gap-2 duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white dark:border-bg-dark border-t-transparent animate-spin rounded-full"></div>
                          Recording Entry...
                        </>
                      ) : (
                        'Submit Inquiry Form'
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 space-y-6 font-sans"
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-xl text-primary dark:text-secondary">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-xs text-muted-light dark:text-muted-dark leading-relaxed max-w-sm mx-auto font-light">
                      Thank you for contacting Aari Aaradhya. A digital summary of your design requirements has been logged and our lead designer will coordinate back with you inside 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-primary/25 text-primary dark:border-secondary/25 dark:text-secondary text-[10px] tracking-wider uppercase font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
