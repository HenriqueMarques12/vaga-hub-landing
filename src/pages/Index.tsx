
import { JobCard } from "@/components/ui/job-card"
import { SearchBar } from "@/components/ui/search-bar"
import { FilterSidebar } from "@/components/ui/filter-sidebar"
import { Navbar } from "@/components/ui/navbar"

// Dados mockados para exemplo
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Encontre sua próxima oportunidade em tecnologia
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Conectamos você às melhores empresas de tecnologia do Brasil
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </div>
          
          <div className="flex justify-center gap-4 text-white">
            <p className="text-purple-100">
              <span className="font-semibold text-white">1.234</span> vagas disponíveis
            </p>
            <span className="text-purple-300">•</span>
            <p className="text-purple-100">
              <span className="font-semibold text-white">567</span> empresas cadastradas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <FilterSidebar />
          
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Vagas em destaque
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
