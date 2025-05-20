// src/components/sections/presentation/MeetTeamCTA.tsx
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";

export const MeetTeamCTA = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] p-8 md:p-12 text-center">
          <CTAContent />
        </div>
      </div>
    </section>
  );
};

const CTAContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Venez rencontrer notre équipe
      </h2>
      <p className="text-white/90">
        Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans votre parcours de santé.
      </p>
      <CTAButtons />
    </motion.div>
  );
};

const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
      <PharmacyButton 
        className="bg-white text-[#E61B80] hover:bg-white/90" 
        iconLeft={<MapPin size={18} />}
      >
        Nous rendre visite
      </PharmacyButton>
      <PharmacyButton 
        className="bg-white/20 text-white hover:bg-white/30 border border-white/40" 
        iconLeft={<Phone size={18} />}
      >
        Nous contacter
      </PharmacyButton>
    </div>
  );
};