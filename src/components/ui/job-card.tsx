
import { Building2, MapPin, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Remoto" | "Híbrido" | "Presencial";
  tags: string[];
  className?: string;
}

export const JobCard = ({
  title,
  company,
  location,
  salary,
  type,
  tags,
  className,
}: JobCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow", className)}>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      
      <div className="flex items-center text-gray-600 mb-2">
        <Building2 className="w-4 h-4 mr-2" />
        <span>{company}</span>
      </div>
      
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{location}</span>
      </div>
      
      <div className="flex items-center text-gray-600 mb-4">
        <Banknote className="w-4 h-4 mr-2" />
        <span>{salary}</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className={cn(
          "px-3 py-1 rounded-full text-sm font-medium",
          type === "Remoto" ? "bg-green-100 text-green-800" :
          type === "Híbrido" ? "bg-blue-100 text-blue-800" :
          "bg-purple-100 text-purple-800"
        )}>
          {type}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
