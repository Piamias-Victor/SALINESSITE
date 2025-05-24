// src/components/sections/appointment/AppointmentBooking.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useAppointmentStore } from '@/stores/appointment-store';
import { ServiceSelector } from './ServiceSelector';
import { CalendarPicker } from './CalendarPicker';
import { ContactForm } from './ContactForm';
import { ConfirmationStep } from './ConfirmationStep';
import { ChevronLeft, X } from 'lucide-react';

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentBooking = ({ isOpen, onClose }: AppointmentBookingProps) => {
  const { currentStep, reset } = useAppointmentStore();

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden"
      >
        <AppointmentHeader onClose={handleClose} />
        <AppointmentProgress />
        <AppointmentContent />
      </motion.div>
    </div>
  );
};

const AppointmentHeader = ({ onClose }: { onClose: () => void }) => {
  const { currentStep, setStep, selectedService } = useAppointmentStore();
  
  const canGoBack = currentStep > 1 && currentStep < 4;
  
  const handleBack = () => {
    if (currentStep > 1) {
      setStep((currentStep - 1) as 1 | 2 | 3 | 4);
    }
  };

  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-100">
      <div className="flex items-center space-x-4">
        {canGoBack && (
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={20} className="text-[#404E55]" />
          </button>
        )}
        <div>
          <h2 className="text-xl font-bold text-[#404E55]">
            {currentStep === 4 ? 'Confirmation' : 'Prendre rendez-vous'}
          </h2>
          {selectedService && currentStep > 1 && (
            <p className="text-sm text-[#404E55]/70">{selectedService.name}</p>
          )}
        </div>
      </div>
      
      <button
        onClick={onClose}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <X size={20} className="text-[#404E55]" />
      </button>
    </div>
  );
};

const AppointmentProgress = () => {
  const { currentStep } = useAppointmentStore();
  
  const steps = [
    { number: 1, label: 'Service' },
    { number: 2, label: 'Créneau' },
    { number: 3, label: 'Contact' },
    { number: 4, label: 'Confirmation' }
  ];

  return (
    <div className="px-6 py-4 bg-[#F8F9FA]">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
              ${step.number <= currentStep 
                ? 'bg-[#E61B80] text-white' 
                : 'bg-gray-200 text-gray-500'
              }
            `}>
              {step.number}
            </div>
            <span className={`ml-2 text-sm ${
              step.number <= currentStep ? 'text-[#E61B80] font-medium' : 'text-gray-500'
            }`}>
              {step.label}
            </span>
            
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-4 ${
                step.number < currentStep ? 'bg-[#E61B80]' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AppointmentContent = () => {
  const { currentStep } = useAppointmentStore();

  return (
    <div className="p-6 overflow-y-auto max-h-[60vh]">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="service"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceSelector />
          </motion.div>
        )}
        
        {currentStep === 2 && (
          <motion.div
            key="calendar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CalendarPicker />
          </motion.div>
        )}
        
        {currentStep === 3 && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        )}
        
        {currentStep === 4 && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ConfirmationStep />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};