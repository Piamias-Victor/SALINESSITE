// src/components/sections/appointment/ContactForm.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { useAppointmentStore } from '@/stores/appointment-store';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import { AppointmentForm } from '@/types/appointment';

export const ContactForm = () => {
  const { 
    customerInfo, 
    setCustomerInfo, 
    submitAppointment,
    isLoading,
    error 
  } = useAppointmentStore();

  const [formErrors, setFormErrors] = useState<Partial<AppointmentForm>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
    
    // Nettoyer l'erreur quand l'utilisateur commence à corriger
    if (formErrors[name as keyof AppointmentForm]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<AppointmentForm> = {};
    
    if (!customerInfo.firstName.trim()) {
      errors.firstName = 'Le prénom est requis';
    }
    
    if (!customerInfo.lastName.trim()) {
      errors.lastName = 'Le nom est requis';
    }
    
    if (!customerInfo.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
      errors.email = 'Format d\'email invalide';
    }
    
    if (!customerInfo.phone.trim()) {
      errors.phone = 'Le téléphone est requis';
    } else if (!/^(\+33|0)[1-9](\d{8})$/.test(customerInfo.phone.replace(/\s/g, ''))) {
      errors.phone = 'Numéro de téléphone invalide';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      await submitAppointment();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#404E55] mb-2">
          Vos informations
        </h3>
        <p className="text-[#404E55]/70 text-sm">
          Nous avons besoin de quelques informations pour confirmer votre rendez-vous
        </p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-red-700 text-sm">{error}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Prénom *"
            name="firstName"
            type="text"
            value={customerInfo.firstName}
            error={formErrors.firstName}
            placeholder="Votre prénom"
            icon={<User size={18} />}
            onChange={handleChange}
          />
          
          <FormField
            label="Nom *"
            name="lastName"
            type="text"
            value={customerInfo.lastName}
            error={formErrors.lastName}
            placeholder="Votre nom"
            icon={<User size={18} />}
            onChange={handleChange}
          />
        </div>

        <FormField
          label="Email *"
          name="email"
          type="email"
          value={customerInfo.email}
          error={formErrors.email}
          placeholder="votre.email@exemple.com"
          icon={<Mail size={18} />}
          onChange={handleChange}
        />

        <FormField
          label="Téléphone *"
          name="phone"
          type="tel"
          value={customerInfo.phone}
          error={formErrors.phone}
          placeholder="06 12 34 56 78"
          icon={<Phone size={18} />}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-[#404E55] mb-2">
            Message (optionnel)
          </label>
          <div className="relative">
            <div className="absolute left-3 top-3 pointer-events-none">
              <MessageSquare size={18} className="text-[#404E55]/40" />
            </div>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={customerInfo.notes}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors resize-none"
              placeholder="Informations complémentaires..."
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <PharmacyButton
            type="submit"
            className="w-full"
            disabled={isLoading}
            iconRight={isLoading ? undefined : <ArrowRight size={16} />}
          >
            {isLoading ? 'Confirmation en cours...' : 'Confirmer le rendez-vous'}
          </PharmacyButton>
        </div>
      </form>

      <PrivacyNotice />
    </div>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  placeholder: string;
  icon: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({ 
  label, 
  name, 
  type, 
  value, 
  error, 
  placeholder, 
  icon, 
  onChange 
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#404E55] mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <div className="text-[#404E55]/40">
            {icon}
          </div>
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`
            w-full pl-10 pr-4 py-3 rounded-lg border transition-colors
            ${error 
              ? 'border-red-300 bg-red-50 focus:ring-red-500/50' 
              : 'border-gray-200 focus:ring-[#E61B80]/50'
            }
            focus:outline-none focus:ring-2 focus:border-transparent
          `}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

const PrivacyNotice = () => {
  return (
    <div className="text-xs text-[#404E55]/60 bg-[#F8F9FA] p-3 rounded-lg">
      <p>
        En confirmant ce rendez-vous, vous acceptez que vos données personnelles soient 
        utilisées uniquement dans le cadre de votre prise en charge pharmaceutique. 
        Vos informations sont sécurisées et ne seront jamais partagées.
      </p>
    </div>
  );
};