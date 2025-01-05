import { AppSidebar } from "@/components/app-sidebar"
import userAvatar from '@/assets/user.png'
import imageMarket from '@/assets/bola-jogo.png'

import { EllipsisVertical, Heart, MessageSquare, Dumbbell} from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { PostCard } from "./components/post-card/post-card"
import { PointsCard } from "./components/points-card"

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
              <PostCard/>
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
              <PointsCard/>
            </div>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

