import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import userAvatar from '@/assets/user.png'

import { Plus } from "lucide-react"

export function PointsCard() {
    return(
        <Card className=" flex-col rounded-2xl gap-4 p-4 shadow-none mb-4">
            <CardHeader className=" flex-col gap-2 p-0 mb-4">
                <CardTitle className="font-bold">Melhor pontuação</CardTitle>
            </CardHeader>
            <CardContent className="flex-col gap-4 p-0">   
                <div className="flex items-center gap-2 mb-4">
                <p className="px-1.5 bg-yellow-500 rounded-md font-bold">1</p>
                <Avatar className="w-6 h-6">
                    <AvatarImage src={userAvatar}/>
                    <AvatarFallback>TG</AvatarFallback>
                </Avatar>
                    <div className="flex-col">
                        <p className="text-sm font-bold">Matheus Bedeschi</p>
                        <p className="text-xs text-slate-500">625 pontos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <p className="px-1.5 bg-zinc-400 rounded-md font-bold">2</p>
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={userAvatar}/>
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <div className="flex-col">
                      <p className="text-sm font-bold">Ayrton Gutierrez</p>
                      <p className="text-xs text-slate-500">598 pontos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <p className="px-1.5 bg-orange-700 rounded-md font-bold">3</p>
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={userAvatar}/>
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <div className="flex-col">
                      <p className="text-sm font-bold">Lucas Moschione</p>
                      <p className="text-xs text-slate-500">490 pontos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <p className="px-1.5 bg-slate-200 rounded-md font-bold">4</p>
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={userAvatar}/>
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <div className="flex-col">
                      <p className="text-sm font-bold">Thales Souza</p>
                      <p className="text-xs text-slate-500">485 pontos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <p className="px-1.5 bg-slate-200 rounded-md font-bold">5</p>
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={userAvatar}/>
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <div className="flex-col">
                      <p className="text-sm font-bold">Thaís Mendonça</p>
                      <p className="text-xs text-slate-500">430 pontos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <p className="px-1.5 bg-slate-200 rounded-md font-bold">6</p>
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={userAvatar}/>
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <div className="flex-col">
                      <p className="text-sm font-bold">Carolina Kokumai</p>
                      <p className="text-xs text-slate-500">598 pontos</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button variant="link" className="text-blue-500 hover:text-blue-600">Ver mais<Plus/></Button>
                  </div>
                </CardContent>
              </Card>
    )
}
