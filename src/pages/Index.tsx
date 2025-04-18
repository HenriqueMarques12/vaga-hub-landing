import { JobCard } from "@/components/ui/job-card"
import { SearchBar } from "@/components/ui/search-bar"
import { FilterSidebar } from "@/components/ui/filter-sidebar"
import { Navbar } from "@/components/ui/navbar"
import { StatsCard } from "@/components/ui/stats-card"
import { FeaturedCompanies } from "@/components/ui/featured-companies"
import { Briefcase, Building2, Users, Wallet } from "lucide-react"

const jobs = [
  {
    title: "Desenvolvedor Frontend React",
    company: "TechCorp",
    location: "São Paulo, SP",
    salary: "R$ 8.000 - R$ 12.000",
    type: "Remoto" as const,
    tags: ["React", "TypeScript", "Tailwind"],
    postedAt: "Há 2 dias",
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "InnovaSoft",
    location: "Rio de Janeiro, RJ",
    salary: "R$ 10.000 - R$ 15.000",
    type: "Híbrido" as const,
    tags: ["Node.js", "React", "PostgreSQL"],
    postedAt: "Há 1 dia",
  },
  {
    title: "Desenvolvedor Backend Python",
    company: "DataTech",
    location: "Curitiba, PR",
    salary: "R$ 7.000 - R$ 11.000",
    type: "Presencial" as const,
    tags: ["Python", "Django", "AWS"],
    postedAt: "Há 3 dias",
  },
];

const stats = [
  {
    label: "Vagas Disponíveis",
    value: "1.234+",
    icon: <Briefcase className="w-5 h-5 text-purple-600" />
  },
  {
    label: "Empresas Cadastradas",
    value: "567",
    icon: <Building2 className="w-5 h-5 text-purple-600" />
  },
  {
    label: "Desenvolvedores",
    value: "10k+",
    icon: <Users className="w-5 h-5 text-purple-600" />
  },
  {
    label: "Média Salarial",
    value: "R$ 8.500",
    icon: <Wallet className="w-5 h-5 text-purple-600" />
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Encontre sua próxima oportunidade em tecnologia
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              As melhores vagas em tecnologia das principais empresas do Brasil
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatsCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <div className="container mx-auto px-4">
        <FeaturedCompanies />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <FilterSidebar />
          
          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-600" />
                Vagas em Destaque
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job) => (
                <JobCard
                  key={`${job.company}-${job.title}`}
                  {...job}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
