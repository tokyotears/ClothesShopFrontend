import { Item } from "@/src/utils";

export default async function Items({category}: {category: string}) {
    const res = await fetch(`http://localhost:8000/clothes?category=${category}`);
    const data: Item[] = await res.json();

    return (
        <ul className="grid grid-cols-4 gap-4 pt-10">
            {data.map((item) => (
                <li key={item.id} className="border-1 border-black rounded-lg p-3 max-w-full"><img src={item.downloadLink} alt="item image" className="max-w-full max-h-full rounded-lg mb-5"/>Name: {item.name}<br/>Size: {item.desc}<br/></li>
            ))}
        </ul>
    ) 
}