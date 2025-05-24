// src/components/sections/appointment/ServiceSelector.tsx
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { useAppointmentStore } from '@/stores/appointment-store';
import { appointmentServices } from '@/lib/appointment/services';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import { AppointmentService } from '@/types/appointment';

export const ServiceSelector = () => {
  const { selectedService, setSelectedService, setStep } = useAppointmentStore();

  const handleServiceSelect = (service: AppointmentService) => {
    setSelectedService(service);
  };

  const handleContinue = () => {
    if (selectedService) {
      setStep(2);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#404E55] mb-2">
          Choisissez votre service
        </h3>
        <p className="text-[#404E55]/70 text-sm">
          Sélectionnez le type de rendez-vous que vous souhaitez prendre
        </p>
      </div>

      <div className="grid gap-4">
        {appointmentServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={selectedService?.id === service.id}
            onSelect={() => handleServiceSelect(service)}
            index={index}
          />
        ))}
      </div>

      {selectedService && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-4 border-t border-gray-100"
        >
          <PharmacyButton
            onClick={handleContinue}
            className="w-full"
            iconRight={<ArrowRight size={16} />}
          >
            Continuer
          </PharmacyButton>
        </motion.div>
      )}
    </div>
  );
};

interface ServiceCardProps {
  service: AppointmentService;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

const ServiceCard = ({ service, isSelected, onSelect, index }: ServiceCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onSelect}
      className={`
        w-full p-4 rounded-xl border-2 transition-all duration-200 text-left group
        ${isSelected 
          ? 'border-[#E61B80] bg-[#E61B80]/5 shadow-lg shadow-[#E61B80]/10' 
          : 'border-gray-200 bg-white hover:border-[#E61B80]/40 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: service.color }}
            />
            <h4 className="font-semibold text-[#404E55] group-hover:text-[#E61B80] transition-colors">
              {service.name}
            </h4>
          </div>
          
          <p className="text-sm text-[#404E55]/70 mb-3 leading-relaxed">
            {service.description}
          </p>
          
          <ServiceMetadata service={service} />
        </div>
        
        <div className={`
          w-5 h-5 rounded-full border-2 transition-all duration-200 flex-shrink-0 mt-1
          ${isSelected 
            ? 'border-[#E61B80] bg-[#E61B80]' 
            : 'border-gray-300 group-hover:border-[#E61B80]'
          }
        `}>
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-full h-full rounded-full bg-white flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-[#E61B80]" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.button>
  );
};

const ServiceMetadata = ({ service }: { service: AppointmentService }) => {
  return (
    <div className="flex items-center space-x-4 text-xs text-[#404E55]/60">
      <div className="flex items-center space-x-1">
        <Clock size={14} />
        <span>{service.duration} min</span>
      </div>
      
      {service.pharmacistId && (
        <div className="flex items-center space-x-1">
          <User size={14} />
          <span>Spécialiste requis</span>
        </div>
      )}
    </div>
  );
};