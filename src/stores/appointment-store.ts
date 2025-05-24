// src/stores/appointment-store.ts
import { create } from 'zustand';
import { AppointmentBookingState, AppointmentForm } from '@/types/appointment';

export const useAppointmentStore = create<AppointmentBookingState>((set, get) => ({
  // État initial
  currentStep: 1,
  selectedService: null,
  selectedPharmacist: null,
  selectedTimeSlot: null,
  customerInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  },
  isLoading: false,
  error: null,

  // Actions
  setStep: (step) => set({ currentStep: step }),
  
  setSelectedService: (service) => set({ 
    selectedService: service,
    selectedPharmacist: null, // Reset les sélections suivantes
    selectedTimeSlot: null
  }),
  
  setSelectedPharmacist: (pharmacist) => set({ 
    selectedPharmacist: pharmacist,
    selectedTimeSlot: null // Reset le créneau
  }),
  
  setSelectedTimeSlot: (timeSlot) => set({ selectedTimeSlot: timeSlot }),
  
  setCustomerInfo: (info) => set({ customerInfo: info }),
  
  setError: (error) => set({ error }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  reset: () => set({
    currentStep: 1,
    selectedService: null,
    selectedPharmacist: null,
    selectedTimeSlot: null,
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      notes: ''
    },
    isLoading: false,
    error: null
  }),

  submitAppointment: async () => {
    const state = get();
    
    if (!state.selectedService || !state.selectedTimeSlot || !state.customerInfo.email) {
      set({ error: 'Informations manquantes pour confirmer le rendez-vous' });
      return false;
    }
    
    set({ isLoading: true, error: null });
    
    try {
      // TODO: Ici on fera l'appel API
      // const appointment = await appointmentService.create({...})
      
      // Simulation pour l'instant
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      set({ currentStep: 4, isLoading: false });
      return true;
      
    } catch (error) {
      set({ 
        error: 'Erreur lors de la prise de rendez-vous. Veuillez réessayer.',
        isLoading: false 
      });
      return false;
    }
  }
}));