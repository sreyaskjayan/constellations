import { DataTable } from "../../components/ui/data-table"
import { Card } from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  CircleCheck,
  EllipsisVertical,
  Loader,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const data = [
		// { "id": 1, "type": "Cover page", "status": "In Process", "target": "18", "limit": "5", "reviewer": "Eddie Lake" },
		// { "id": 2, "type": "Table of contents", "status": "Done", "target": "29", "limit": "24", "reviewer": "Eddie Lake" },
		// { "id": 3,  "type": "Narrative", "status": "Done", "target": "10", "limit": "13", "reviewer": "Eddie Lake" },
		// { "id": 4, "type": "Narrative", "status": "Done", "target": "27", "limit": "23", "reviewer": "Jamik Tashpulatov" },
		// { "id": 5, "type": "Narrative", "status": "In Process", "target": "2", "limit": "16", "reviewer": "Jamik Tashpulatov" },
		// { "id": 6, "type": "Narrative", "status": "In Process", "target": "20", "limit": "8", "reviewer": "Jamik Tashpulatov" },
		// { "id": 7, "type": "Narrative", "status": "Done", "target": "25", "limit": "26", "reviewer": "Assign reviewer" },
		// { "id": 8, "type": "Narrative", "status": "Done", "target": "7", "limit": "23", "reviewer": "Assign reviewer" },
		// { "id": 9, "type": "Technical content", "status": "Done", "target": "30", "limit": "28", "reviewer": "Assign reviewer" },
		// { "id": 10, "type": "Narrative", "status": "Done", "target": "9", "limit": "31", "reviewer": "Assign reviewer" },
		// { "id": 11, "type": "Narrative", "status": "Done", "target": "12", "limit": "0", "reviewer": "Assign reviewer" },
		// { "id": 12, "type": "Narrative", "status": "Done", "target": "22", "limit": "33", "reviewer": "Assign reviewer" },
		// { "id": 13, "type": "Narrative", "status": "Done", "target": "15", "limit": "34", "reviewer": "Assign reviewer" }, 
		// { "id": 14, "type": "Narrative", "status": "Done", "target": "3", "limit": "35", "reviewer": "Assign reviewer" },
		// { "id": 15, "type": "Narrative", "status": "Done", "target": "6", "limit": "36", "reviewer": "Assign reviewer" },
		// { "id": 16, "type": "Narrative", "status": "In Process", "target": "4", "limit": "37", "reviewer": "Assign reviewer" },
		// { "id": 17, "type": "Plain language", "status": "Done", "target": "14", "limit": "38", "reviewer": "Assign reviewer" },
		// { "id": 18, "type": "Narrative", "status": "Done", "target": "17", "limit": "39", "reviewer": "Assign reviewer" },
		// { "id": 19, "type": "Narrative", "status": "Done", "target": "11", "limit": "40", "reviewer": "Assign reviewer" },
		// { "id": 20, "type": "Technical content", "status": "In Process", "target": "24", "limit": "18", "reviewer": "Maya Johnson" },
		// { "id": 21, "type": "Narrative", "status": "Done", "target": "15", "limit": "22", "reviewer": "Carlos Rodriguez" },
		// { "id": 22, "type": "Legal", "status": "In Process", "target": "31", "limit": "27", "reviewer": "Sarah Chen" },
		// { "id": 23, "type": "Technical content", "status": "Done", "target": "8", "limit": "12", "reviewer": "Raj Patel" },
		// { "id": 24, "type": "Visual", "status": "In Process", "target": "19", "limit": "25", "reviewer": "Leila Ahmadi" },
		// { "id": 25, "type": "Technical content", "status": "Done", "target": "22", "limit": "20", "reviewer": "Thomas Wilson" },
		// { "id": 26, "type": "Research", "status": "Done", "target": "29", "limit": "32", "reviewer": "Sophia Martinez" },
		// { "id": 27, "type": "Narrative", "status": "In Process", "target": "17", "limit": "14", "reviewer": "Assign reviewer" },    
		// { "id": 28, "type": "Narrative", "status": "Done", "target": "26", "limit": "30", "reviewer": "Eddie Lake" },    
		// { "id": 29, "type": "Financial", "status": "In Process", "target": "13", "limit": "16", "reviewer": "Jamik Tashpulatov" },
		// { "id": 30, "type": "Research", "status": "Done", "target": "29", "limit": "32", "reviewer": "Sophia Martinez" }
]

const columns = [
	{
		accessorKey: "type",
		header: "Section Type",
		cell: ({ row }) => (
			<div className="w-32">
				<Badge variant="outline" className="text-muted-foreground px-1.5">
					{row.original.type}
				</Badge>
			</div>
		),
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<Badge variant="outline" className="text-muted-foreground px-1.5">
				{row.original.status === "Done" ? (
					<CircleCheck className="fill-green-500 dark:fill-green-400" />
				) : (
					<Loader />
				)}
				{row.original.status}
			</Badge>
		),
	},
	{
		accessorKey: "target",
		header: () => <div className="w-full text-right">Target</div>,
		cell: ({ row }) => (
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}>
				<Label htmlFor={`${row.original.id}-target`} className="sr-only">
					Target
				</Label>
				<Input
					className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent"
					defaultValue={row.original.target}
					id={`${row.original.id}-target`} />
			</form>
		),
	},
	{
		accessorKey: "limit",
		header: () => <div className="w-full text-right">Limit</div>,
		cell: ({ row }) => (
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}>
				<Label htmlFor={`${row.original.id}-limit`} className="sr-only">
					Limit
				</Label>
				<Input
					className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent"
					defaultValue={row.original.limit}
					id={`${row.original.id}-limit`} />
			</form>
		),
	},
	{
		accessorKey: "reviewer",
		header: "Reviewer",
		cell: ({ row }) => {
			const isAssigned = row.original.reviewer !== "Assign reviewer"
			if (isAssigned) {
				return row.original.reviewer
			}
			return (
				<>
					<Label htmlFor={`${row.original.id}-reviewer`} className="sr-only">
						Reviewer
					</Label>
					<Select>
						<SelectTrigger
							className="w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
							size="sm"
							id={`${row.original.id}-reviewer`}>
							<SelectValue placeholder="Assign reviewer" />
						</SelectTrigger>
						<SelectContent align="end">
							<SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
							<SelectItem value="Jamik Tashpulatov">
								Jamik Tashpulatov
							</SelectItem>
						</SelectContent>
					</Select>
				</>
			);
		},
	},
	{
		id: "actions",
		cell: () => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
						size="icon">
						<EllipsisVertical />
						<span className="sr-only">Open menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-32">
					<DropdownMenuItem>Edit</DropdownMenuItem>
					<DropdownMenuItem>Make a copy</DropdownMenuItem>
					<DropdownMenuItem>Favorite</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
	{
		header: "Actions",
		cell: ({ row }) => {
			return (
				<Button variant="outline">
					Open
				</Button>
			)
		},
	}
]	


export default function Dashboard() {
	return (
		// <Card>
		<ChartContainer>

			<DataTable data={data} columns={columns}/>
		</ChartContainer>

		// </Card>
	)
}