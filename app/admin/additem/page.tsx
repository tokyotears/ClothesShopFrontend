"use client";

import Form from "@/src/admin/additem/form";

export default function AddItemPage() {
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const response = await fetch("http://localhost:8000/clothes", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Failed to add item: ${response.status}`);
        }

        form.reset();
    };

    return (
        <Form submitFunc={handleSubmit}/>
    );
}