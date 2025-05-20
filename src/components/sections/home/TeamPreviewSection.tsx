// src/components/sections/home/TeamPreviewSection.tsx
import { motion } from "framer-motion";
import { PharmacyButton } from "@/components/ui/pharmacy-button";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export const TeamPreviewSection = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <TeamGrid />
        <ViewMoreButton />
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
  );
};

const TeamGrid = () => {
  const teamMembers: TeamMember[] = [
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
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
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
  );
};

const ViewMoreButton = () => {
  return (
    <div className="mt-8 text-center">
      <Link href="/presentation">
        <PharmacyButton variant="outline">
          En savoir plus sur notre équipe
        </PharmacyButton>
      </Link>
    </div>
  );
};