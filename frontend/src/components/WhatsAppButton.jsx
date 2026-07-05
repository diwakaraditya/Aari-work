import { motion } from 'framer-motion';
import { MessageSquarePlus } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919527505630';
  const message = encodeURIComponent("Hello, I'm interested in your Aari Work designs.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-colors group focus:outline-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageSquarePlus className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-semibold text-sm tracking-wide">Whatsapp Chat</span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </motion.a>
  );
}
