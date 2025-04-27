// import { Outlet } from "react-router-dom";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/sidebar/app-sidebar";

// const LayoutWithSidebar = () => {
//   return (
//     <SidebarProvider>
//       <AppSidebar className="border-r border-border" />      
//         <SidebarTrigger className="" />
//       <Outlet />
//     </SidebarProvider>
//   );
// };

// export default LayoutWithSidebar;

import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

const LayoutWithSidebar = () => {
  return (
    <SidebarProvider>
      <div className="flex w-screen">
        <div className="border-r border-border">
          <AppSidebar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="h-12 border-b border-border flex items-center px-4">
            <SidebarTrigger />
          </div>
            <Outlet />          
        </div>
      </div>
    </SidebarProvider>
  );
};

export default LayoutWithSidebar;
