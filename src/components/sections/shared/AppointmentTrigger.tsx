// src/components/sections/shared/AppointmentTrigger.tsx
import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import { AppointmentBooking } from '../appointment/AppointmentBooking';
import { motion } from 'framer-motion';

interface AppointmentTriggerProps {
  variant?: 'card' | 'button' | 'hero';
  className?: string;
}

export const AppointmentTrigger = ({ 
  variant = 'button', 
  className = '' 
}: AppointmentTriggerProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (variant === 'card') {
    return (
      <>
        <AppointmentCard 
          onOpen={() => setIsBookingOpen(true)}
          className={className}
        />
        <AppointmentBooking 
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </>
    );
  }

  if (variant === 'hero') {
    return (
      <>
        <PharmacyButton 
          size="lg"
          onClick={() => setIsBookingOpen(true)}
          className={className}
          iconRight={<Calendar size={18} />}
        >
          Prendre rendez-vous en ligne
        </PharmacyButton>
        <AppointmentBooking 
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </>
    );
  }

  // Variant par défaut: button
  return (
    <>
      <PharmacyButton 
        onClick={() => setIsBookingOpen(true)}
        className={className}
        iconLeft={<Calendar size={16} />}
      >
        Prendre RDV
      </PharmacyButton>
      <AppointmentBooking 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

interface AppointmentCardProps {
  onOpen: () => void;
  className?: string;
}

const AppointmentCard = ({ onOpen, className }: AppointmentCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`
        bg-gradient-to-br from-[#E61B80] to-[#ff4aa8] rounded-xl p-6 text-white cursor-pointer
        shadow-lg shadow-[#E61B80]/20 hover:shadow-xl hover:shadow-[#E61B80]/30 
        transition-all duration-300 ${className}
      `}
      onClick={onOpen}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <Calendar size={24} />
            <h3 className="text-lg font-bold">Rendez-vous en ligne</h3>
          </div>
          
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            Réservez votre créneau pour un entretien pharmaceutique, 
            un soin podologie ou une animation bien-être.
          </p>
          
          <AppointmentFeatures />
          
          <div className="flex items-center space-x-2 mt-4 text-sm font-medium">
            <span>Réserver maintenant</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AppointmentFeatures = () => {
  const features = [
    'Confirmation immédiate',
    'Choix du pharmacien',
    'Créneaux flexibles'
  ];

  return (
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2 text-sm text-white/80">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
};

// Composant pour une section CTA dédiée aux RDV
export const AppointmentCTASection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#404E55] mb-4">
                  Réservez votre <span className="text-[#E61B80]">rendez-vous</span> en ligne
                </h2>
                <p className="text-[#404E55]/70 mb-6">
                  Simplifiez vos démarches et choisissez le créneau qui vous convient 
                  pour bénéficier de nos services personnalisés.
                </p>
                
                <div className="space-y-3 mb-6">
                  <ServiceOption 
                    title="Entretien pharmaceutique"
                    duration="30 min"
                    description="Bilan complet de vos traitements"
                  />
                  <ServiceOption 
                    title="Rendez-vous podologie"
                    duration="45 min"
                    description="Soin spécialisé pour vos pieds"
                  />
                  <ServiceOption 
                    title="Animation bien-être"
                    duration="20 min"
                    description="Conseils beauté personnalisés"
                  />
                </div>
                
                <PharmacyButton 
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                  iconRight={<Calendar size={18} />}
                >
                  Choisir mon créneau
                </PharmacyButton>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#E61B80]/10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
                        <Clock size={20} className="text-[#E61B80]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#404E55]">Réservation rapide</h4>
                        <p className="text-sm text-[#404E55]/70">En moins de 2 minutes</p>
                      </div>
                    </div>
                    
                    <div className="pl-12 space-y-2 text-sm text-[#404E55]/80">
                      <p>1. Choisissez votre service</p>
                      <p>2. Sélectionnez un créneau</p>
                      <p>3. Confirmez vos informations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentBooking 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

interface ServiceOptionProps {
  title: string;
  duration: string;
  description: string;
}

const ServiceOption = ({ title, duration, description }: ServiceOptionProps) => {
  return (
    <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
      <div className="w-2 h-2 rounded-full bg-[#E61B80] mt-2 flex-shrink-0" />
      <div>
        <div className="flex items-center space-x-2">
          <h4 className="font-medium text-[#404E55]">{title}</h4>
          <span className="text-xs text-[#404E55]/60 bg-[#F8F9FA] px-2 py-0.5 rounded">
            {duration}
          </span>
        </div>
        <p className="text-sm text-[#404E55]/70">{description}</p>
      </div>
    </div>
  );
};