import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";

// import { initialData } from '../../Database/data';

import { useModelStore } from '../../stores/useModelStore';


const TableComponent: React.FC = () => {
    const { data, searchText, sortOrder, setSortOrder, startDate, endDate} = useModelStore();

    const serchedData = data.filter((item) =>{
        const matchesSearch =
          item.modelName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.id.toLowerCase().includes(searchText.toLowerCase());
    
        const createdDate = new Date(item.createdOn);
        const matchesDateRange =
          (!startDate || createdDate >= startDate) && (!endDate || createdDate <= endDate);
    
        return matchesSearch && matchesDateRange;
    }
    );

    // Sort data based on sort order
    const sortedData = [...serchedData].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.modelName.localeCompare(b.modelName);
        }else if (sortOrder === "desc") {
            return b.modelName.localeCompare(a.modelName);
        }else{
            return 0;
        }
    });
    return (
        <Table className="text-[16px]">
            <TableHeader>
                <TableRow>
                    <TableHead>
                        <div className="flex items-center">
                            Model Name 
                            <button
                                onClick={() => {
                                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                }}>
                                <BiSortAlt2 className="ml-2" />
                            </button>
                        </div>
                    </TableHead>
                    <TableHead><div className="flex items-center">
                        Model Type <BiSortAlt2 className="ml-2" />
                    </div></TableHead>
                    <TableHead><div className="flex items-center">
                        Description <BiSortAlt2 className="ml-2" />
                    </div></TableHead>
                    <TableHead><div className="flex items-center">
                        Created On <BiSortAlt2 className="ml-2" />
                    </div></TableHead>
                    <TableHead><div className="flex items-center">
                        Last Trained On <BiSortAlt2 className="ml-2" />
                    </div></TableHead>
                    <TableHead><div className="flex items-center">
                        Status <BiSortAlt2 className="ml-2" />
                    </div></TableHead>
                    <TableHead><div className="flex items-center">
                        Action
                    </div></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortedData.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium py-[12.5px]">{invoice.modelName}</TableCell>
                        <TableCell>{invoice.modelType}</TableCell>
                        <TableCell className="truncate max-w-xs">{invoice.description}</TableCell>
                        <TableCell className="text-center">{invoice.createdOn}</TableCell>
                        <TableCell className="text-center">{invoice.lastTrainedOn}</TableCell>
                        <TableCell className="text-center"><span className={`${invoice.status === 'Active' ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} px-4 py-1 rounded-lg text-sm`}>
                            {invoice.status}
                        </span></TableCell>
                        <TableCell className="flex justify-center"><BsThreeDotsVertical /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableComponent;