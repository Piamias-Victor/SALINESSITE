// src/components/sections/presentation/ExpertiseSection.tsx
import { motion } from "framer-motion";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import Link from "next/link";

interface ExpertiseItemProps {
  title: string;
  description: string;
}

export const ExpertiseSection = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ExpertiseContent />
          <ExpertiseImage />
        </div>
      </div>
    </section>
  );
};

const ExpertiseContent = () => {
  return (
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
      
      <ExpertiseIntro />
      <ExpertiseList />
      <CallToAction />
    </motion.div>
  );
};

const ExpertiseIntro = () => {
  return (
    <div className="space-y-4 text-[#404E55]/80">
      <p>
        La Grande Pharmacie des Salines dispose d'expertises spécifiques dans plusieurs domaines clés de la santé, nous permettant de vous offrir un accompagnement complet et personnalisé.
      </p>
    </div>
  );
};

const ExpertiseList = () => {
  const expertiseItems: ExpertiseItemProps[] = [
    {
      title: "Dermocosmétique",
      description: "Analyse de peau personnalisée et recommandations adaptées à vos besoins spécifiques."
    },
    {
      title: "Phytothérapie",
      description: "Conseils en plantes médicinales et médecines naturelles pour compléter vos traitements."
    },
    {
      title: "Orthopédie",
      description: "Large gamme de matériel médical et conseils pour votre confort quotidien."
    },
    {
      title: "Préparations magistrales",
      description: "Élaboration de préparations sur mesure selon les prescriptions médicales."
    }
  ];

  return (
    <div className="space-y-4">
      {expertiseItems.map((item, index) => (
        <ExpertiseItem 
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

const ExpertiseItem = ({ title, description }: ExpertiseItemProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-semibold text-[#404E55] mb-2">{title}</h3>
      <p className="text-sm text-[#404E55]/70">{description}</p>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="pt-4">
      <Link href="/services">
        <PharmacyButton>
          Découvrir tous nos services
        </PharmacyButton>
      </Link>
    </div>
  );
};

const ExpertiseImage = () => {
  return (
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
  );
};