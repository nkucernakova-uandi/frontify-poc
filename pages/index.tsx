import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Frontify - POC</title>
            </Head>

            <nav className="w-screen bg-slate-600 grid items-center px-6 py-2 text-2xl">
                <span>"PLACEHOLDER": A brand</span>
            </nav>
            <main className="grid place-content-center min-h-screen">
                <h1 className="text-4xl">Hello <span className="text-rose-600">world!</span></h1>
                <h3>This is some text...</h3>
            </main>
        </>
    )
}

export default Home
