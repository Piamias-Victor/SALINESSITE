// src/components/sections/contact/QuickContactCards.tsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";

interface ContactCardProps {
  title: string;
  description: string;
  info: string;
  icon: React.ReactNode;
  action: React.ReactNode;
  link: string;
  index: number;
}

export const QuickContactCards = () => {
  return (
    <section className="pb-16 -mt-8 lg:-mt-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <ContactCard 
              key={index}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const contactCards = [
  {
    title: "Téléphone",
    description: "Appelez-nous directement",
    info: "04 95 22 28 31",
    icon: <Phone className="text-[#E61B80]" size={24} />,
    action: <PharmacyButton variant="link" className="text-[#E61B80]">Appeler maintenant</PharmacyButton>,
    link: "tel:0495222831"
  },
  {
    title: "Email",
    description: "Écrivez-nous à tout moment",
    info: "contact@grandepharmaciedessalines.com",
    icon: <Mail className="text-[#E61B80]" size={24} />,
    action: <PharmacyButton variant="link" className="text-[#E61B80]">Envoyer un email</PharmacyButton>,
    link: "mailto:contact@grandepharmaciedessalines.com"
  },
  {
    title: "Adresse",
    description: "Venez nous rendre visite",
    info: "Parking FNAC, Cr Prince Impérial, 20090 Ajaccio",
    icon: <MapPin className="text-[#E61B80]" size={24} />,
    action: <PharmacyButton variant="link" className="text-[#E61B80]">Voir sur la carte</PharmacyButton>,
    link: "https://maps.google.com/?q=Parking+FNAC,+Cr+Prince+Impérial,+20090+Ajaccio"
  }
];

const ContactCard = ({ 
  title, 
  description, 
  info, 
  icon, 
  action, 
  link, 
  index 
}: ContactCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-xl shadow-[#E61B80]/10 border border-gray-100"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-[#404E55]">{title}</h3>
          <p className="text-sm text-[#404E55]/70">{description}</p>
          <p className="text-[#404E55] mt-1 font-medium text-sm">{info}</p>
          <div className="mt-3">
            <a 
              href={link} 
              target={title === "Adresse" ? "_blank" : undefined} 
              rel="noopener noreferrer"
            >
              {action}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};