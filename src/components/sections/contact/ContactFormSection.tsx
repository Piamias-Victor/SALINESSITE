// src/components/sections/contact/ContactFormSection.tsx
import { useState } from "react";
import { Check, MessageSquare } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import Link from "next/link";

// Type pour le formulaire de contact
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactFormSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = () => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
        Envoyez-nous un <span className="text-[#E61B80]">message</span>
      </h2>
      <p className="text-[#404E55]/70 mt-2">
        Une question ? Une demande particulière ? Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
      </p>
    </div>
  );
};

const ContactForm = () => {
  // États pour le formulaire
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Fonction de gestion des changements de champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Nettoyer l'erreur lorsque l'utilisateur commence à corriger
    if (formErrors[name as keyof ContactForm]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Fonction de validation du formulaire
  const validateForm = (): boolean => {
    const errors: Partial<ContactForm> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Veuillez saisir votre nom";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Veuillez saisir votre email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Veuillez saisir un email valide";
    }
    
    if (!formData.subject) {
      errors.subject = "Veuillez sélectionner un sujet";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Veuillez saisir votre message";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Fonction de soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulation d'une requête API
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        
        // Réinitialiser le message de succès après quelques secondes
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl shadow-[#E61B80]/10 border border-gray-100 p-6 md:p-8">
      <SuccessMessage isVisible={isSubmitted} />
      <FormContent 
        formData={formData}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

interface SuccessMessageProps {
  isVisible: boolean;
}

const SuccessMessage = ({ isVisible }: SuccessMessageProps) => {
  if (!isVisible) return null;
  
  return (
    <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6 flex items-start">
      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
        <Check className="text-green-600" size={16} />
      </div>
      <div className="ml-3">
        <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
        <p className="text-green-700 text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    </div>
  );
};

interface FormContentProps {
  formData: ContactForm;
  formErrors: Partial<ContactForm>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const FormContent = ({ 
  formData, 
  formErrors, 
  handleChange, 
  handleSubmit,
  isSubmitting 
}: FormContentProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField 
          label="Nom complet *"
          name="name"
          type="text"
          value={formData.name}
          error={formErrors.name}
          placeholder="Votre nom"
          onChange={handleChange}
        />
        <FormField 
          label="Email *"
          name="email"
          type="email"
          value={formData.email}
          error={formErrors.email}
          placeholder="votre.email@exemple.com"
          onChange={handleChange}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FormField 
          label="Téléphone (optionnel)"
          name="phone"
          type="tel"
          value={formData.phone}
          placeholder="Votre numéro"
          onChange={handleChange}
        />
        <SubjectSelect 
          value={formData.subject}
          error={formErrors.subject}
          onChange={handleChange}
        />
      </div>
      
      <MessageField 
        value={formData.message}
        error={formErrors.message}
        onChange={handleChange}
      />
      
      <PrivacyConsent />
      
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({ 
  label, 
  name, 
  type, 
  value, 
  placeholder, 
  error, 
  onChange 
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#404E55] mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2.5 rounded-lg border ${
          error ? 'border-red-300 bg-red-50' : 'border-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors`}
        placeholder={placeholder}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

interface SubjectSelectProps {
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SubjectSelect = ({ value, error, onChange }: SubjectSelectProps) => {
  return (
    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-[#404E55] mb-1">
        Sujet *
      </label>
      <select
        id="subject"
        name="subject"
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2.5 rounded-lg border ${
          error ? 'border-red-300 bg-red-50' : 'border-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors`}
      >
        <option value="">Sélectionnez un sujet</option>
        <option value="information">Demande d'information</option>
        <option value="rdv">Prise de rendez-vous</option>
        <option value="conseil">Conseil pharmaceutique</option>
        <option value="stock">Disponibilité produit</option>
        <option value="autre">Autre</option>
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

interface MessageFieldProps {
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageField = ({ value, error, onChange }: MessageFieldProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-[#404E55] mb-1">
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2.5 rounded-lg border ${
          error ? 'border-red-300 bg-red-50' : 'border-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors`}
        placeholder="Votre message..."
      ></textarea>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

const PrivacyConsent = () => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-[#E61B80] focus:ring-[#E61B80]/50"
          required
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="privacy" className="text-[#404E55]/80">
          En soumettant ce formulaire, j'accepte que mes données personnelles soient traitées conformément à la{' '}
          <Link href="/politique-confidentialite" className="text-[#E61B80] hover:underline">
            politique de confidentialité
          </Link>
          .
        </label>
      </div>
    </div>
  );
};

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <div>
      <PharmacyButton
        type="submit"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
        iconLeft={isSubmitting ? undefined : <MessageSquare size={16} />}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </PharmacyButton>
    </div>
  );
};