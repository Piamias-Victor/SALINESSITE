// src/components/sections/presentation/ValuesSection.tsx
import { motion } from "framer-motion";
import { Award, Heart, Phone, MapPin, BookOpen, Users } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export const ValuesSection = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <ValuesGrid />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  return (
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
  );
};

const ValuesGrid = () => {
  const values = [
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
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
      {values.map((value, index) => (
        <ValueCard 
          key={index}
          title={value.title}
          description={value.description}
          icon={value.icon}
          index={index}
        />
      ))}
    </div>
  );
};

const ValueCard = ({ title, description, icon, index }: ValueCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100 hover:border-[#E61B80]/20 hover:shadow-xl hover:shadow-[#E61B80]/10 transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-lg bg-[#E61B80]/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-[#404E55]">{title}</h3>
      <p className="text-sm text-[#404E55]/70">{description}</p>
    </motion.div>
  );
};