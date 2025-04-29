import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
	return (
		<nav className="h-16 flex items-center justify-between px-4 border-b border-border">
			<SidebarTrigger />      
		</nav>
	);
};

export default Navbar;