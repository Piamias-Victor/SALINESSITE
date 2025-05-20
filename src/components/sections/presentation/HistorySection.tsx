// src/components/sections/presentation/HistorySection.tsx
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { PharmacyButton } from "@/components/ui/pharmacy-button";

export const HistorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <HistoryImage />
          <HistoryContent />
        </div>
      </div>
    </section>
  );
};

const HistoryImage = () => {
  return (
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
  );
};

const HistoryContent = () => {
  return (
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
      
      <HistoryText />
      
      <div className="flex pt-4">
        <PharmacyButton 
          variant="outline" 
          iconLeft={<Calendar size={18} />}
        >
          Prendre rendez-vous
        </PharmacyButton>
      </div>
    </motion.div>
  );
};

const HistoryText = () => {
  return (
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
  );
};