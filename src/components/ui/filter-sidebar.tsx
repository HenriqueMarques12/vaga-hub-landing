
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const workTypes = ["Remoto", "Híbrido", "Presencial"];
const experienceLevels = ["Estágio", "Júnior", "Pleno", "Sênior"];
const areas = ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps"];

export const FilterSidebar = () => {
  return (
    <aside className="w-64 p-6 bg-white border-r">
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-gray-900">Tipo de Trabalho</h3>
        <div className="space-y-3">
          {workTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={`type-${type}`} />
              <Label htmlFor={`type-${type}`}>{type}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-gray-900">Experiência</h3>
        <div className="space-y-3">
          {experienceLevels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox id={`level-${level}`} />
              <Label htmlFor={`level-${level}`}>{level}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-gray-900">Área</h3>
        <div className="space-y-3">
          {areas.map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox id={`area-${area}`} />
              <Label htmlFor={`area-${area}`}>{area}</Label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
