// src/components/layout/Footer.tsx
import Link from "next/link";
import { PharmacyButton } from "../ui/pharmacy-button";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] bg-clip-text text-transparent">
              Grande Pharmacie des Salines
            </h2>
            <p className="text-[#404E55]/80 max-w-xs">
              Notre engagement : vous accompagner pour votre santé et votre bien-être au quotidien avec expertise et bienveillance.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#404E55] hover:text-[#E61B80] hover:border-[#E61B80]/20 transition-colors duration-200">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#404E55] hover:text-[#E61B80] hover:border-[#E61B80]/20 transition-colors duration-200">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#404E55] hover:text-[#E61B80] hover:border-[#E61B80]/20 transition-colors duration-200">
                <Twitter size={18} />
              </Link>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-[#404E55]">À propos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/presentation" className="text-[#404E55]/70 hover:text-[#E61B80] transition-colors text-sm">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="/presentation" className="text-[#404E55]/70 hover:text-[#E61B80] transition-colors text-sm">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link href="/presentation" className="text-[#404E55]/70 hover:text-[#E61B80] transition-colors text-sm">
                  Nos valeurs
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-[#404E55]">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-[#404E55]/70 hover:text-[#E61B80] transition-colors text-sm">
                  Conseil personnalisé
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#404E55]/70 hover:text-[#E61B80] transition-colors text-sm">
                  Préparations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#404E55]/70 hover:text-[#E61B80] transition-colors text-sm">
                  Vaccination
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#404E55]">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                <span className="text-sm text-[#404E55]/70">Parking FNAC, Cr Prince Impérial, 20090 Ajaccio</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                <span className="text-sm text-[#404E55]/70">contact@grandepharmaciedessalines.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                <span className="text-sm text-[#404E55]/70">04 95 22 28 31</span>
              </div>
            </div>
            
            {/* Horaires résumés dans le footer */}
            <div className="pt-2">
              <div className="flex items-start space-x-3">
                <Clock size={18} className="flex-shrink-0 mt-0.5 text-[#E61B80]" />
                <div className="text-sm text-[#404E55]/70">
                  <p className="font-medium text-[#404E55]">Horaires</p>
                  <p>Lun - Ven: 8:30 - 20:00</p>
                  <p>Samedi: 9:00 - 19:00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="pt-4">
              <PharmacyButton 
                variant="primary" 
                size="default"
                className="w-full sm:w-auto"
                iconLeft={<Phone size={16} />}
              >
                Nous contacter
              </PharmacyButton>
            </div>
          </div>
        </div>
        
        <div className="pt-10 mt-10 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#404E55]/60 text-center md:text-left">
              © {new Date().getFullYear()} Grande Pharmacie des Salines. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-sm text-[#404E55]/60 hover:text-[#E61B80]">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-sm text-[#404E55]/60 hover:text-[#E61B80]">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Footer Additions */}
      <div className="md:hidden bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2">
            <a 
              href="tel:0495222831" 
              className="flex flex-col items-center justify-center p-2 text-[#404E55] hover:text-[#E61B80]"
            >
              <Phone size={20} className="mb-1" />
              <span className="text-xs">Appeler</span>
            </a>
            <a 
              href="https://maps.google.com/?q=Parking+FNAC,+Cr+Prince+Impérial,+20090+Ajaccio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 text-[#404E55] hover:text-[#E61B80]"
            >
              <MapPin size={20} className="mb-1" />
              <span className="text-xs">Itinéraire</span>
            </a>
            <Link 
              href="/contact" 
              className="flex flex-col items-center justify-center p-2 text-[#404E55] hover:text-[#E61B80]"
            >
              <Mail size={20} className="mb-1" />
              <span className="text-xs">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}