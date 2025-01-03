import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"

import userAvatar from '@/assets/user.png'

import { SendHorizontal, Medal, Smile, AtSign, Coins } from "lucide-react"

export function PostCard() {
    return(
        <Card className="p-4 rounded-2xl shadow-none mb-4">
            <CardContent className="p-0 pb-6 flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={userAvatar}/>
                    <AvatarFallback>TG</AvatarFallback>
                </Avatar>
                <Textarea className="shadow-none"/>
            </CardContent>
            <CardFooter className="flex justify-between p-0">
                <div>
                    <ToggleGroup type="single" size="sm">
                        <ToggleGroupItem value="emoji"><Smile/></ToggleGroupItem>
                        <ToggleGroupItem value="person"><AtSign/></ToggleGroupItem>
                        <ToggleGroupItem value="valor"><Medal/></ToggleGroupItem>
                        <ToggleGroupItem value="coins"><Coins/></ToggleGroupItem>
                    </ToggleGroup>
                </div>
                <div>
                    <Button size="sm" className="justify-end bg-blue-600 hover:bg-blue-700">Postar<SendHorizontal/></Button>
                </div>
            </CardFooter>
        </Card>
    )
}
