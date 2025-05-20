// src/app/contact/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { OpeningHours } from "@/components/ui/opening-hours.tsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Check,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";
import Link from "next/link";

// Type pour le formulaire de contact
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
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
    <SiteContainer>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fff5fa] -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#E61B80]/10 text-[#E61B80]">
                À votre écoute 6 jours sur 7
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#404E55]">
                <span className="text-[#E61B80]">Contactez</span> notre équipe
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-[#404E55]/80 leading-relaxed max-w-3xl mx-auto">
                Nous sommes disponibles pour répondre à vos questions et vous accompagner dans vos besoins pharmaceutiques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quick Contact Cards */}
      <section className="pb-16 -mt-8 lg:-mt-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Téléphone",
                description: "Appelez-nous directement",
                info: "04 95 22 28 31",
                icon: <Phone className="text-[#E61B80]" size={24} />,
                action: <PharmacyButton variant="link" className="text-[#E61B80]">Appeler maintenant</PharmacyButton>,
                link: "tel:0495222831"
              },
              {
                title: "Email",
                description: "Écrivez-nous à tout moment",
                info: "contact@grandepharmaciedessalines.com",
                icon: <Mail className="text-[#E61B80]" size={24} />,
                action: <PharmacyButton variant="link" className="text-[#E61B80]">Envoyer un email</PharmacyButton>,
                link: "mailto:contact@grandepharmaciedessalines.com"
              },
              {
                title: "Adresse",
                description: "Venez nous rendre visite",
                info: "Parking FNAC, Cr Prince Impérial, 20090 Ajaccio",
                icon: <MapPin className="text-[#E61B80]" size={24} />,
                action: <PharmacyButton variant="link" className="text-[#E61B80]">Voir sur la carte</PharmacyButton>,
                link: "https://maps.google.com/?q=Parking+FNAC,+Cr+Prince+Impérial,+20090+Ajaccio"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-xl shadow-[#E61B80]/10 border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#404E55]">{item.title}</h3>
                    <p className="text-sm text-[#404E55]/70">{item.description}</p>
                    <p className="text-[#404E55] mt-1 font-medium text-sm">{item.info}</p>
                    <div className="mt-3">
                      <a href={item.link} target={item.title === "Adresse" ? "_blank" : undefined} rel="noopener noreferrer">
                        {item.action}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map and Opening Hours Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Map Column */}
            <div>
              <h2 className="text-2xl font-bold text-[#404E55] mb-6">
                Nous <span className="text-[#E61B80]">localiser</span>
              </h2>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100">
                {/* Map Placeholder */}
                <div className="h-80 bg-gray-100 flex items-center justify-center">
                  <p className="text-[#404E55]/70">Carte Google Maps</p>
                </div>
                
                {/* Address Details */}
                <div className="p-6">
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                    <div>
                      <p className="font-medium text-[#404E55]">Grande Pharmacie des Salines</p>
                      <p className="text-[#404E55]/70">Parking FNAC, Cr Prince Impérial, 20090 Ajaccio</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <PharmacyButton variant="outline" size="sm" className="flex-1">
                      Itinéraire
                    </PharmacyButton>
                    <PharmacyButton size="sm" className="flex-1">
                      Street View
                    </PharmacyButton>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#404E55] mb-4">
                  Suivez-nous
                </h3>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#404E55] hover:text-[#E61B80] hover:border-[#E61B80]/20 transition-colors duration-200 shadow-sm">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#404E55] hover:text-[#E61B80] hover:border-[#E61B80]/20 transition-colors duration-200 shadow-sm">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#404E55] hover:text-[#E61B80] hover:border-[#E61B80]/20 transition-colors duration-200 shadow-sm">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Opening Hours Column */}
            <div>
              <h2 className="text-2xl font-bold text-[#404E55] mb-6">
                Nos <span className="text-[#E61B80]">horaires</span>
              </h2>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100 p-6">
                <OpeningHours />
              </div>
              
              {/* Public Holidays Notice */}
              <div className="mt-6 bg-white rounded-xl p-5 shadow-lg shadow-[#E61B80]/5 border border-gray-100">
                <div className="flex items-start space-x-3">
                  <Clock size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                  <div>
                    <p className="font-medium text-[#404E55]">Jours fériés et congés</p>
                    <p className="text-sm text-[#404E55]/70">
                      Nos horaires peuvent être modifiés lors des jours fériés et périodes de vacances. Consultez notre page Facebook pour connaître les éventuelles modifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
                Envoyez-nous un <span className="text-[#E61B80]">message</span>
              </h2>
              <p className="text-[#404E55]/70 mt-2">
                Une question ? Une demande particulière ? Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl shadow-[#E61B80]/10 border border-gray-100 p-6 md:p-8">
              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6 flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="text-green-600" size={16} />
                  </div>
                  <div className="ml-3">
                    <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
                    <p className="text-green-700 text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#404E55] mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors`}
                      placeholder="Votre nom"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#404E55] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors`}
                      placeholder="votre.email@exemple.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#404E55] mb-1">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors"
                      placeholder="Votre numéro"
                    />
                  </div>
                  
                  {/* Sujet */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#404E55] mb-1">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        formErrors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors`}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="rdv">Prise de rendez-vous</option>
                      <option value="conseil">Conseil pharmaceutique</option>
                      <option value="stock">Disponibilité produit</option>
                      <option value="autre">Autre</option>
                    </select>
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.subject}</p>
                    )}
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#404E55] mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      formErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-colors`}
                    placeholder="Votre message..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>
                
                {/* RGPD Consent */}
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
                
                {/* Submit Button */}
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
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
                Questions <span className="text-[#E61B80]">fréquentes</span>
              </h2>
              <p className="text-[#404E55]/70 mt-2">
                Découvrez les réponses aux questions les plus posées
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "Comment prendre rendez-vous pour un service spécifique ?",
                  answer: "Vous pouvez prendre rendez-vous par téléphone au 04 95 22 28 31, directement à la pharmacie ou via le formulaire de contact de ce site en précisant le service souhaité."
                },
                {
                  question: "Faites-vous des livraisons à domicile ?",
                  answer: "Oui, nous proposons un service de livraison à domicile pour certains produits et médicaments. Contactez-nous par téléphone pour plus d'informations sur les conditions et les zones desservies."
                },
                {
                  question: "Comment réserver un produit en rupture de stock ?",
                  answer: "Vous pouvez nous contacter par téléphone ou via le formulaire de contact pour réserver un produit. Nous vous informerons dès que celui-ci sera disponible et le mettrons de côté pour vous."
                },
                {
                  question: "Les consultations avec un pharmacien sont-elles payantes ?",
                  answer: "Non, les conseils et consultations avec nos pharmaciens sont gratuits. Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans votre parcours de santé."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <h3 className="font-semibold text-[#404E55] mb-2">{item.question}</h3>
                  <p className="text-sm text-[#404E55]/70">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Action Button on Mobile */}
      <div className="md:hidden fixed bottom-5 right-5 z-50">
        <a 
          href="tel:0495222831" 
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E61B80] text-white shadow-lg shadow-[#E61B80]/20"
        >
          <Phone size={24} />
        </a>
      </div>
    </SiteContainer>
  );
}