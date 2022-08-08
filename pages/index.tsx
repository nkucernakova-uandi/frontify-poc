import Head from 'next/head'
import {getColors, setup} from "../lib/getTheme";

export async function getStaticProps() {
    const colors = await getColors(await setup())

    return {
        props: {colors},
    }
}

interface PHome {
    colors: {[key: string]: string}
}
const Home = ({colors}: PHome) => {
    console.log(colors)

    return (
        <>
            <Head>
                <title>Frontify - POC</title>
            </Head>

            <nav className="w-screen grid items-center px-6 py-2 text-2xl" style={{background: colors["Navbar bg"]}}>
                <span>"PLACEHOLDER": A brand</span>
            </nav>
            <main className="grid place-content-center min-h-screen text-center">
                <h1 className="text-4xl">Hello <span style={{color: colors["Hero color"]}}>world!</span></h1>
                <h2>This is some text...</h2>
            </main>
        </>
    )
}

export default Home
