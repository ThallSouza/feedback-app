"use client"
import * as React from "react"
import {
  AudioWaveform,
  ChartPie,
  MessagesSquare,
  Command,
  GalleryVerticalEnd,
  ChartNoAxesCombined,
  Volleyball,
  Store,
} from "lucide-react"

import userAvatar from '@/assets/user.png'

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
      name: "Thales Souza",
      email: "thales.souza@mail.com",
      avatar: userAvatar,
    },
    teams: [
      {
        name: "Grupo SBF",
        logo: GalleryVerticalEnd,
        plan: "",
      },
      {
        name: "Studio 78",
        logo: AudioWaveform,
        plan: "",
      },
      {
        name: "Fit Dance",
        logo: Command,
        plan: "",
      },
    ],
    navMain: [
      {
        title: "Jogo Aberto",
        url: "#",
        icon: MessagesSquare,
        isActive: true,
        items:[],
      },
      {
        title: "Bola em Jogo",
        url: "#",
        icon: Volleyball,
        items: [],
      },
      {
        title: "PDI",
        url: "#",
        icon: ChartPie,
        items: [],
      },
      {
        title: "Objetivos",
        url: "#",
        icon: ChartNoAxesCombined,
        items: [
          {
            title: "Squad",
            url: "#",
          },
          {
            title: "Tech",
            url: "#",
          },
          {
            title: "Chapter",
            url: "#",
          },
        ],
      },
      {
        title: "Store",
        url: "#",
        icon: Store,
        isActive: false,
        items: [],
      },
    ],
  }
  export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  }
  
