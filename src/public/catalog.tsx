"use client";

import { useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import {
    Field,
    FieldGroup,
    FieldLabel
} from "@/components/ui/field";

import { PublicCategories } from "@/src/utils";

//Create a block with view filters
function Filters({
    category,
    changeListener
}: {
    category: string;
    changeListener: (value: string | null) => void;
}) {
    return (
        <div className="bg-white flex flex-row rounded-lg p-4">
            <FieldGroup className="max-w-40">
                <Field>
                    <FieldLabel htmlFor="category-filter">Category</FieldLabel>
                    <Select items={ PublicCategories } value={category} onValueChange={changeListener}>
                        <SelectTrigger id="category-filter">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectGroup>
                                {PublicCategories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                        {category.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
            </FieldGroup>
        </div>
    )
}

export default function Catalog({category}: {category: string}) {
    const router = useRouter();

    const handleChange = (value: string | null) => {
        const val = value ?? "";
        const params = new URLSearchParams();
        if (val) params.set("category", val);

        router.replace(`/public${params.toString() ? `?${params}` : ""}`);
    };

    return <Filters category={category} changeListener={handleChange}/>;
}