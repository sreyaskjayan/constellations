import {
	BookOpen,
	Bot,
	Frame,
	LifeBuoy,
	Map,
	PieChart,
	Send,
	Settings2,
	SquareTerminal,
	LayoutDashboard 
} from "lucide-react"


const data = {
	navMain: [
		{
			title: "Home",
			url: "home",
			icon: SquareTerminal,
			isActive: true,
			// items: [
			//   {
			//     title: "History",
			//     url: "#",
			//   }
			// ],
		},
		{
			title: "Dashboards",
			url: "/dashboards",
			icon: LayoutDashboard ,
		},
		{
			title: "Devices",
			url: "devices",
			icon: Bot,
		},
		{
			title: "Documentation",
			url: "#",
			icon: BookOpen,
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings2,
		},
	],
	navSecondary: [
		{
			title: "Support",
			url: "#",
			icon: LifeBuoy,
		},
		{
			title: "Feedback",
			url: "#",
			icon: Send,
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
}

export default data;