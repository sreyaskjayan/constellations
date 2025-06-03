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
	LayoutDashboard, 
	Bell
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
			title: "Rule Engine",
			url: "rule-engine",
			icon: Settings2,
		},
		{
			title: "Alarms",
			url: "alarms",
			icon: Bell,
		},
	],
	navSecondary: [
		{
			title: "Support",
			url: "#",
			icon: LifeBuoy,
		},
		{
			title: "Documentation",
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