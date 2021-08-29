import { Link } from "react-router-dom"


function Home() {
    return (
        <main>
            <h1 className="text-center text-4xl text-gray-800 my-5">Nackas Skönhets &amp; Hälsocenter</h1>
            <section>
                <h2 className="text-center text-2xl text-gray-800 my-5">Välj behandling</h2>
                <div className="flex justify-evenly flex-wrap overflow-hidden">
                    <Link to='behandling/frisör/'>
                        <h3 className="text-gray-750 text-xl pl-2 ">Frisör</h3>
                        <img src='/category-hair.jpg' alt='frisör' height='500' width='400' />
                    </Link>
                    <Link to='behandling/skönhet/'>
                        <h3 className="text-gray-750 text-xl pl-2 ">Skönhet</h3>
                        <img src='/category-beauty.jpg' alt='skönhet' height='500' width='400' />
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Home
