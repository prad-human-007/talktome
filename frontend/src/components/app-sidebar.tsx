

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronUp, User2 } from "lucide-react"

// Menu items.


export function AppSidebar(props: {chats : any, handleClick: any, username: string}) {
    console.log('printing props: ', props)
    const items = props.chats   
    const handleClick = props.handleClick

    return (
        <Sidebar variant="floating">
        <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item: any) => (
                    <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                        <span onClick={() => handleClick(item.id)}>{item.chat_title}</span>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton  >
                        <User2 /> {props.username}
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        </Sidebar>
    )
}
