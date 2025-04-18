
import { Building2, MapPin, Banknote, Calendar, ArrowUpRight, BookmarkPlus, Share2 } from "lucide-react"
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
      "bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{title}</h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
            <Building2 className="w-4 h-4 mr-2" />
            <span className="font-medium">{company}</span>
          </div>
        </div>
        <span className={cn(
          "px-3 py-1 rounded-full text-sm font-medium",
          type === "Remoto" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
          type === "Híbrido" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" :
          "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
        )}>
          {type}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Banknote className="w-4 h-4 mr-2" />
          <span>{salary}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t dark:border-gray-700 pt-4 mt-2">
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{postedAt}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <BookmarkPlus className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button size="sm" className="gap-1">
            Ver vaga
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
