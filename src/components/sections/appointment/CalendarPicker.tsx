// src/components/sections/appointment/CalendarPicker.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, User } from 'lucide-react';
import { useAppointmentStore } from '@/stores/appointment-store';
import { getAvailablePharmacists, getAvailableSlots } from '@/lib/appointment/services';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import { Pharmacist, TimeSlot } from '@/types/appointment';

export const CalendarPicker = () => {
  const { 
    selectedService, 
    selectedPharmacist, 
    selectedTimeSlot,
    setSelectedPharmacist,
    setSelectedTimeSlot,
    setStep 
  } = useAppointmentStore();

  const [availablePharmacists, setAvailablePharmacists] = useState<Pharmacist[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  // Charger les pharmaciens disponibles
  useEffect(() => {
    if (selectedService) {
      const pharmacists = getAvailablePharmacists(selectedService.id);
      setAvailablePharmacists(pharmacists);
      
      if (pharmacists.length === 1) {
        setSelectedPharmacist(pharmacists[0]);
      }
    }
  }, [selectedService, setSelectedPharmacist]);

  // Charger les créneaux disponibles
  useEffect(() => {
    if (selectedPharmacist && selectedService) {
      loadAvailableSlots();
    }
  }, [selectedPharmacist, currentDate]);

  const loadAvailableSlots = async () => {
    if (!selectedPharmacist || !selectedService) return;
    
    setIsLoadingSlots(true);
    try {
      const dateStr = currentDate.toISOString().split('T')[0];
      const slots = await getAvailableSlots(selectedPharmacist.id, selectedService.id, dateStr);
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Erreur lors du chargement des créneaux:', error);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleContinue = () => {
    if (selectedTimeSlot) {
      setStep(3);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    setCurrentDate(newDate);
    setSelectedTimeSlot(null); // Reset la sélection de créneau
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#404E55] mb-2">
          Choisissez votre créneau
        </h3>
        <p className="text-[#404E55]/70 text-sm">
          Sélectionnez un pharmacien et un horaire disponible
        </p>
      </div>

      {/* Sélection du pharmacien si plusieurs disponibles */}
      {availablePharmacists.length > 1 && (
        <PharmacistSelector 
          pharmacists={availablePharmacists}
          selected={selectedPharmacist}
          onSelect={setSelectedPharmacist}
        />
      )}

      {selectedPharmacist && (
        <>
          <DateNavigation
            currentDate={currentDate}
            onPrevious={() => changeDate(-1)}
            onNext={() => changeDate(1)}
            formatDate={formatDate}
          />

          <TimeSlotGrid
            slots={availableSlots}
            selectedSlot={selectedTimeSlot}
            onSelect={setSelectedTimeSlot}
            isLoading={isLoadingSlots}
          />
        </>
      )}

      {selectedTimeSlot && (
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

interface PharmacistSelectorProps {
  pharmacists: Pharmacist[];
  selected: Pharmacist | null;
  onSelect: (pharmacist: Pharmacist) => void;
}

const PharmacistSelector = ({ pharmacists, selected, onSelect }: PharmacistSelectorProps) => {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-[#404E55] flex items-center space-x-2">
        <User size={16} />
        <span>Choisissez votre pharmacien</span>
      </h4>
      
      <div className="grid gap-3">
        {pharmacists.map((pharmacist) => (
          <button
            key={pharmacist.id}
            onClick={() => onSelect(pharmacist)}
            className={`
              p-3 rounded-lg border-2 transition-all duration-200 text-left
              ${selected?.id === pharmacist.id
                ? 'border-[#E61B80] bg-[#E61B80]/5'
                : 'border-gray-200 hover:border-[#E61B80]/40'
              }
            `}
          >
            <div className="font-medium text-[#404E55]">{pharmacist.name}</div>
            <div className="text-xs text-[#404E55]/60">{pharmacist.role}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

interface DateNavigationProps {
  currentDate: Date;
  onPrevious: () => void;
  onNext: () => void;
  formatDate: (date: Date) => string;
}

const DateNavigation = ({ currentDate, onPrevious, onNext, formatDate }: DateNavigationProps) => {
  const isToday = currentDate.toDateString() === new Date().toDateString();
  const isPast = currentDate < new Date();

  return (
    <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
      <button
        onClick={onPrevious}
        disabled={isPast}
        className="p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} className="text-[#404E55]" />
      </button>
      
      <div className="text-center">
        <div className="flex items-center space-x-2 text-[#404E55] font-medium">
          <Calendar size={16} />
          <span className="capitalize">{formatDate(currentDate)}</span>
        </div>
        {isToday && (
          <span className="text-xs text-[#E61B80] font-medium">Aujourd'hui</span>
        )}
      </div>
      
      <button
        onClick={onNext}
        className="p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronRight size={20} className="text-[#404E55]" />
      </button>
    </div>
  );
};

interface TimeSlotGridProps {
  slots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSelect: (slot: TimeSlot) => void;
  isLoading: boolean;
}

const TimeSlotGrid = ({ slots, selectedSlot, onSelect, isLoading }: TimeSlotGridProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#E61B80]"></div>
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-[#404E55]/70">Aucun créneau disponible pour cette date</p>
        <p className="text-sm text-[#404E55]/50 mt-1">Essayez un autre jour</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {slots.map((slot, index) => (
        <motion.button
          key={slot.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          onClick={() => onSelect(slot)}
          className={`
            p-3 rounded-lg border-2 transition-all duration-200 text-center text-sm font-medium
            ${selectedSlot?.id === slot.id
              ? 'border-[#E61B80] bg-[#E61B80] text-white'
              : 'border-gray-200 bg-white text-[#404E55] hover:border-[#E61B80]/40 hover:bg-[#E61B80]/5'
            }
          `}
        >
          {slot.startTime}
        </motion.button>
      ))}
    </div>
  );
};