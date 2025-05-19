// src/app/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { motion } from "framer-motion";
import { ShoppingBag, Calendar, Phone, Award, Heart, Clock, MapPin, Mail, Users, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <SiteContainer>
      {/* Hero Section - Optimisé pour mobile */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fff5fa] -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Quick Actions */}
          <div className="md:hidden mb-8">
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="tel:0495222831" 
                className="flex items-center justify-center space-x-2 bg-white rounded-lg py-3 px-4 shadow-md shadow-[#E61B80]/10 border border-[#E61B80]/10"
              >
                <Phone size={18} className="text-[#E61B80]" />
                <span className="font-medium text-[#404E55]">Appeler</span>
              </a>
              <a 
                href="https://maps.google.com/?q=Parking+FNAC,+Cr+Prince+Impérial,+20090+Ajaccio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white rounded-lg py-3 px-4 shadow-md shadow-[#E61B80]/10 border border-[#E61B80]/10"
              >
                <MapPin size={18} className="text-[#E61B80]" />
                <span className="font-medium text-[#404E55]">Itinéraire</span>
              </a>
            </div>
          </div>
        
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 space-y-5 md:space-y-6 lg:pr-10"
            >
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#E61B80]/10 text-[#E61B80]">
                À votre service depuis plus de 20 ans
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#404E55]">
                Grande Pharmacie <span className="text-[#E61B80]">des Salines</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-[#404E55]/80 leading-relaxed">
                Notre équipe pharmaceutique vous accompagne quotidiennement avec des conseils personnalisés et des produits sélectionnés avec soin.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <PharmacyButton 
                  size="default" 
                  className="w-full sm:w-auto"
                  iconRight={<Calendar size={18} />}
                >
                  Prendre rendez-vous
                </PharmacyButton>
                <PharmacyButton 
                  size="default" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  iconRight={<ShoppingBag size={18} />}
                >
                  E-boutique
                </PharmacyButton>
              </div>
              
              {/* Quick info for mobile - Affichage plus compact */}
              <div className="md:hidden pt-4 space-y-2">
                <div className="bg-white rounded-lg p-3 shadow-md shadow-[#E61B80]/5 border border-[#E61B80]/10">
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-[#E61B80]" />
                    <div>
                      <p className="font-medium text-[#404E55]">Aujourd'hui</p>
                      {new Date().getDay() !== 0 ? (
                        <p className="text-sm text-[#404E55]/70">
                          {new Date().getDay() === 6 ? "9:00 - 19:00" : "8:30 - 20:00"}
                        </p>
                      ) : (
                        <p className="text-sm text-[#E61B80]">Fermé</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-md shadow-[#E61B80]/5 border border-[#E61B80]/10">
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-[#E61B80]" />
                    <div>
                      <p className="font-medium text-[#404E55]">Adresse</p>
                      <p className="text-sm text-[#404E55]/70">Parking FNAC, Cr Prince Impérial, 20090 Ajaccio</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop info cards - Plus spacieux */}
              <div className="hidden md:grid md:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
                    <Award size={20} className="text-[#E61B80]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404E55]">Expertise</p>
                    <p className="text-sm text-[#404E55]/70">Professionnels qualifiés</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
                    <Heart size={20} className="text-[#E61B80]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404E55]">Accompagnement</p>
                    <p className="text-sm text-[#404E55]/70">Suivi personnalisé</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Image Column - Même sur mobile et desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-6 rounded-2xl overflow-hidden shadow-xl shadow-[#E61B80]/5"
            >
              <div className="aspect-[4/3] relative bg-[#F5F7FA] w-full">
                {/* Placeholder for actual pharmacy image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-white">
                  <p className="text-lg text-[#404E55]/70 px-8 text-center">
                    Image de la Grande Pharmacie des Salines
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Info & Localisation - Version améliorée */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-[#404E55]"
            >
              Venez nous <span className="text-[#E61B80]">rencontrer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-[#404E55]/70"
            >
              Idéalement située au cœur d'Ajaccio
            </motion.p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100">
            <div className="grid md:grid-cols-2">
              {/* Carte avec overlay d'information */}
              <div className="relative">
                <div className="h-full min-h-[300px] bg-gray-100 flex items-center justify-center">
                  <p className="text-[#404E55]/70">Carte Google Maps</p>
                  {/* Intégrer ici Google Maps */}
                </div>
                
                {/* Info overlay sur mobile */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-100">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock size={18} className="text-[#E61B80]" />
                      <span className="font-medium text-[#404E55]">Aujourd'hui :</span>
                      <span className="text-[#404E55]/80">
                        {new Date().getDay() !== 0 
                          ? (new Date().getDay() === 6 ? "9:00 - 19:00" : "8:30 - 20:00") 
                          : "Fermé"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Informations */}
              <div className="p-6 md:p-8">
                <div className="space-y-6">
                  {/* Adresse et contact */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#404E55] mb-4">Nous trouver</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                        <span className="text-[#404E55]/80">Parking FNAC, Cr Prince Impérial, 20090 Ajaccio</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                        <span className="text-[#404E55]/80">04 95 22 28 31</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                        <span className="text-[#404E55]/80">contact@grandepharmaciedessalines.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Horaires - Visible uniquement sur desktop */}
                  <div className="hidden md:block border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-semibold text-[#404E55] mb-4">Horaires d'ouverture</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { day: "Lundi", hours: "8:30 - 20:00" },
                        { day: "Mardi", hours: "8:30 - 20:00" },
                        { day: "Mercredi", hours: "8:30 - 20:00" },
                        { day: "Jeudi", hours: "8:30 - 20:00" },
                        { day: "Vendredi", hours: "8:30 - 20:00" },
                        { day: "Samedi", hours: "9:00 - 19:00" },
                        { day: "Dimanche", hours: "Fermé" },
                      ].map((item, index) => {
                        const isToday = (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) === index;
                        return (
                          <div 
                            key={item.day}
                            className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                              isToday 
                                ? "bg-[#E61B80]/10 text-[#E61B80] font-medium" 
                                : "text-[#404E55]/80"
                            }`}
                          >
                            <span>{item.day}</span>
                            <span>{item.hours}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Boutons d'action */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <PharmacyButton 
                      variant="primary" 
                      className="flex-1"
                      iconLeft={<Phone size={16} />}
                    >
                      Appeler
                    </PharmacyButton>
                    <PharmacyButton 
                      variant="outline" 
                      className="flex-1"
                      iconLeft={<MapPin size={16} />}
                    >
                      Itinéraire
                    </PharmacyButton>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horaires plus détaillés sur mobile - Sous la carte */}
            <div className="md:hidden border-t border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-[#404E55] mb-4">Horaires d'ouverture</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  { day: "Lundi", hours: "8:30 - 20:00" },
                  { day: "Mardi", hours: "8:30 - 20:00" },
                  { day: "Mercredi", hours: "8:30 - 20:00" },
                  { day: "Jeudi", hours: "8:30 - 20:00" },
                  { day: "Vendredi", hours: "8:30 - 20:00" },
                  { day: "Samedi", hours: "9:00 - 19:00" },
                  { day: "Dimanche", hours: "Fermé" },
                ].map((item, index) => {
                  const isToday = (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) === index;
                  return (
                    <div 
                      key={item.day}
                      className={`flex justify-between items-center py-1.5 px-2 rounded-md ${
                        isToday 
                          ? "bg-[#E61B80]/10 text-[#E61B80] font-medium" 
                          : "text-[#404E55]/80"
                      }`}
                    >
                      <span className="text-sm">{item.day}</span>
                      <span className="text-sm">{item.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Optimisé pour mobile */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#404E55]"
            >
              Nos services <span className="text-[#E61B80]">personnalisés</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-[#404E55]/70"
            >
              Découvrez nos services exclusifs pour prendre soin de votre santé
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                title: "Conseil personnalisé",
                description: "Nos pharmaciens experts sont à votre écoute pour vous offrir des conseils adaptés à vos besoins spécifiques.",
                icon: <Users className="text-[#E61B80]" size={24} />
              },
              {
                title: "Préparations sur mesure",
                description: "Des préparations magistrales réalisées avec précision dans notre laboratoire selon les prescriptions médicales.",
                icon: <Star className="text-[#E61B80]" size={24} />
              },
              {
                title: "Service de vaccination",
                description: "Profitez de notre service de vaccination pour vous protéger efficacement contre les maladies saisonnières.",
                icon: <Heart className="text-[#E61B80]" size={24} />
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 md:p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 hover:border-[#E61B80]/20 hover:shadow-xl hover:shadow-[#E61B80]/10 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-[#E61B80]/10 flex items-center justify-center mb-4 md:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#404E55]">{service.title}</h3>
                <p className="text-sm md:text-base text-[#404E55]/70">{service.description}</p>
                <div className="mt-4 md:mt-6">
                  <Link href="/services">
                    <PharmacyButton variant="link" className="text-[#E61B80] p-0">
                      En savoir plus
                    </PharmacyButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile view: Button to see all services */}
          <div className="mt-8 text-center md:hidden">
            <Link href="/services">
              <PharmacyButton>
                Tous nos services
              </PharmacyButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section - Mobile friendly */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] p-6 md:p-12 lg:p-16 shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white" />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-8 space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Besoin d'un conseil pharmaceutique ?
                </h2>
                <p className="text-white/90 text-base md:text-lg">
                  Notre équipe est disponible pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
                </p>
              </div>
              
              <div className="md:col-span-4 flex flex-col md:items-end space-y-3 md:space-y-4">
                <a href="tel:0495222831">
                  <PharmacyButton 
                    className="bg-white text-[#E61B80] hover:bg-white/90 w-full md:w-auto" 
                    size="lg"
                    iconLeft={<Phone size={18} />}
                  >
                    Nous contacter
                  </PharmacyButton>
                </a>
                <p className="text-white/80 text-sm text-center md:text-right">
                  Réponse rapide garantie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre équipe Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#404E55]"
            >
              Notre <span className="text-[#E61B80]">équipe</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-[#404E55]/70"
            >
              Une équipe de professionnels à votre écoute
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              {
                name: "Dr. Marie Laurent",
                role: "Pharmacienne titulaire",
                photo: "/path/to/photo.jpg" // Remplacer par les vraies photos
              },
              {
                name: "Alexandre Dupont",
                role: "Pharmacien adjoint",
                photo: "/path/to/photo.jpg"
              },
              {
                name: "Sophie Martin",
                role: "Préparatrice",
                photo: "/path/to/photo.jpg"
              },
              {
                name: "Thomas Legrand",
                role: "Préparateur",
                photo: "/path/to/photo.jpg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100"
              >
                <div className="aspect-square bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#404E55]/70">Photo</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#404E55]">{member.name}</h3>
                  <p className="text-sm text-[#404E55]/70">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Button to see the team */}
          <div className="mt-8 text-center">
            <Link href="/presentation">
              <PharmacyButton variant="outline">
                En savoir plus sur notre équipe
              </PharmacyButton>
            </Link>
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