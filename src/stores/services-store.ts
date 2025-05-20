// src/stores/services-store.ts
import { create } from 'zustand';
import { ServiceCategory } from '@/components/sections/services/ServicesFilter';

interface ServicesState {
  selectedCategory: ServiceCategory;
  setSelectedCategory: (category: ServiceCategory) => void;
}

export const useServicesStore = create<ServicesState>((set) => ({
  selectedCategory: 'Tous',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));