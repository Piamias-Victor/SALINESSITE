// src/components/sections/contact/MapAndHoursSection.tsx
import { MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { OpeningHours } from "@/components/ui/opening-hours.tsx";

export const MapAndHoursSection = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <MapColumn />
          <HoursColumn />
        </div>
      </div>
    </section>
  );
};

const MapColumn = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#404E55] mb-6">
        Nous <span className="text-[#E61B80]">localiser</span>
      </h2>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100">
        <MapPlaceholder />
        <AddressDetails />
      </div>
      
      <SocialMediaLinks />
    </div>
  );
};

const MapPlaceholder = () => {
  return (
    <div className="h-80 bg-gray-100 flex items-center justify-center">
      <p className="text-[#404E55]/70">Carte Google Maps</p>
    </div>
  );
};

const AddressDetails = () => {
  return (
    <div className="p-6">
      <div className="flex items-start space-x-3">
        <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
        <div>
          <p className="font-medium text-[#404E55]">Grande Pharmacie des Salines</p>
          <p className="text-[#404E55]/70">Parking FNAC, Cr Prince Impérial, 20090 Ajaccio</p>
        </div>
      </div>
      
      <div className="flex space-x-2 mt-4">
        <PharmacyButton variant="outline" size="sm" className="flex-1">
          Itinéraire
        </PharmacyButton>
        <PharmacyButton size="sm" className="flex-1">
          Street View
        </PharmacyButton>
      </div>
    </div>
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-[#404E55] mb-4">
        Suivez-nous
      </h3>
      
      <div className="flex space-x-4">
        <SocialMediaButton network="Facebook" icon={<Facebook size={20} />} />
        <SocialMediaButton network="Instagram" icon={<Instagram size={20} />} />
        <SocialMediaButton network="Twitter" icon={<Twitter size={20} />} />
      </div>
    </div>
  );
};

interface SocialMediaButtonProps {
  network: string;
  icon: React.ReactNode;
}

const SocialMediaButton = ({ network, icon }: SocialMediaButtonProps) => {
  return (
    <a 
      href="#" 
      aria-label={`Visitez notre page ${network}`}
      className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#404E55] hover:text-[#E61B80] hover:border-[#E61B80]/20 transition-colors duration-200 shadow-sm"
    >
      {icon}
    </a>
  );
};

const HoursColumn = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#404E55] mb-6">
        Nos <span className="text-[#E61B80]">horaires</span>
      </h2>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100 p-6">
        <OpeningHours />
      </div>
      
      <HolidayNotice />
    </div>
  );
};

const HolidayNotice = () => {
  return (
    <div className="mt-6 bg-white rounded-xl p-5 shadow-lg shadow-[#E61B80]/5 border border-gray-100">
      <div className="flex items-start space-x-3">
        <Clock size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
        <div>
          <p className="font-medium text-[#404E55]">Jours fériés et congés</p>
          <p className="text-sm text-[#404E55]/70">
            Nos horaires peuvent être modifiés lors des jours fériés et périodes de vacances. Consultez notre page Facebook pour connaître les éventuelles modifications.
          </p>
        </div>
      </div>
    </div>
  );
};