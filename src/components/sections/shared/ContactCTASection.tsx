// src/components/sections/shared/ContactCTASection.tsx
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

type ContactCTASectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};

export const ContactCTASection = ({
  title = "Besoin d'un conseil pharmaceutique ?",
  description = "Notre équipe est disponible pour répondre à toutes vos questions. N'hésitez pas à nous contacter.",
  buttonText = "Nous contacter"
}: ContactCTASectionProps) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] p-6 md:p-12 lg:p-16 shadow-xl">
          <BackgroundPattern />
          <ContentContainer 
            title={title}
            description={description}
            buttonText={buttonText}
          />
        </div>
      </div>
    </section>
  );
};

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white" />
    </div>
  );
};

const ContentContainer = ({ 
  title, 
  description, 
  buttonText 
}: ContactCTASectionProps) => {
  return (
    <div className="relative z-10 grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
      <div className="md:col-span-8 space-y-3 md:space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h2>
        <p className="text-white/90 text-base md:text-lg">
          {description}
        </p>
      </div>
      
      <div className="md:col-span-4 flex flex-col md:items-end space-y-3 md:space-y-4">
        <a href="tel:0495222831">
          <PharmacyButton 
            className="bg-white text-[#E61B80] hover:bg-white/90 w-full md:w-auto" 
            size="lg"
            iconLeft={<Phone size={18} />}
          >
            {buttonText}
          </PharmacyButton>
        </a>
        <p className="text-white/80 text-sm text-center md:text-right">
          Réponse rapide garantie
        </p>
      </div>
    </div>
  );
};