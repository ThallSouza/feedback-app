import { AppSidebar } from "@/components/app-sidebar"
import userAvatar from '@/assets/user.png'
import imageMarket from '@/assets/bola-jogo.png'

import { SendHorizontal, Smile, AtSign, Medal, Coins, Plus, EllipsisVertical, Heart, MessageSquare, Dumbbell} from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Textarea } from "./components/ui/textarea"
import { Button } from "./components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group"

export function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Jogo Aberto</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
          <div className="flex-col gap-2">
            <h1 className="text-3xl font-bold">Boas vindas Thales Souza</h1>
            <p>Bora construir um ambiente de trabalho ainda mais interessante?</p>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="col-span-2">
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
              <Card className="p-4 rounded-2xl shadow-none mb-4">
                <CardHeader className="flex-row justify-between gap-2 p-0 items-center">
                  <div className="flex gap-2 items-center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={userAvatar}/>
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <div className="flex-col">
                      <p className="text-sm font-bold">Matheus Bedeschi</p>
                      <p className="text-xs mb-1.5 text-slate-500">Product Designer III</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center justify-between">
                    <p className="px-1.5 h-5 items-center font-semibold text-xs bg-blue-50 text-blue-800 rounded-md">+10 pontos</p>
                    <div className="flex -space-x-4 ">
                      <Avatar className="w-8 h-8 border border-white -gap-2">
                        <AvatarImage src={userAvatar}/>
                        <AvatarFallback>TG</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-8 h-8 border border-white">
                        <AvatarImage src={userAvatar}/>
                        <AvatarFallback>TG</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-8 h-8 border border-white">
                        <AvatarImage src={userAvatar}/>
                        <AvatarFallback>TG</AvatarFallback>
                      </Avatar>
                    </div>
                    <EllipsisVertical className="w-4 h-4"/>
                  </div>
                </CardHeader>
                <CardContent className="py-4 px-0">
                  <text>Agradeço muito pela ajuda com as novas telas atendimento usando IA, essa entrega promete!</text>
                </CardContent>
                <CardFooter className="flex pt-2 ps-0 pe-0 pb-0 justify-between">
                  <div className="flex gap-8">
                    <div className="flex gap-2 items-center"><Heart className="w-5 h-5 text-slate-500"/><p className="text-sm font-semibold text-slate-500">3</p></div>
                    <div className="flex gap-2 items-center"><MessageSquare className="w-5 h-5 text-slate-500"/><p className="text-sm font-semibold text-slate-500">1</p></div>
                  </div>
                  <div className="flex gap-2 items-center px-1.5 h-5 bg-violet-50 rounded-md text-violet-800"><Dumbbell className="w-3 h-3"/><p className="text-xs font-semibold">Arriscamos novas manobras</p></div>
                  <div><text className="text-xs text-slate-500">18 de novembro 2024</text></div>
                </CardFooter>
              </Card>
              
            </div>
            
            <div className="col-span-1">
              <img src={imageMarket} alt="Image" className="rounded-2xl object-cover mb-4" />
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
            </div>

          </div>          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

