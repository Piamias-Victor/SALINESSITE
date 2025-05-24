// src/types/appointment.ts

export interface AppointmentService {
  id: string;
  name: string;
  description: string;
  duration: number; // en minutes
  pharmacistId?: string; // optionnel si service spécifique à un pharmacien
  color: string; // couleur pour le calendrier
}

export interface Pharmacist {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  avatar?: string;
}

export interface TimeSlot {
  id: string;
  pharmacistId: string;
  date: string; // format: "2025-01-15"
  startTime: string; // format: "14:30"
  endTime: string; // format: "15:00"
  isAvailable: boolean;
  serviceId?: string; // si le créneau est réservé
}

export interface AppointmentForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  pharmacistId: string;
  timeSlotId: string;
  customerInfo: AppointmentForm;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface AppointmentBookingState {
  // Étapes du tunnel
  currentStep: 1 | 2 | 3 | 4;
  
  // Données sélectionnées
  selectedService: AppointmentService | null;
  selectedPharmacist: Pharmacist | null;
  selectedTimeSlot: TimeSlot | null;
  customerInfo: AppointmentForm;
  
  // États UI
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setStep: (step: 1 | 2 | 3 | 4) => void;
  setSelectedService: (service: AppointmentService) => void;
  setSelectedPharmacist: (pharmacist: Pharmacist) => void;
  setSelectedTimeSlot: (timeSlot: TimeSlot) => void;
  setCustomerInfo: (info: AppointmentForm) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
  submitAppointment: () => Promise<boolean>;
}