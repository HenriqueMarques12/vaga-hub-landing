
import { Search } from "lucide-react";
import { Input } from "./input";

export const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        className="pl-10 w-full max-w-2xl bg-white"
        placeholder="Buscar vagas, empresas ou palavras-chave..."
      />
    </div>
  );
};
