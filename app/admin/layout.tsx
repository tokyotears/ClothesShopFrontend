import "../globals.css"
import Header from "@/src/admin/header"
import Container from "@/src/container"

export default function AdminLayout({
    children,
}: {children: React.ReactNode}) {
    return (
        <>
            <header className="rounded-lg bg-white mb-15">
                <Header />
            </header>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </>
    )
}