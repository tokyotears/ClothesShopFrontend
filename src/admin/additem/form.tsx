import {
    Field,
    FieldGroup,
    FieldLabel
} from "@/components/ui/field"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

import { AdminCategories } from "@/src/utils"

export default function Form({submitFunc}) {
    return (
        <form className="max-w-sm w-full" onSubmit={submitFunc}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="form-name">Name</FieldLabel>
                    <Input name="name" id="form-name" placeholder="Enter name" type="text" required/>
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-desc">Description</FieldLabel>
                    <Textarea className="max-h-50" name="desc" id="form-desc" placeholder="Enter description" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-category">Category</FieldLabel>
                    <Select name="category" items={AdminCategories} defaultValue="jeans" required>
                        <SelectTrigger id="form-category">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectGroup>
                                {AdminCategories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                        {category.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-img">Image</FieldLabel>
                    <Input name="image" id="form-img" type="file" required/>
                </Field>
                <Field orientation="horizontal">
                    <Button className="cursor-pointer" type="reset" variant="outline">Reset</Button>
                    <Button className="bg-black text-white cursor-pointer" type="submit">Add</Button>
                </Field>
            </FieldGroup>
        </form>
    );
}