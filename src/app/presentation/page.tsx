// src/app/presentation/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { motion } from "framer-motion";
import { MapPin, Phone, Heart, Users, Award, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";

export default function PresentationPage() {
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
                Plus de 20 ans d'expertise pharmaceutique
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#404E55]">
                <span className="text-[#E61B80]">Notre histoire</span> et nos valeurs
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-[#404E55]/80 leading-relaxed max-w-3xl mx-auto">
                Découvrez l'équipe de la Grande Pharmacie des Salines, notre parcours et les valeurs qui nous animent au quotidien pour vous offrir un service de qualité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Notre Histoire Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl shadow-[#E61B80]/5"
            >
              <div className="aspect-[4/3] relative bg-[#F5F7FA]">
                {/* Placeholder for pharmacy historical image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-white">
                  <p className="text-lg text-[#404E55]/70 px-8 text-center">
                    Image historique de la Grande Pharmacie des Salines
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
                Notre <span className="text-[#E61B80]">histoire</span>
              </h2>
              
              <div className="space-y-4 text-[#404E55]/80">
                <p>
                  Fondée en 2003 par le Dr. Marie Laurent, la Grande Pharmacie des Salines est née d'une vision : créer un espace où l'expertise pharmaceutique se conjugue avec un accompagnement humain et personnalisé.
                </p>
                <p>
                  Originaire d'Ajaccio, le Dr. Laurent a toujours eu à cœur de servir la communauté locale avec dévouement et professionnalisme. Après des études brillantes à la faculté de pharmacie de Marseille et plusieurs années d'expérience dans différentes officines, elle a décidé de revenir dans sa ville natale pour y implanter son propre établissement.
                </p>
                <p>
                  Au cours des années, la pharmacie s'est agrandie, modernisée, et a constitué une équipe de professionnels partageant la même passion pour le conseil pharmaceutique et le bien-être des patients.
                </p>
                <p>
                  Aujourd'hui, la Grande Pharmacie des Salines est reconnue comme un acteur de santé incontournable à Ajaccio, alliant innovation et tradition dans une approche centrée sur le patient.
                </p>
              </div>
              
              <div className="flex pt-4">
                <PharmacyButton 
                  variant="outline" 
                  iconLeft={<Calendar size={18} />}
                >
                  Prendre rendez-vous
                </PharmacyButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Nos Valeurs Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-[#404E55]"
            >
              Nos <span className="text-[#E61B80]">valeurs</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-[#404E55]/80"
            >
              Les principes qui guident notre travail au quotidien
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Expertise",
                description: "Chaque membre de notre équipe suit régulièrement des formations pour vous offrir les conseils les plus pertinents et actualisés.",
                icon: <Award className="text-[#E61B80]" size={24} />
              },
              {
                title: "Bienveillance",
                description: "Nous accordons une attention particulière à chaque patient, en prenant le temps d'écouter et de comprendre vos besoins spécifiques.",
                icon: <Heart className="text-[#E61B80]" size={24} />
              },
              {
                title: "Disponibilité",
                description: "Notre équipe s'engage à être disponible pour répondre à vos questions et vous accompagner dans votre parcours de santé.",
                icon: <Phone className="text-[#E61B80]" size={24} />
              },
              {
                title: "Proximité",
                description: "Ancrés dans la communauté d'Ajaccio, nous cultivons des relations de confiance durables avec nos patients.",
                icon: <MapPin className="text-[#E61B80]" size={24} />
              },
              {
                title: "Innovation",
                description: "Nous investissons constamment dans les nouvelles technologies et services pour améliorer votre expérience.",
                icon: <BookOpen className="text-[#E61B80]" size={24} />
              },
              {
                title: "Accompagnement",
                description: "Au-delà de la simple délivrance de médicaments, nous vous accompagnons dans votre parcours de santé global.",
                icon: <Users className="text-[#E61B80]" size={24} />
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 hover:border-[#E61B80]/20 hover:shadow-xl hover:shadow-[#E61B80]/10 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-[#E61B80]/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#404E55]">{value.title}</h3>
                <p className="text-sm text-[#404E55]/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Notre Équipe Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-[#404E55]"
            >
              Notre <span className="text-[#E61B80]">équipe</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-[#404E55]/80"
            >
              Des professionnels qualifiés à votre service
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                name: "Dr. Marie Laurent",
                role: "Pharmacienne titulaire",
                description: "Docteur en pharmacie et fondatrice de la Grande Pharmacie des Salines, Marie possède plus de 25 ans d'expérience et se spécialise dans les conseils dermocosmétiques.",
                photo: "/path/to/photo.jpg" // Remplacer par les vraies photos
              },
              {
                name: "Alexandre Dupont",
                role: "Pharmacien adjoint",
                description: "Pharmacien passionné par la phytothérapie et les médecines naturelles, Alexandre vous guide vers des approches complémentaires adaptées à vos besoins.",
                photo: "/path/to/photo.jpg"
              },
              {
                name: "Sophie Martin",
                role: "Préparatrice en pharmacie",
                description: "Experte en préparations magistrales et gestion des stocks, Sophie veille à la disponibilité des produits et à la qualité de nos préparations.",
                photo: "/path/to/photo.jpg"
              },
              {
                name: "Thomas Legrand",
                role: "Préparateur en pharmacie",
                description: "Spécialisé dans le matériel médical et l'orthopédie, Thomas vous conseille pour trouver l'équipement adapté à vos besoins spécifiques.",
                photo: "/path/to/photo.jpg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100 hover:shadow-xl hover:shadow-[#E61B80]/10 transition-all duration-300"
              >
                <div className="aspect-square bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#404E55]/70">Photo</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#404E55] text-lg">{member.name}</h3>
                  <p className="text-[#E61B80] text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-[#404E55]/70">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Notre Expertise Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
                Notre <span className="text-[#E61B80]">expertise</span>
              </h2>
              
              <div className="space-y-4 text-[#404E55]/80">
                <p>
                  La Grande Pharmacie des Salines dispose d'expertises spécifiques dans plusieurs domaines clés de la santé, nous permettant de vous offrir un accompagnement complet et personnalisé.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-[#404E55] mb-2">Dermocosmétique</h3>
                  <p className="text-sm text-[#404E55]/70">Analyse de peau personnalisée et recommandations adaptées à vos besoins spécifiques.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-[#404E55] mb-2">Phytothérapie</h3>
                  <p className="text-sm text-[#404E55]/70">Conseils en plantes médicinales et médecines naturelles pour compléter vos traitements.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-[#404E55] mb-2">Orthopédie</h3>
                  <p className="text-sm text-[#404E55]/70">Large gamme de matériel médical et conseils pour votre confort quotidien.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-[#404E55] mb-2">Préparations magistrales</h3>
                  <p className="text-sm text-[#404E55]/70">Élaboration de préparations sur mesure selon les prescriptions médicales.</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link href="/services">
                  <PharmacyButton>
                    Découvrir tous nos services
                  </PharmacyButton>
                </Link>
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl shadow-[#E61B80]/5"
            >
              <div className="aspect-[4/3] relative bg-[#F5F7FA]">
                {/* Placeholder for pharmacy expertise image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-white">
                  <p className="text-lg text-[#404E55]/70 px-8 text-center">
                    Image illustrant l'expertise de la pharmacie
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] p-8 md:p-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Venez rencontrer notre équipe
              </h2>
              <p className="text-white/90">
                Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans votre parcours de santé.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <PharmacyButton 
                  className="bg-white text-[#E61B80] hover:bg-white/90" 
                  iconLeft={<MapPin size={18} />}
                >
                  Nous rendre visite
                </PharmacyButton>
                <PharmacyButton 
                  className="bg-white/20 text-white hover:bg-white/30 border border-white/40" 
                  iconLeft={<Phone size={18} />}
                >
                  Nous contacter
                </PharmacyButton>
              </div>
            </motion.div>
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