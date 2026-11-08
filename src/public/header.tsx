import Container from "../container";

export default function Header() {
    return (
        <header className="bg-white rounded-lg py-10 mb-15">
            <Container>
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl">AdmistracijaShop</h1>
                    <ul className="flex flex-row justify-between items-center">
                        <li className="px-5">Catalog</li>
                        <li className="px-5">About <i>Admistracija</i></li>
                    </ul>
                </div>               
            </Container>
        </header>
    )
}