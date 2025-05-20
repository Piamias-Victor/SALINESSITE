// src/components/sections/services/ServicesList.tsx
import { motion } from "framer-motion";
import { 
  Heart, 
  Pill, 
  Stethoscope, 
  Thermometer, 
  Activity, 
  Droplet, 
  Baby, 
  Eye, 
  Leaf, 
  MoveRight 
} from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import { useServicesStore } from "@/stores/services-store";
import { ServiceCategory } from "./ServicesFilter";

export interface Service {
  title: string;
  description: string;
  shortDescription: string;
  icon: React.ReactNode;
  category: ServiceCategory[];
  highlight?: boolean;
}

export const ServicesList = () => {
  const { selectedCategory } = useServicesStore();
  const services = useServices();
  
  // Filtrer les services en fonction de la catégorie sélectionnée
  const filteredServices = selectedCategory === 'Tous' 
    ? services 
    : services.filter(service => service.category.includes(selectedCategory));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
            />
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
  );
};

const useServices = (): Service[] => {
  return [
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
};

type ServiceCardProps = {
  service: Service;
  index: number;
};

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div 
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
      
      <ServiceCardFooter service={service} />
    </motion.div>
  );
};

type ServiceCardFooterProps = {
  service: Service;
};

const ServiceCardFooter = ({ service }: ServiceCardFooterProps) => {
  return (
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
  );
};