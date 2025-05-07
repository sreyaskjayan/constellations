import { useState } from 'react';
import { 
  Check, 
  Pencil, 
  Trash2,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';

export default function DataTable() {
  // Sample data
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Inactive" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", status: "Active" },
    { id: 5, name: "Alex Brown", email: "alex@example.com", status: "Pending" },
    { id: 6, name: "Emily Davis", email: "emily@example.com", status: "Active" },
    { id: 7, name: "Robert Wilson", email: "robert@example.com", status: "Inactive" },
    { id: 8, name: "Jessica Taylor", email: "jessica@example.com", status: "Pending" },
    { id: 9, name: "Daniel Anderson", email: "daniel@example.com", status: "Active" },
    { id: 10, name: "Lisa Thomas", email: "lisa@example.com", status: "Pending" },
    { id: 11, name: "Mark Garcia", email: "mark@example.com", status: "Inactive" },
    { id: 12, name: "Karen Martinez", email: "karen@example.com", status: "Active" },
    { id: 13, name: "Paul Robinson", email: "paul@example.com", status: "Pending" },
    { id: 14, name: "Elizabeth Clark", email: "elizabeth@example.com", status: "Active" },
    { id: 15, name: "David Rodriguez", email: "david@example.com", status: "Inactive" },
  ]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // State for sorting
  const [sortConfig, setSortConfig] = useState({
    key: 'id',
    direction: 'ascending'
  });

  // Handler for edit button
  const handleEdit = (id) => {
    alert(`Editing row with ID: ${id}`);
  };

  // Handler for delete button
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  // Handler for activate/deactivate button
  const handleToggleStatus = (id) => {
    setData(data.map(item => {
      if (item.id === id) {
        const newStatus = item.status === "Active" ? "Inactive" : "Active";
        return { ...item, status: newStatus };
      }
      return item;
    }));
  };

  // Sort handler
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting
  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
  
  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };
  
  const goToFirstPage = () => goToPage(1);
  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);
  const goToLastPage = () => goToPage(totalPages);

  // Get sort indicator
  const getSortDirection = (name) => {
    if (sortConfig.key === name) {
      return sortConfig.direction === 'ascending' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />;
    }
    return null;
  };

  return (
    <div className="w-full p-4 bg-white dark:bg-[oklch(0.145_0_0)] dark:text-[oklch(0.985_0_0)]">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="rounded-md border border-gray-200 dark:border-[oklch(1_0_0_/_10%)]">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50 dark:bg-[oklch(0.205_0_0)] dark:border-[oklch(1_0_0_/_10%)]">
              <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-[oklch(0.708_0_0)] cursor-pointer" onClick={() => requestSort('id')}>
                <div className="flex items-center">
                  ID {getSortDirection('id')}
                </div>
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-[oklch(0.708_0_0)] cursor-pointer" onClick={() => requestSort('name')}>
                <div className="flex items-center">
                  Name {getSortDirection('name')}
                </div>
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-[oklch(0.708_0_0)] cursor-pointer" onClick={() => requestSort('email')}>
                <div className="flex items-center">
                  Email {getSortDirection('email')}
                </div>
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-[oklch(0.708_0_0)] cursor-pointer" onClick={() => requestSort('status')}>
                <div className="flex items-center">
                  Status {getSortDirection('status')}
                </div>
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-gray-500 dark:text-[oklch(0.708_0_0)]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50 dark:border-[oklch(1_0_0_/_10%)] dark:hover:bg-[oklch(0.205_0_0)]">
                <td className="p-4 align-middle">{row.id}</td>
                <td className="p-4 align-middle font-medium">{row.name}</td>
                <td className="p-4 align-middle">{row.email}</td>
                <td className="p-4 align-middle">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    row.status === 'Active' ? 'bg-green-100 text-green-800' :
                    row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="p-4 align-middle text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => handleToggleStatus(row.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white p-0 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.985_0_0)] dark:hover:bg-[oklch(0.205_0_0)]"
                    >
                      <Check className="h-4 w-4" />
                      <span className="sr-only">Toggle status</span>
                    </button>
                    <button 
                      onClick={() => handleEdit(row.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white p-0 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.985_0_0)] dark:hover:bg-[oklch(0.205_0_0)]"
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(row.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white p-0 text-sm font-medium text-red-500 shadow-sm transition-colors hover:bg-gray-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.704_0.191_22.216)] dark:hover:bg-[oklch(0.205_0_0)]"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {currentItems.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500 dark:text-[oklch(0.708_0_0)]">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex-1 text-sm text-gray-700 dark:text-[oklch(0.708_0_0)]">
          Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
          <span className="font-medium">{Math.min(indexOfLastItem, data.length)}</span> of{" "}
          <span className="font-medium">{data.length}</span> results
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <button
              onClick={goToFirstPage}
              disabled={currentPage === 1}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white p-0 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.985_0_0)] dark:hover:bg-[oklch(0.205_0_0)]"
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white p-0 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.985_0_0)] dark:hover:bg-[oklch(0.205_0_0)]"
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm font-medium dark:text-[oklch(0.708_0_0)]">
              Page {currentPage} of {totalPages}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white p-0 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.985_0_0)] dark:hover:bg-[oklch(0.205_0_0)]"
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white p-0 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.985_0_0)] dark:hover:bg-[oklch(0.205_0_0)]"
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
          
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="h-8 rounded-md border border-gray-200 bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-[oklch(1_0_0_/_10%)] dark:bg-[oklch(0.269_0_0)] dark:text-[oklch(0.985_0_0)]"
          >
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
          </select>
        </div>
      </div>
    </div>
  );
}