// src/components/ui/opening-hours.tsx
import { Clock } from "lucide-react";

interface DaySchedule {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export function OpeningHours({ compact = false }) {
  const schedule: DaySchedule[] = [
    { day: "Lundi", hours: "8:30 - 20:00" },
    { day: "Mardi", hours: "8:30 - 20:00" },
    { day: "Mercredi", hours: "8:30 - 20:00" },
    { day: "Jeudi", hours: "8:30 - 20:00" },
    { day: "Vendredi", hours: "8:30 - 20:00" },
    { day: "Samedi", hours: "9:00 - 19:00" },
    { day: "Dimanche", hours: "", isClosed: true },
  ];

  // Déterminer le jour actuel
  const today = new Date().getDay(); // 0 = Dimanche, 1 = Lundi, etc.
  const todayIndex = today === 0 ? 6 : today - 1; // Ajuster pour notre tableau (Lundi = 0)

  if (compact) {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Clock size={18} className="text-[#E61B80]" />
          <span className="font-medium text-[#404E55]">Aujourd'hui :</span>
          <span className="text-[#404E55]/80">
            {schedule[todayIndex].isClosed ? "Fermé" : schedule[todayIndex].hours}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center space-x-3 mb-4">
        <Clock size={20} className="text-[#E61B80]" />
        <h3 className="text-lg font-semibold text-[#404E55]">Horaires d'ouverture</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {schedule.map((item, index) => (
          <div 
            key={item.day}
            className={`flex justify-between items-center py-2 px-3 rounded-lg ${
              index === todayIndex 
                ? "bg-[#E61B80]/10 text-[#E61B80] font-medium" 
                : "text-[#404E55]/80 hover:bg-gray-50"
            }`}
          >
            <span>{item.day}</span>
            <span>{item.isClosed ? "Fermé" : item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}