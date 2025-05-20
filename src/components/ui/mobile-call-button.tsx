// src/components/ui/mobile-call-button.tsx
import { Phone } from "lucide-react";

type MobileCallButtonProps = {
  phoneNumber?: string;
};

export const MobileCallButton = ({ 
  phoneNumber = "0495222831" 
}: MobileCallButtonProps) => {
  return (
    <div className="md:hidden fixed bottom-5 right-5 z-50">
      <a 
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E61B80] text-white shadow-lg shadow-[#E61B80]/20"
        aria-label="Appeler la pharmacie"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};