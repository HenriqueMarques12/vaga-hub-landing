
import { Card, CardContent } from "./card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  label: string
  value: string
  icon: React.ReactNode
}

export function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl mr-4 text-white transform hover:rotate-12 transition-transform">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</h4>
          </div>
        </div>
        <div className="mt-4 h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className={cn("h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-600 animate-pulse")}
               style={{ width: '70%' }}></div>
        </div>
      </CardContent>
    </Card>
  )
}
