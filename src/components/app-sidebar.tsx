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
import { NavProjects } from "@/components/nav-projects"
import { TeamSwitcher } from "@/components/team-switcher"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
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
    ],
    projects: [
      {
        name: "Jogo Aberto",
        url: "#",
        icon: MessagesSquare,
      },
      {
        name: "Bola em Jogo",
        url: "#",
        icon: Volleyball,
      },
      {
        name: "PDI",
        url: "#",
        icon: ChartPie,
      },
      {
        name: "Store",
        url: "#",
        icon: Store,
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
          <SidebarGroup>
            <NavProjects projects={data.projects} />
            <NavMain items={data.navMain} />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  }
  
