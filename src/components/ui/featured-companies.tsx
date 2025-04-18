import { Card, CardContent } from "./card"
import { Building2, CheckCircle2, Trophy } from "lucide-react"

const companies = [
  {
    name: "TechCorp",
    openPositions: 12,
    location: "São Paulo, SP",
    benefits: ["Plano de Saúde", "Vale Refeição", "Home Office"]
  },
  {
    name: "InnovaSoft",
    openPositions: 8,
    location: "Rio de Janeiro, RJ",
    benefits: ["PLR", "Gympass", "Horário Flexível"]
  },
  {
    name: "DataTech",
    openPositions: 5,
    location: "Curitiba, PR",
    benefits: ["Vale Alimentação", "Plano Odontológico", "Day Off"]
  }
]

export function FeaturedCompanies() {
  return (
    <section className="py-12">
      <div className="flex items-center gap-2 mb-6 animate-fade-in">
        <Trophy className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Empresas em Destaque</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <Card 
            key={company.name} 
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">{company.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{company.location}</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                  {company.openPositions} vagas
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Benefícios</p>
                <div className="space-y-2">
                  {company.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 group">
                      <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
