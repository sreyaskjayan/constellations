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
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-between px-4 border-b border-border">
      <SidebarTrigger />
      <div className="text-lg font-semibold">My App</div>
    </nav>
  );
};

const LayoutWithSidebar = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <AppSidebar className="border-r border-border w-64" />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Navbar */}
          <Navbar />

          {/* Main scrollable content */}
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default LayoutWithSidebar;
