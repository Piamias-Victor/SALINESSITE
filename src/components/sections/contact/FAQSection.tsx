// src/components/sections/contact/FAQSection.tsx
import { motion } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const FAQSection = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader />
          <FAQList />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = () => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
        Questions <span className="text-[#E61B80]">fréquentes</span>
      </h2>
      <p className="text-[#404E55]/70 mt-2">
        Découvrez les réponses aux questions les plus posées
      </p>
    </div>
  );
};

const FAQList = () => {
  const faqItems = [
    {
      question: "Comment prendre rendez-vous pour un service spécifique ?",
      answer: "Vous pouvez prendre rendez-vous par téléphone au 04 95 22 28 31, directement à la pharmacie ou via le formulaire de contact de ce site en précisant le service souhaité."
    },
    {
      question: "Faites-vous des livraisons à domicile ?",
      answer: "Oui, nous proposons un service de livraison à domicile pour certains produits et médicaments. Contactez-nous par téléphone pour plus d'informations sur les conditions et les zones desservies."
    },
    {
      question: "Comment réserver un produit en rupture de stock ?",
      answer: "Vous pouvez nous contacter par téléphone ou via le formulaire de contact pour réserver un produit. Nous vous informerons dès que celui-ci sera disponible et le mettrons de côté pour vous."
    },
    {
      question: "Les consultations avec un pharmacien sont-elles payantes ?",
      answer: "Non, les conseils et consultations avec nos pharmaciens sont gratuits. Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans votre parcours de santé."
    }
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <FAQItem 
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
        />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
    >
      <h3 className="font-semibold text-[#404E55] mb-2">{question}</h3>
      <p className="text-sm text-[#404E55]/70">{answer}</p>
    </motion.div>
  );
};