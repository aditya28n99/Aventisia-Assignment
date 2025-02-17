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

interface TableProps {
    data: any[];
    sortOrder: string;
    setSortOrder: (order: "asc" | "desc") => void;
}

const TableComponent: React.FC<TableProps> = ({ data, sortOrder, setSortOrder }) => {

    return (
        <Table className="text-[16px]">
            <TableHeader>
                <TableRow>
                    <TableHead>
                        <div className="flex text-black font-semibold items-center">
                            Model Name
                            <button onClick={() => {
                                setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                            }}>
                                <BiSortAlt2 className=" ml-2 text-[#A3A3A3]" />
                            </button>
                        </div>
                    </TableHead>
                    <TableHead><div className="flex text-black font-semibold items-center">
                        Model Type <BiSortAlt2 className=" ml-2 text-[#A3A3A3]" />
                    </div></TableHead>
                    <TableHead><div className="flex text-black font-semibold items-center">
                        Description <BiSortAlt2 className=" ml-2 text-[#A3A3A3]" />
                    </div></TableHead>
                    <TableHead><div className="flex text-black font-semibold items-center">
                        Created On <BiSortAlt2 className=" ml-2 text-[#A3A3A3]" />
                    </div></TableHead>
                    <TableHead><div className="flex text-black font-semibold items-center">
                        Last Trained On <BiSortAlt2 className=" ml-2 text-[#A3A3A3]" />
                    </div></TableHead>
                    <TableHead><div className="flex text-black font-semibold items-center">
                        Status <BiSortAlt2 className=" ml-2 text-[#A3A3A3]" />
                    </div></TableHead>
                    <TableHead><div className="flex text-black font-semibold items-center">
                        Action
                    </div></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="py-[12.5px]">
                            <div>
                                <p className="font-semibold">{invoice.modelName}</p>
                                <p className="text-sm text-[#767676]">ID: {invoice.id}</p>
                            </div>
                        </TableCell>
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