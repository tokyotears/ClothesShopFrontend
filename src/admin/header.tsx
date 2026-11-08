import Container from "../container"
import Link from "next/link"

export default function Header() {
    return (
        <Container>
            <div className="flex flex-row justify-between items-center py-5">
                <h1 className="text-xl">Admistracija Admin Site</h1>
                <ul className="flex flex-row ml-10">
                    <li className="px-5"><Link href="/admin">Dashboard</Link></li>
                    <li className="px-5"><Link href="/admin/additem">Add an item</Link></li>
                    <li className="px-5"><Link href="/admin/items">List all items</Link></li>
                </ul>
            </div>
        </Container>
    )
}