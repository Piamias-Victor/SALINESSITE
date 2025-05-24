// src/components/sections/home/HeroSection.tsx
import { useState } from "react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { motion } from "framer-motion";
import { ShoppingBag, Calendar, Award, Heart, Clock, MapPin, Phone } from "lucide-react";
import { AppointmentBooking } from "../appointment/AppointmentBooking";

export const HeroSection = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fff5fa] -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Quick Actions */}
          <div className="md:hidden mb-8">
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="tel:0495222831" 
                className="flex items-center justify-center space-x-2 bg-white rounded-lg py-3 px-4 shadow-md shadow-[#E61B80]/10 border border-[#E61B80]/10"
              >
                <Phone size={18} className="text-[#E61B80]" />
                <span className="font-medium text-[#404E55]">Appeler</span>
              </a>
              <a 
                href="https://maps.google.com/?q=Parking+FNAC,+Cr+Prince+Impérial,+20090+Ajaccio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white rounded-lg py-3 px-4 shadow-md shadow-[#E61B80]/10 border border-[#E61B80]/10"
              >
                <MapPin size={18} className="text-[#E61B80]" />
                <span className="font-medium text-[#404E55]">Itinéraire</span>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <HeroContent onOpenAppointment={() => setIsAppointmentOpen(true)} />
            
            {/* Image Column */}
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Modal de prise de RDV */}
      <AppointmentBooking 
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </>
  );
};

interface HeroContentProps {
  onOpenAppointment: () => void;
}

const HeroContent = ({ onOpenAppointment }: HeroContentProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="md:col-span-6 space-y-5 md:space-y-6 lg:pr-10"
    >
      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#E61B80]/10 text-[#E61B80]">
        À votre service depuis plus de 20 ans
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#404E55]">
        Grande Pharmacie <span className="text-[#E61B80]">des Salines</span>
      </h1>
      
      <p className="text-base md:text-lg lg:text-xl text-[#404E55]/80 leading-relaxed">
        Notre équipe pharmaceutique vous accompagne quotidiennement avec des conseils personnalisés et des produits sélectionnés avec soin.
      </p>
      
      <HeroButtons onOpenAppointment={onOpenAppointment} />
      <HeroMobileInfo />
      <HeroDesktopInfo />
    </motion.div>
  );
};

interface HeroButtonsProps {
  onOpenAppointment: () => void;
}

const HeroButtons = ({ onOpenAppointment }: HeroButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <PharmacyButton 
        size="default" 
        className="w-full sm:w-auto"
        iconRight={<Calendar size={18} />}
        onClick={onOpenAppointment}
      >
        Prendre rendez-vous
      </PharmacyButton>
      <PharmacyButton 
        size="default" 
        variant="outline" 
        className="w-full sm:w-auto"
        iconRight={<ShoppingBag size={18} />}
      >
        E-boutique
      </PharmacyButton>
    </div>
  );
};

const HeroMobileInfo = () => {
  return (
    <div className="md:hidden pt-4 space-y-2">
      <div className="bg-white rounded-lg p-3 shadow-md shadow-[#E61B80]/5 border border-[#E61B80]/10">
        <div className="flex items-center space-x-3">
          <Clock size={18} className="text-[#E61B80]" />
          <div>
            <p className="font-medium text-[#404E55]">Aujourd'hui</p>
            {new Date().getDay() !== 0 ? (
              <p className="text-sm text-[#404E55]/70">
                {new Date().getDay() === 6 ? "9:00 - 19:00" : "8:30 - 20:00"}
              </p>
            ) : (
              <p className="text-sm text-[#E61B80]">Fermé</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-3 shadow-md shadow-[#E61B80]/5 border border-[#E61B80]/10">
        <div className="flex items-center space-x-3">
          <MapPin size={18} className="text-[#E61B80]" />
          <div>
            <p className="font-medium text-[#404E55]">Adresse</p>
            <p className="text-sm text-[#404E55]/70">Parking FNAC, Cr Prince Impérial, 20090 Ajaccio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroDesktopInfo = () => {
  return (
    <div className="hidden md:grid md:grid-cols-2 gap-6 pt-6">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
          <Award size={20} className="text-[#E61B80]" />
        </div>
        <div>
          <p className="font-medium text-[#404E55]">Expertise</p>
          <p className="text-sm text-[#404E55]/70">Professionnels qualifiés</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
          <Heart size={20} className="text-[#E61B80]" />
        </div>
        <div>
          <p className="font-medium text-[#404E55]">Accompagnement</p>
          <p className="text-sm text-[#404E55]/70">Suivi personnalisé</p>
        </div>
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="md:col-span-6 rounded-2xl overflow-hidden shadow-xl shadow-[#E61B80]/5"
    >
      <div className="aspect-[4/3] relative bg-[#F5F7FA] w-full">
        {/* Placeholder for actual pharmacy image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-white">
          <p className="text-lg text-[#404E55]/70 px-8 text-center">
            Image de la Grande Pharmacie des Salines
          </p>
        </div>
      </div>
    </motion.div>
  );
};