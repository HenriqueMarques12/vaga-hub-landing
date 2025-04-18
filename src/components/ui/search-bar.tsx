
import { Search, MapPin, Briefcase } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

export const SearchBar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 flex flex-col md:flex-row">
      <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r dark:border-gray-700 p-2">
        <Search className="text-gray-400 w-5 h-5 mr-2" />
        <Input
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm"
          placeholder="Cargo, habilidade ou empresa"
        />
      </div>
      
      <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r dark:border-gray-700 p-2">
        <MapPin className="text-gray-400 w-5 h-5 mr-2" />
        <Input
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm"
          placeholder="Cidade ou estado"
        />
      </div>
      
      <div className="flex-1 flex items-center p-2">
        <Briefcase className="text-gray-400 w-5 h-5 mr-2" />
        <Input
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm"
          placeholder="Tipo de trabalho"
        />
      </div>
      
      <Button className="w-full md:w-auto mt-2 md:mt-0 md:ml-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
        Buscar Vagas
      </Button>
    </div>
  );
};
