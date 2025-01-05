import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

import userAvatar from '@/assets/user.png'

import { SendHorizontal } from "lucide-react"
import { IconFinder } from "./icon-finder"
import { PersonFinder } from "./person-finder"
import { ValorFinder } from "./valor-finder"
import { PointFinder } from "./point-finder"

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
                    <IconFinder/>
                    <PersonFinder/>
                    <ValorFinder/>
                    <PointFinder/>
                </div>
                <div>
                    <Button size="sm" className="justify-end bg-blue-600 hover:bg-blue-700">Postar<SendHorizontal/></Button>
                </div>
            </CardFooter>
        </Card>
    )
}
