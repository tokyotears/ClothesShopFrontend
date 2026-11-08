export const AdminCategories = [
    {label: "Jeans", value:"jeans"},
    {label: "Shirts", value: "shirts"},
    {label: "Shoes", value:"shoes"},
    {label: "Hoodies", value:"hoodies"}
];

export const PublicCategories = [
    {label: "All", value:""},
    {label: "Jeans", value:"jeans"},
    {label: "Shirts", value: "shirts"},
    {label: "Shoes", value:"shoes"},
    {label: "Hoodies", value:"hoodies"},
];

export type Item = {
    id: string;
    name: string;
    desc: string;
    category: string;
    downloadLink: string;
};