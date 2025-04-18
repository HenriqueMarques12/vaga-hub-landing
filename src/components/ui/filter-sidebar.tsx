
import { Checkbox } from "./checkbox"
import { Label } from "./label"
import { Separator } from "./separator"

const workTypes = ["Remoto", "Híbrido", "Presencial"]
const experienceLevels = ["Estágio", "Júnior", "Pleno", "Sênior"]
const areas = ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps"]
const salaryRanges = [
  "Até R$ 3.000",
  "R$ 3.000 - R$ 6.000",
  "R$ 6.000 - R$ 10.000",
  "Acima de R$ 10.000"
]

export const FilterSidebar = () => {
  return (
    <aside className="w-64 p-6 bg-white border-r min-h-screen sticky top-16">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Tipo de Trabalho</h3>
          <div className="space-y-3">
            {workTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={`type-${type}`} />
                <Label htmlFor={`type-${type}`} className="text-sm text-gray-600">{type}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Experiência</h3>
          <div className="space-y-3">
            {experienceLevels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={`level-${level}`} />
                <Label htmlFor={`level-${level}`} className="text-sm text-gray-600">{level}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Área</h3>
          <div className="space-y-3">
            {areas.map((area) => (
              <div key={area} className="flex items-center space-x-2">
                <Checkbox id={`area-${area}`} />
                <Label htmlFor={`area-${area}`} className="text-sm text-gray-600">{area}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Faixa Salarial</h3>
          <div className="space-y-3">
            {salaryRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox id={`salary-${range}`} />
                <Label htmlFor={`salary-${range}`} className="text-sm text-gray-600">{range}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
