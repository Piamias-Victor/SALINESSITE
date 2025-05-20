// src/components/sections/contact/ContactHero.tsx
import { motion } from "framer-motion";

export const ContactHero = () => {
  return (
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
              À votre écoute 6 jours sur 7
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#404E55]">
              <span className="text-[#E61B80]">Contactez</span> notre équipe
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-[#404E55]/80 leading-relaxed max-w-3xl mx-auto">
              Nous sommes disponibles pour répondre à vos questions et vous accompagner dans vos besoins pharmaceutiques.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};