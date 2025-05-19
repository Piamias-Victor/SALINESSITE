// src/components/layout/Header.tsx
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { PharmacyButton } from "../ui/pharmacy-button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] bg-clip-text text-transparent">
                Grande Pharmacie des Salines
              </span>
            </motion.div>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Accueil", "Présentation", "Services", "Contact"].map((item, index) => (
              <Link 
                key={item} 
                href={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-[#404E55] font-medium text-sm tracking-wide hover:text-[#E61B80] transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E61B80] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* E-Boutique Button */}
            <PharmacyButton 
              size="sm" 
              variant="primary" 
              className="hidden sm:flex"
              iconLeft={<ShoppingBag size={16} />}
            >
              E-Boutique
            </PharmacyButton>
            
            {/* Contact Rapide */}
            <PharmacyButton 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex rounded-full w-10 h-10 p-0 items-center justify-center"
              aria-label="Appeler la pharmacie"
            >
              <Phone size={16} className="text-[#E61B80]" />
            </PharmacyButton>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="flex md:hidden items-center justify-center" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-[#404E55]" />
              ) : (
                <Menu size={24} className="text-[#404E55]" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {["Accueil", "Présentation", "Services", "Contact"].map((item) => (
                  <Link 
                    key={item}
                    href={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                    className="py-2 text-[#404E55] font-medium hover:text-[#E61B80] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <PharmacyButton 
                  variant="primary" 
                  className="mt-2" 
                  iconLeft={<ShoppingBag size={16} />}
                >
                  Visiter notre E-Boutique
                </PharmacyButton>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}