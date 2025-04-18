
import { JobCard } from "@/components/ui/job-card"
import { SearchBar } from "@/components/ui/search-bar"
import { FilterSidebar } from "@/components/ui/filter-sidebar"
import { Navbar } from "@/components/ui/navbar"
import { StatsCard } from "@/components/ui/stats-card"
import { FeaturedCompanies } from "@/components/ui/featured-companies"
import { Briefcase, Building2, Users, Wallet, ArrowDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    icon: <Briefcase className="w-5 h-5 text-white" />
  },
  {
    label: "Empresas Cadastradas",
    value: "567",
    icon: <Building2 className="w-5 h-5 text-white" />
  },
  {
    label: "Desenvolvedores",
    value: "10k+",
    icon: <Users className="w-5 h-5 text-white" />
  },
  {
    label: "Média Salarial",
    value: "R$ 8.500",
    icon: <Wallet className="w-5 h-5 text-white" />
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      
      {/* Hero Section with Enhanced Animation */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4">
              #1 em Oportunidades de TI
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Vagas Brasil
            </h1>
            <p className="text-xl text-purple-100 mb-10">
              Conectando talentos às melhores oportunidades em tecnologia
            </p>
            <div className="max-w-2xl mx-auto animate-scale-in">
              <SearchBar />
            </div>
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 gap-2">
                Explorar vagas <ArrowDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/30 animate-pulse"
              style={{
                width: Math.random() * 8 + 2 + 'px',
                height: Math.random() * 8 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 8 + 5 + 's',
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <StatsCard
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <div className="container mx-auto px-4 py-6">
        <FeaturedCompanies />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64">
            <div className="sticky top-16">
              <FilterSidebar />
            </div>
          </div>
          
          <main className="flex-1">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-semibold text-gray-900">Vagas em Destaque</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-600">Ordenar por relevância</span>
                </div>
              </div>
              <div className="h-1 w-20 bg-purple-600 mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job, index) => (
                <div key={`${job.company}-${job.title}`} 
                     className="animate-fade-in" 
                     style={{ animationDelay: `${index * 150}ms` }}>
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <section className="bg-purple-50 dark:bg-gray-800/50 py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Fique por dentro das melhores vagas</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Receba em primeira mão as oportunidades que combinam com o seu perfil.</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-4 py-3 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="rounded-l-none">Inscrever</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold">Vagas Brasil</span>
              </div>
              <p className="text-gray-400 mb-4">Conectando talentos e empresas em todo o Brasil</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categorias</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Desenvolvimento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dados</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Para Empresas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Conecte-se</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 Vagas Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
