import { Toggle } from "../ui/toggle"
import { AtSign } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "../ui/dropdown-menu"
import { Badge } from "../ui/badge"

export function PersonFinder() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Toggle value="person"><AtSign/></Toggle>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Badge>Person Finder</Badge>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
                <DropdownMenuItem>Item 3</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}