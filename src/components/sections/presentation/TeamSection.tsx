// src/components/sections/presentation/TeamSection.tsx
import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  photo: string;
};

export const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <TeamGrid />
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
  );
};

const TeamGrid = () => {
  const teamMembers: TeamMember[] = [
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
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
      {teamMembers.map((member, index) => (
        <TeamMemberCard 
          key={index}
          member={member}
          index={index}
        />
      ))}
    </div>
  );
};

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
};

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100 hover:shadow-xl hover:shadow-[#E61B80]/10 transition-all duration-300"
    >
      <TeamMemberPhoto member={member} />
      <TeamMemberInfo member={member} />
    </motion.div>
  );
};

const TeamMemberPhoto = ({ member }: { member: TeamMember }) => {
  return (
    <div className="aspect-square bg-gray-200 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-[#404E55]/70">Photo</p>
      </div>
    </div>
  );
};

const TeamMemberInfo = ({ member }: { member: TeamMember }) => {
  return (
    <div className="p-5">
      <h3 className="font-bold text-[#404E55] text-lg">{member.name}</h3>
      <p className="text-[#E61B80] text-sm font-medium mb-2">{member.role}</p>
      <p className="text-sm text-[#404E55]/70">{member.description}</p>
    </div>
  );
};