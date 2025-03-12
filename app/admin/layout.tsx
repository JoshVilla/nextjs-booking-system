import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full">
        <SidebarTrigger />
        <div className="p-4 w-full h-full">{children}</div>
        <Toaster />
      </main>
    </SidebarProvider>
  );
}
