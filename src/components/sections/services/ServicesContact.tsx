// src/components/sections/services/ServicesContact.tsx
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";

export const ServicesContact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ContactHeader />
          <ContactOptions />
        </div>
      </div>
    </section>
  );
};

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
        Besoin d'informations <span className="text-[#E61B80]">supplémentaires</span> ?
      </h2>
      <p className="text-[#404E55]/70">
        Notre équipe est disponible pour répondre à toutes vos questions concernant nos services. N'hésitez pas à nous contacter pour un échange personnalisé.
      </p>
    </motion.div>
  );
};

const ContactOptions = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <PhoneContactOption />
      <AppointmentContactOption />
    </div>
  );
};

const PhoneContactOption = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 text-center">
      <div className="mx-auto h-12 w-12 rounded-full bg-[#E61B80]/10 flex items-center justify-center mb-4">
        <Phone className="text-[#E61B80]" size={24} />
      </div>
      <h3 className="text-lg font-bold mb-2 text-[#404E55]">Par téléphone</h3>
      <p className="text-sm text-[#404E55]/70 mb-4">
        Échangez directement avec nos pharmaciens pour obtenir des informations précises et personnalisées.
      </p>
      <PharmacyButton 
        variant="outline" 
        className="w-full"
        iconLeft={<Phone size={16} />}
      >
        04 95 22 28 31
      </PharmacyButton>
    </div>
  );
};

const AppointmentContactOption = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 text-center">
      <div className="mx-auto h-12 w-12 rounded-full bg-[#E61B80]/10 flex items-center justify-center mb-4">
        <Calendar className="text-[#E61B80]" size={24} />
      </div>
      <h3 className="text-lg font-bold mb-2 text-[#404E55]">Prendre rendez-vous</h3>
      <p className="text-sm text-[#404E55]/70 mb-4">
        Planifiez un rendez-vous avec l'un de nos experts pour bénéficier d'un accompagnement sur-mesure.
      </p>
      <PharmacyButton className="w-full">
        Réserver un créneau
      </PharmacyButton>
    </div>
  );
};