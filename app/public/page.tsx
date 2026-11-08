import Container from "@/src/container";
import Header from "@/src/public/header";
import Catalog from "@/src/public/catalog";
import Items from "@/src/public/clothes";

export const instant = false;

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{category?: string}>;
}) {
    const {category = ""} = await searchParams;

    return (
        <>
            <Header></Header>
            <main>
                <Container>
                    <Catalog category={category}/>
                    <Items category={category}/>
                </Container>
            </main>
        </>
    )
}