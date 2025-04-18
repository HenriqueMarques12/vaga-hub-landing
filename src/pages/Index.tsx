
import { JobCard } from "@/components/ui/job-card";
import { SearchBar } from "@/components/ui/search-bar";
import { FilterSidebar } from "@/components/ui/filter-sidebar";

// Dados mockados para exemplo
const jobs = [
  {
    title: "Desenvolvedor Frontend React",
    company: "TechCorp",
    location: "São Paulo, SP",
    salary: "R$ 8.000 - R$ 12.000",
    type: "Remoto" as const,
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "InnovaSoft",
    location: "Rio de Janeiro, RJ",
    salary: "R$ 10.000 - R$ 15.000",
    type: "Híbrido" as const,
    tags: ["Node.js", "React", "PostgreSQL"],
  },
  {
    title: "Desenvolvedor Backend Python",
    company: "DataTech",
    location: "Curitiba, PR",
    salary: "R$ 7.000 - R$ 11.000",
    type: "Presencial" as const,
    tags: ["Python", "Django", "AWS"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Encontre sua próxima oportunidade
          </h1>
          <p className="text-xl text-center mb-8 text-purple-100">
            Conectamos talentos às melhores empresas de tecnologia
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <FilterSidebar />
          
          <main className="flex-1">
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
