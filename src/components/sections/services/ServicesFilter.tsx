// src/components/sections/services/ServicesFilter.tsx
import { useState } from "react";
import { useServicesStore } from "@/stores/services-store";

export type ServiceCategory = 'Tous' | 'Conseil' | 'Préparation' | 'Prévention' | 'Orthopédie';

export const ServicesFilter = () => {
  const { selectedCategory, setSelectedCategory } = useServicesStore();

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {(['Tous', 'Conseil', 'Préparation', 'Prévention', 'Orthopédie'] as ServiceCategory[]).map((category) => (
            <FilterButton 
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type FilterButtonProps = {
  category: ServiceCategory;
  isSelected: boolean;
  onClick: () => void;
};

const FilterButton = ({ category, isSelected, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        isSelected
          ? 'bg-[#E61B80] text-white'
          : 'bg-[#F5F7FA] text-[#404E55]/70 hover:bg-[#E61B80]/10 hover:text-[#E61B80]'
      }`}
    >
      {category}
    </button>
  );
};