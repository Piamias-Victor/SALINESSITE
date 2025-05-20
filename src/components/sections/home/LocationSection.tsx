// src/components/sections/home/LocationSection.tsx
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";

export const LocationSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <LocationCard />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-[#404E55]"
      >
        Venez nous <span className="text-[#E61B80]">rencontrer</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-base md:text-lg text-[#404E55]/70"
      >
        Idéalement située au cœur d'Ajaccio
      </motion.p>
    </div>
  );
};

const LocationCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100">
      <div className="grid md:grid-cols-2">
        <MapWithOverlay />
        <LocationInfo />
      </div>
      <MobileSchedule />
    </div>
  );
};

const MapWithOverlay = () => {
  return (
    <div className="relative">
      <div className="h-full min-h-[300px] bg-gray-100 flex items-center justify-center">
        <p className="text-[#404E55]/70">Carte Google Maps</p>
        {/* Intégrer ici Google Maps */}
      </div>
      
      {/* Info overlay sur mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-100">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Clock size={18} className="text-[#E61B80]" />
            <span className="font-medium text-[#404E55]">Aujourd'hui :</span>
            <span className="text-[#404E55]/80">
              {new Date().getDay() !== 0 
                ? (new Date().getDay() === 6 ? "9:00 - 19:00" : "8:30 - 20:00") 
                : "Fermé"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationInfo = () => {
  return (
    <div className="p-6 md:p-8">
      <div className="space-y-6">
        <AddressAndContact />
        <DesktopSchedule />
        <ActionButtons />
      </div>
    </div>
  );
};

const AddressAndContact = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#404E55] mb-4">Nous trouver</h3>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
          <span className="text-[#404E55]/80">Parking FNAC, Cr Prince Impérial, 20090 Ajaccio</span>
        </div>
        <div className="flex items-start space-x-3">
          <Phone size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
          <span className="text-[#404E55]/80">04 95 22 28 31</span>
        </div>
        <div className="flex items-start space-x-3">
          <Mail size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
          <span className="text-[#404E55]/80">contact@grandepharmaciedessalines.com</span>
        </div>
      </div>
    </div>
  );
};

const DesktopSchedule = () => {
  const getFormattedDaySchedule = (dayIndex: number) => {
    return {
      day: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"][dayIndex],
      hours: dayIndex < 5 ? "8:30 - 20:00" : dayIndex === 5 ? "9:00 - 19:00" : "Fermé",
    };
  };

  const today = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  
  return (
    <div className="hidden md:block border-t border-gray-100 pt-6">
      <h3 className="text-lg font-semibold text-[#404E55] mb-4">Horaires d'ouverture</h3>
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 7 }).map((_, index) => {
          const schedule = getFormattedDaySchedule(index);
          const isToday = today === index;
          
          return (
            <div 
              key={schedule.day}
              className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                isToday 
                  ? "bg-[#E61B80]/10 text-[#E61B80] font-medium" 
                  : "text-[#404E55]/80"
              }`}
            >
              <span>{schedule.day}</span>
              <span>{schedule.hours}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      <PharmacyButton 
        variant="primary" 
        className="flex-1"
        iconLeft={<Phone size={16} />}
      >
        Appeler
      </PharmacyButton>
      <PharmacyButton 
        variant="outline" 
        className="flex-1"
        iconLeft={<MapPin size={16} />}
      >
        Itinéraire
      </PharmacyButton>
    </div>
  );
};

const MobileSchedule = () => {
  const getFormattedDaySchedule = (dayIndex: number) => {
    return {
      day: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"][dayIndex],
      hours: dayIndex < 5 ? "8:30 - 20:00" : dayIndex === 5 ? "9:00 - 19:00" : "Fermé",
    };
  };

  const today = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  
  return (
    <div className="md:hidden border-t border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-[#404E55] mb-4">Horaires d'ouverture</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {Array.from({ length: 7 }).map((_, index) => {
          const schedule = getFormattedDaySchedule(index);
          const isToday = today === index;
          
          return (
            <div 
              key={schedule.day}
              className={`flex justify-between items-center py-1.5 px-2 rounded-md ${
                isToday 
                  ? "bg-[#E61B80]/10 text-[#E61B80] font-medium" 
                  : "text-[#404E55]/80"
              }`}
            >
              <span className="text-sm">{schedule.day}</span>
              <span className="text-sm">{schedule.hours}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};