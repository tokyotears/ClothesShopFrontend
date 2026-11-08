"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog"

export default function ConfirmDelete({
    itemId,
    open,
    onOpenChange,
}: {
    itemId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const deleteFunc = async () => {
        const res = await fetch(`http://localhost:8000/clothes/${itemId}`, {
            method: "DELETE",
            body: ""
        });

        if (!res.ok) {
            throw new Error(`Error. Status code: ${res.status}`);
        }

        onOpenChange(false);
    };

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="bg-white" size="sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete an item?</AlertDialogTitle>
                    <AlertDialogDescription>...</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Don&apos;t delete</AlertDialogCancel>
                    <AlertDialogAction onClick={deleteFunc}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}