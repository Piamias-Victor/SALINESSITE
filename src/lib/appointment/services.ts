// src/lib/appointment/services.ts
import { AppointmentService, Pharmacist, TimeSlot } from '@/types/appointment';

export const appointmentServices: AppointmentService[] = [
  {
    id: 'entretien-pharmaceutique',
    name: 'Entretien pharmaceutique',
    description: 'Bilan complet de vos traitements avec un pharmacien expert pour optimiser votre thérapie.',
    duration: 30,
    color: '#E61B80'
  },
  {
    id: 'podologie',
    name: 'Rendez-vous podologie',
    description: 'Consultation spécialisée pour le soin et la santé de vos pieds avec notre expert.',
    duration: 45,
    pharmacistId: 'thomas-legrand',
    color: '#404E55'
  },
  {
    id: 'animation-bien-etre',
    name: 'Animation soin bien-être',
    description: 'Séance personnalisée de conseils beauté et bien-être adaptés à vos besoins.',
    duration: 20,
    pharmacistId: 'marie-laurent',
    color: '#ff4aa8'
  }
];

export const pharmacists: Pharmacist[] = [
  {
    id: 'marie-laurent',
    name: 'Dr. Marie Laurent',
    role: 'Pharmacienne titulaire',
    specialties: ['Dermocosmétique', 'Bien-être', 'Conseil personnalisé']
  },
  {
    id: 'alexandre-dupont',
    name: 'Alexandre Dupont',
    role: 'Pharmacien adjoint',
    specialties: ['Phytothérapie', 'Entretiens pharmaceutiques']
  },
  {
    id: 'thomas-legrand',
    name: 'Thomas Legrand',
    role: 'Préparateur spécialisé',
    specialties: ['Podologie', 'Orthopédie', 'Matériel médical']
  }
];

// Fonction pour générer des créneaux (simulation)
export const generateTimeSlots = (
  pharmacistId: string, 
  date: string
): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const baseSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];
  
  baseSlots.forEach((time, index) => {
    // Simulation: certains créneaux sont pris aléatoirement
    const isAvailable = Math.random() > 0.3;
    
    const [hours, minutes] = time.split(':');
    const endTime = `${hours}:${(parseInt(minutes) + 30).toString().padStart(2, '0')}`;
    
    slots.push({
      id: `${pharmacistId}-${date}-${time}`,
      pharmacistId,
      date,
      startTime: time,
      endTime,
      isAvailable
    });
  });
  
  return slots;
};

// Fonction pour obtenir les créneaux disponibles
export const getAvailableSlots = async (
  pharmacistId: string,
  serviceId: string,
  date: string
): Promise<TimeSlot[]> => {
  // Simulation d'un appel API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const allSlots = generateTimeSlots(pharmacistId, date);
  return allSlots.filter(slot => slot.isAvailable);
};

// Fonction pour obtenir les pharmaciens disponibles pour un service
export const getAvailablePharmacists = (serviceId: string): Pharmacist[] => {
  const service = appointmentServices.find(s => s.id === serviceId);
  
  if (service?.pharmacistId) {
    // Service spécifique à un pharmacien
    return pharmacists.filter(p => p.id === service.pharmacistId);
  }
  
  // Service disponible avec tous les pharmaciens qualifiés
  return pharmacists.filter(p => 
    p.role.includes('Pharmacien') || 
    (serviceId === 'entretien-pharmaceutique' && p.specialties.includes('Entretiens pharmaceutiques'))
  );
};