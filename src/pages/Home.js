import { Link } from "react-router-dom"

function Home() {
    return (
        <main>
            <h1 className="text-gray-800 text-3xl font-semibold text-center pb-10">Feelgood hälsocenter</h1>
            <h2 className="text-gray-800 text-2xl font-semibold text-center pb-10">Välj behandling</h2>
            <section className="flex justify-evenly flex-wrap overflow-hidden">
                <Link to='behandling/frisör/'>
                    <h3 className="text-gray-750 text-lg pl-2 font-semibold ">Frisör</h3>
                    <img src='https://images.unsplash.com/photo-1593269233759-427ba69acca5?' alt='frisör' height='500' width='400' />
                </Link>
                <Link to='behandling/skönhet/'>
                    <h3 className="text-gray-750 text-lg pl-2 font-semibold ">Skönhet</h3>
                    <img src='https://images.unsplash.com/photo-1556760544-74068565f05c' alt='skönhet' height='500' width='400' />
                </Link>
            </section>
        </main>
    )
}

export default Home
