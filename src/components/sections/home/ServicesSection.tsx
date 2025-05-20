// src/components/sections/home/ServicesSection.tsx
import { motion } from "framer-motion";
import { Users, Star, Heart } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <ServiceCards />
        <MobileViewAllButton />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  return (
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
  );
};

const ServiceCards = () => {
  const services = [
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
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          index={index}
        />
      ))}
    </div>
  );
};

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-5 md:p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 hover:border-[#E61B80]/20 hover:shadow-xl hover:shadow-[#E61B80]/10 transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-lg bg-[#E61B80]/10 flex items-center justify-center mb-4 md:mb-6">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#404E55]">{title}</h3>
      <p className="text-sm md:text-base text-[#404E55]/70">{description}</p>
      <div className="mt-4 md:mt-6">
        <Link href="/services">
          <PharmacyButton variant="link" className="text-[#E61B80] p-0">
            En savoir plus
          </PharmacyButton>
        </Link>
      </div>
    </motion.div>
  );
};

const MobileViewAllButton = () => {
  return (
    <div className="mt-8 text-center md:hidden">
      <Link href="/services">
        <PharmacyButton>
          Tous nos services
        </PharmacyButton>
      </Link>
    </div>
  );
};