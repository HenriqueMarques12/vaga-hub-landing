
import { Building2, MapPin, Banknote, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface JobCardProps {
  title: string
  company: string
  location: string
  salary: string
  type: "Remoto" | "Híbrido" | "Presencial"
  tags: string[]
  postedAt?: string
  className?: string
}

export const JobCard = ({
  title,
  company,
  location,
  salary,
  type,
  tags,
  postedAt = "Há 2 dias",
  className,
}: JobCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{company}</span>
          </div>
        </div>
        <span className={cn(
          "px-3 py-1 rounded-full text-sm font-medium",
          type === "Remoto" ? "bg-green-100 text-green-800" :
          type === "Híbrido" ? "bg-blue-100 text-blue-800" :
          "bg-purple-100 text-purple-800"
        )}>
          {type}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Banknote className="w-4 h-4 mr-2" />
          <span>{salary}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{postedAt}</span>
        </div>
        <Button>Ver vaga</Button>
      </div>
    </div>
  );
};
