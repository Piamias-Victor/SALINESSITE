// src/components/sections/appointment/ConfirmationStep.tsx
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Share2
} from 'lucide-react';
import { useAppointmentStore } from '@/stores/appointment-store';
import { PharmacyButton } from '@/components/ui/pharmacy-button';

export const ConfirmationStep = () => {
  const { 
    selectedService, 
    selectedPharmacist, 
    selectedTimeSlot, 
    customerInfo,
    reset
  } = useAppointmentStore();

  const handleNewAppointment = () => {
    reset();
  };

  const handleDownloadCalendar = () => {
    // TODO: Générer un fichier .ics pour le calendrier
    console.log('Téléchargement du rendez-vous dans le calendrier');
  };

  const handleShare = () => {
    // TODO: Partager les détails du rendez-vous
    console.log('Partage du rendez-vous');
  };

  if (!selectedService || !selectedTimeSlot || !selectedPharmacist) {
    return null;
  }

  const appointmentDate = new Date(selectedTimeSlot.date);
  const formattedDate = appointmentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="space-y-6 text-center">
      <SuccessHeader />
      
      <AppointmentSummary 
        service={selectedService}
        pharmacist={selectedPharmacist}
        timeSlot={selectedTimeSlot}
        customerInfo={customerInfo}
        formattedDate={formattedDate}
      />
      
      <ImportantReminder />
      
      <ActionButtons 
        onNewAppointment={handleNewAppointment}
        onDownloadCalendar={handleDownloadCalendar}
        onShare={handleShare}
      />
    </div>
  );
};

const SuccessHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle size={32} className="text-green-600" />
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-[#404E55] mb-2">
          Rendez-vous confirmé !
        </h3>
        <p className="text-[#404E55]/70">
          Votre demande de rendez-vous a été enregistrée avec succès
        </p>
      </div>
    </motion.div>
  );
};

interface AppointmentSummaryProps {
  service: any;
  pharmacist: any;
  timeSlot: any;
  customerInfo: any;
  formattedDate: string;
}

const AppointmentSummary = ({ 
  service, 
  pharmacist, 
  timeSlot, 
  customerInfo, 
  formattedDate 
}: AppointmentSummaryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#F8F9FA] rounded-xl p-6 space-y-4 text-left"
    >
      <h4 className="font-semibold text-[#404E55] text-center mb-4">
        Détails de votre rendez-vous
      </h4>
      
      <SummaryItem
        icon={<Calendar size={18} className="text-[#E61B80]" />}
        label="Service"
        value={service.name}
        sublabel={`Durée: ${service.duration} minutes`}
      />
      
      <SummaryItem
        icon={<Clock size={18} className="text-[#E61B80]" />}
        label="Date et heure"
        value={`${formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}`}
        sublabel={`${timeSlot.startTime} - ${timeSlot.endTime}`}
      />
      
      <SummaryItem
        icon={<User size={18} className="text-[#E61B80]" />}
        label="Avec"
        value={pharmacist.name}
        sublabel={pharmacist.role}
      />
      
      <div className="border-t border-gray-200 pt-4">
        <h5 className="text-sm font-medium text-[#404E55] mb-3">Vos informations</h5>
        
        <div className="space-y-2">
          <SummaryItem
            icon={<User size={16} className="text-[#404E55]/60" />}
            label="Nom"
            value={`${customerInfo.firstName} ${customerInfo.lastName}`}
            compact
          />
          
          <SummaryItem
            icon={<Mail size={16} className="text-[#404E55]/60" />}
            label="Email"
            value={customerInfo.email}
            compact
          />
          
          <SummaryItem
            icon={<Phone size={16} className="text-[#404E55]/60" />}
            label="Téléphone"
            value={customerInfo.phone}
            compact
          />
        </div>
      </div>
    </motion.div>
  );
};

interface SummaryItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sublabel?: string;
  compact?: boolean;
}

const SummaryItem = ({ icon, label, value, sublabel, compact }: SummaryItemProps) => {
  return (
    <div className={`flex items-start space-x-3 ${compact ? 'py-1' : 'py-2'}`}>
      <div className="flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-xs text-[#404E55]/60 ${compact ? 'mb-0.5' : 'mb-1'}`}>
          {label}
        </div>
        <div className={`font-medium text-[#404E55] ${compact ? 'text-sm' : ''}`}>
          {value}
        </div>
        {sublabel && (
          <div className="text-xs text-[#404E55]/60 mt-0.5">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
};

const ImportantReminder = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left"
    >
      <div className="flex items-start space-x-3">
        <MapPin size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h5 className="font-medium text-blue-900 mb-2">
            Informations importantes
          </h5>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Présentez-vous 5 minutes avant votre rendez-vous</li>
            <li>• Apportez votre carte vitale et une pièce d'identité</li>
            <li>• Grande Pharmacie des Salines - Parking FNAC, Ajaccio</li>
            <li>• Pour toute question : 04 95 22 28 31</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

interface ActionButtonsProps {
  onNewAppointment: () => void;
  onDownloadCalendar: () => void;
  onShare: () => void;
}

const ActionButtons = ({ 
  onNewAppointment, 
  onDownloadCalendar, 
  onShare 
}: ActionButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-3">
        <PharmacyButton
          variant="outline"
          onClick={onDownloadCalendar}
          iconLeft={<Download size={16} />}
          className="text-sm"
        >
          Calendrier
        </PharmacyButton>
        
        <PharmacyButton
          variant="outline"
          onClick={onShare}
          iconLeft={<Share2 size={16} />}
          className="text-sm"
        >
          Partager
        </PharmacyButton>
      </div>
      
      <PharmacyButton
        onClick={onNewAppointment}
        className="w-full"
      >
        Prendre un autre rendez-vous
      </PharmacyButton>
    </motion.div>
  );
};