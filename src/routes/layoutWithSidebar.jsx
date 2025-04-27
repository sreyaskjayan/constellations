import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

const LayoutWithSidebar = () => {
  return (
    <SidebarProvider>
      <AppSidebar className="border-r border-border" />
      <div className="flex flex-col">
        <SidebarTrigger className="absolute pt-10 ps-5" />
      </div>
      <Outlet />
    </SidebarProvider>
  );
};

export default LayoutWithSidebar;
