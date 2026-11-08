import { columns } from "@/src/admin/items/columns"
import { DataTable } from "@/src/admin/items/data-table";
import { Item } from "@/src/utils";

export const instant = false;

export default async function ItemsPage() {
    const res = await fetch("http://localhost:8000/clothes");
    const data: Item[] = await res.json();

    return <DataTable columns={columns} data={data}/>
}