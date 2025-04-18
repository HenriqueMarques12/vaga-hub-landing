
import { Card, CardContent } from "./card"

interface StatsCardProps {
  label: string
  value: string
  icon: React.ReactNode
}

export function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-6">
        <div className="p-2 bg-purple-100 rounded-lg mr-4">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
        </div>
      </CardContent>
    </Card>
  )
}
