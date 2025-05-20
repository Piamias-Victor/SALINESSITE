// src/app/services/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Heart, 
  Calendar, 
  Pill, 
  Stethoscope, 
  Thermometer, 
  Activity, 
  Droplet, 
  Baby, 
  Star, 
  Eye, 
  Leaf, 
  MoveRight,
  Phone
} from "lucide-react";
import Link from "next/link";

// Types pour les services
type ServiceCategory = 'Tous' | 'Conseil' | 'Préparation' | 'Prévention' | 'Orthopédie';

interface Service {
  title: string;
  description: string;
  shortDescription: string;
  icon: React.ReactNode;
  category: ServiceCategory[];
  highlight?: boolean;
}

export default function ServicesPage() {
  // État pour le filtre de catégorie sélectionné
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('Tous');

  // Données des services
  const services: Service[] = [
    {
      title: "Conseil personnalisé",
      shortDescription: "Accompagnement sur-mesure pour chaque patient",
      description: "Notre équipe prend le temps de vous écouter pour comprendre vos besoins spécifiques et vous proposer des solutions adaptées à votre situation. Que ce soit pour un traitement ponctuel ou un suivi au long cours, nous sommes à vos côtés.",
      icon: <Heart className="text-[#E61B80]" size={24} />,
      category: ['Conseil'],
      highlight: true
    },
    {
      title: "Préparations magistrales",
      shortDescription: "Médicaments sur-mesure selon prescription",
      description: "Notre laboratoire vous propose des préparations réalisées avec précision selon les prescriptions médicales. Nous garantissons la qualité et la sécurité de chaque préparation pour répondre à vos besoins spécifiques.",
      icon: <Pill className="text-[#E61B80]" size={24} />,
      category: ['Préparation'],
      highlight: true
    },
    {
      title: "Service de vaccination",
      shortDescription: "Protection contre les maladies saisonnières",
      description: "Nos pharmaciens sont formés pour vous administrer certains vaccins sans rendez-vous. Ce service vous permet de vous protéger efficacement et simplement contre les maladies saisonnières comme la grippe.",
      icon: <Thermometer className="text-[#E61B80]" size={24} />,
      category: ['Prévention'],
      highlight: true
    },
    {
      title: "Bilan de médication",
      shortDescription: "Analyse complète de vos traitements",
      description: "Nos pharmaciens réalisent un bilan complet de vos médicaments pour optimiser votre traitement, éviter les interactions médicamenteuses et améliorer l'efficacité thérapeutique.",
      icon: <Activity className="text-[#E61B80]" size={24} />,
      category: ['Conseil']
    },
    {
      title: "Orthopédie et matériel médical",
      shortDescription: "Équipements adaptés à vos besoins",
      description: "Nous proposons une large gamme de produits orthopédiques et de matériel médical. Notre équipe vous guide dans le choix des produits les plus adaptés à vos besoins pour améliorer votre confort quotidien.",
      icon: <Stethoscope className="text-[#E61B80]" size={24} />,
      category: ['Orthopédie']
    },
    {
      title: "Dépistage",
      shortDescription: "Tests rapides pour votre santé",
      description: "Réalisez facilement des tests de dépistage rapides (glycémie, cholestérol, etc.) dans notre espace dédié. Ces tests vous permettent d'obtenir rapidement des informations importantes sur votre état de santé.",
      icon: <Droplet className="text-[#E61B80]" size={24} />,
      category: ['Prévention']
    },
    {
      title: "Conseils pédiatriques",
      shortDescription: "Accompagnement spécifique pour les enfants",
      description: "Notre équipe est spécialement formée pour répondre aux besoins spécifiques des enfants et accompagner les parents avec des conseils adaptés et des produits sélectionnés pour leur sécurité et leur efficacité.",
      icon: <Baby className="text-[#E61B80]" size={24} />,
      category: ['Conseil']
    },
    {
      title: "Préparations homéopathiques",
      shortDescription: "Remèdes naturels personnalisés",
      description: "Nous préparons des remèdes homéopathiques personnalisés selon les prescriptions de votre médecin. Chaque préparation est réalisée avec soin pour garantir qualité et efficacité.",
      icon: <Leaf className="text-[#E61B80]" size={24} />,
      category: ['Préparation']
    },
    {
      title: "Analyse de peau",
      shortDescription: "Diagnostic dermatologique personnalisé",
      description: "Bénéficiez d'une analyse approfondie de votre peau réalisée par nos experts. Nous vous conseillons ensuite les produits les plus adaptés à votre type de peau et à vos préoccupations spécifiques.",
      icon: <Eye className="text-[#E61B80]" size={24} />,
      category: ['Conseil']
    }
  ];

  // Filtrer les services en fonction de la catégorie sélectionnée
  const filteredServices = selectedCategory === 'Tous' 
    ? services 
    : services.filter(service => service.category.includes(selectedCategory));

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
                Une gamme complète de services pharmaceutiques
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#404E55]">
                Nos <span className="text-[#E61B80]">services</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-[#404E55]/80 leading-relaxed max-w-3xl mx-auto">
                Découvrez l'ensemble des services proposés par la Grande Pharmacie des Salines pour prendre soin de votre santé et votre bien-être.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {(['Tous', 'Conseil', 'Préparation', 'Prévention', 'Orthopédie'] as ServiceCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#E61B80] text-white'
                    : 'bg-[#F5F7FA] text-[#404E55]/70 hover:bg-[#E61B80]/10 hover:text-[#E61B80]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 hover:border-[#E61B80]/20 hover:shadow-xl hover:shadow-[#E61B80]/10 transition-all duration-300 ${
                  service.highlight ? 'ring-2 ring-[#E61B80]/20' : ''
                }`}
              >
                <div className="h-12 w-12 rounded-lg bg-[#E61B80]/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                
                {service.highlight && (
                  <div className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-[#E61B80]/10 text-[#E61B80] mb-2">
                    Service phare
                  </div>
                )}
                
                <h3 className="text-lg font-bold mb-2 text-[#404E55]">{service.title}</h3>
                <p className="text-sm text-[#404E55]/80 mb-2">{service.shortDescription}</p>
                <p className="text-sm text-[#404E55]/70">{service.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex space-x-1">
                    {service.category.map((cat, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium text-[#404E55]/50"
                      >
                        {i > 0 ? `, ${cat}` : cat}
                      </span>
                    ))}
                  </div>
                  <PharmacyButton 
                    variant="link" 
                    className="text-[#E61B80] p-0 flex items-center gap-1 group"
                  >
                    <span>En savoir plus</span>
                    <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </PharmacyButton>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#404E55]/70">
                Aucun service trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Booklet Download Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100">
            <div className="grid md:grid-cols-2">
              {/* Image Column */}
              <div className="md:order-2">
                <div className="h-full min-h-[300px] bg-[#F5F7FA] flex items-center justify-center">
                  <div className="w-2/3 aspect-[3/4] bg-white shadow-xl rounded-lg flex items-center justify-center">
                    <p className="text-[#404E55]/70 p-8 text-center">
                      Image de la brochure des services
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="p-8 md:p-12 md:order-1 flex flex-col justify-center">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
                    Téléchargez notre <span className="text-[#E61B80]">guide complet</span>
                  </h2>
                  <p className="text-[#404E55]/70">
                    Retrouvez l'ensemble de nos services et prestations dans notre brochure détaillée. Ce guide vous permettra de découvrir comment nous pouvons vous accompagner dans votre parcours de santé.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <PharmacyButton>
                      Télécharger le PDF
                    </PharmacyButton>
                    <PharmacyButton variant="outline">
                      Recevoir par email
                    </PharmacyButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule a Call Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
                Besoin d'informations <span className="text-[#E61B80]">supplémentaires</span> ?
              </h2>
              <p className="text-[#404E55]/70">
                Notre équipe est disponible pour répondre à toutes vos questions concernant nos services. N'hésitez pas à nous contacter pour un échange personnalisé.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#E61B80]/10 flex items-center justify-center mb-4">
                  <Phone className="text-[#E61B80]" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#404E55]">Par téléphone</h3>
                <p className="text-sm text-[#404E55]/70 mb-4">
                  Échangez directement avec nos pharmaciens pour obtenir des informations précises et personnalisées.
                </p>
                <PharmacyButton 
                  variant="outline" 
                  className="w-full"
                  iconLeft={<Phone size={16} />}
                >
                  04 95 22 28 31
                </PharmacyButton>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#E61B80]/10 flex items-center justify-center mb-4">
                  <Calendar className="text-[#E61B80]" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#404E55]">Prendre rendez-vous</h3>
                <p className="text-sm text-[#404E55]/70 mb-4">
                  Planifiez un rendez-vous avec l'un de nos experts pour bénéficier d'un accompagnement sur-mesure.
                </p>
                <PharmacyButton className="w-full">
                  Réserver un créneau
                </PharmacyButton>
              </div>
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