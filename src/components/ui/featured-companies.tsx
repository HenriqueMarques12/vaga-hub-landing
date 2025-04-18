
import { Card, CardContent } from "./card"
import { Building2, CheckCircle2, Trophy, Users, Star, MapPin } from "lucide-react"
import { Button } from "./button"

const companies = [
  {
    name: "TechCorp",
    openPositions: 12,
    location: "São Paulo, SP",
    rating: 4.7,
    employees: "500-1000",
    benefits: ["Plano de Saúde", "Vale Refeição", "Home Office"]
  },
  {
    name: "InnovaSoft",
    openPositions: 8,
    location: "Rio de Janeiro, RJ",
    rating: 4.5,
    employees: "100-250",
    benefits: ["PLR", "Gympass", "Horário Flexível"]
  },
  {
    name: "DataTech",
    openPositions: 5,
    location: "Curitiba, PR",
    rating: 4.8,
    employees: "50-100",
    benefits: ["Vale Alimentação", "Plano Odontológico", "Day Off"]
  }
]

export function FeaturedCompanies() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Empresas em Destaque</h2>
        </div>
        <Button variant="outline" size="sm">Ver todas</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <Card 
            key={company.name} 
            className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="h-20 bg-gradient-to-r from-purple-600 to-blue-600 relative">
              <div className="absolute -bottom-8 left-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-md">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <CardContent className="pt-10 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{company.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">{company.location}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">
                  {company.openPositions} vagas
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{company.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="w-3.5 h-3.5" />
                  <span>{company.employees} funcionários</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Benefícios</p>
                <div className="space-y-2">
                  {company.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 group">
                      <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">Ver perfil da empresa</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
