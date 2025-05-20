// src/components/sections/services/ServicesBooklet.tsx
import { PharmacyButton } from "@/components/ui/pharmacy-button";

export const ServicesBooklet = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100">
          <div className="grid md:grid-cols-2">
            <BookletImage />
            <BookletContent />
          </div>
        </div>
      </div>
    </section>
  );
};

const BookletImage = () => {
  return (
    <div className="md:order-2">
      <div className="h-full min-h-[300px] bg-[#F5F7FA] flex items-center justify-center">
        <div className="w-2/3 aspect-[3/4] bg-white shadow-xl rounded-lg flex items-center justify-center">
          <p className="text-[#404E55]/70 p-8 text-center">
            Image de la brochure des services
          </p>
        </div>
      </div>
    </div>
  );
};

const BookletContent = () => {
  return (
    <div className="p-8 md:p-12 md:order-1 flex flex-col justify-center">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#404E55]">
          Téléchargez notre <span className="text-[#E61B80]">guide complet</span>
        </h2>
        <p className="text-[#404E55]/70">
          Retrouvez l'ensemble de nos services et prestations dans notre brochure détaillée. Ce guide vous permettra de découvrir comment nous pouvons vous accompagner dans votre parcours de santé.
        </p>
        <BookletButtons />
      </div>
    </div>
  );
};

const BookletButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <PharmacyButton>
        Télécharger le PDF
      </PharmacyButton>
      <PharmacyButton variant="outline">
        Recevoir par email
      </PharmacyButton>
    </div>
  );
};