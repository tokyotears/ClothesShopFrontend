import Container from "@/src/container";

export default function Dashboard() {
    return (
        <>
            <Container>
                <div className="flex flex-row justify-center bg-white rounded-lg py-5">
                    <h2 className="text-lg font-semibold">Welcome to the dashboard!</h2>
                </div>
            </Container>
        </>
    )
}