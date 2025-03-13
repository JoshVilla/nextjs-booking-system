import {
  Calendar,
  Film,
  Gauge,
  Home,
  Inbox,
  Search,
  Settings,
  Theater,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin/",
    icon: Gauge,
  },
  {
    title: "Movies",
    url: "/admin/movies",
    icon: Film,
  },
  {
    title: "Now Showing",
    url: "/admin/now-showing",
    icon: Calendar,
  },
  {
    title: "Cinemas",
    url: "/admin/cinemas",
    icon: Theater,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-2 py-4 px-2">
          <div className="bg-background rounded-lg p-2 w-10 h-10 flex items-center justify-center">
            <Film />
          </div>
          <div>
            <div className="text-md  font-bold">Movie Booking System</div>
            <div className="text-sm text-muted-foreground">Admin</div>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="rounded-lg mb-2">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="text-muted-foreground" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <ThemeToggle />
      </SidebarContent>
    </Sidebar>
  );
}
