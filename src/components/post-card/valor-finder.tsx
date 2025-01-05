import { Toggle } from "../ui/toggle"
import { Medal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "../ui/dropdown-menu"
import { Badge } from "../ui/badge"
import { Heart, Dumbbell } from "lucide-react"

export function ValorFinder() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Toggle value="valor"><Medal/></Toggle>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2 p-3">
                <Badge className="shadow-none text-sky-900 bg-sky-100 hover:bg-sky-200">Miramos o topo</Badge>
                <Badge className="shadow-none text-orange-900 bg-orange-100 hover:bg-orange-200">Jogamos Entrosados</Badge>
                <Badge className="shadow-none text-teal-900 bg-teal-100 hover:bg-teal-200">Jogamos Limpo</Badge>
                <Badge className="shadow-none text-violet-900 bg-violet-100 hover:bg-violet-200">Arriscamos novas manobras <Dumbbell className="w-3 h-3 ml-2"/></Badge>
                <Badge className="shadow-none text-pink-900 bg-pink-100 hover:bg-pink-200">Competimos com Paixão <Heart className="w-3 h-3 ml-2"/></Badge>
                <Badge className="shadow-none text-lime-900 bg-lime-100 hover:bg-lime-200">Corremos com os Clientes</Badge>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}