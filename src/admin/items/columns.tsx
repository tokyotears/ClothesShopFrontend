"use client"

import { useState } from "react"
import { createColumnHelper } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
 
import { type DataTableFeatures } from "./data-table-features"

import { Item } from "@/src/utils"

import ConfirmDelete from "@/src/admin/items/deletewindow"

const columnHelper = createColumnHelper<DataTableFeatures, Item>();

function ItemActions({itemId}: {itemId: string}) {
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 w-8 p-0" />}>
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white" align="end">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Edit an item</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDeleteOpen(true)}>
                            Delete an item
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <ConfirmDelete
                itemId={itemId}
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
            />
        </>
    );
}

export const columns = columnHelper.columns([
    columnHelper.accessor("id", {
        header: () => <div className="text-left">ID</div>,
        cell: ({row}) => <span className="text-blue-400">{row.getValue("id")}</span>,
    }),
    columnHelper.accessor("name", {
        header: "Name",
    }),
    columnHelper.accessor("desc", {
        header: "Size"
    }),
    columnHelper.accessor("category", {
        header: "Category"
    }),
    columnHelper.display({
        id: "actions",
        cell: ({row}) => {
            return <ItemActions itemId={row.getValue("id")} />;
        },
    }),
])