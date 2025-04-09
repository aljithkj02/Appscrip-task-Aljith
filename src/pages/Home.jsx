import { Footer } from "@/components/common/Footer"
import { Navbar } from "@/components/common/Navbar"
import { Hero } from "@/components/home/Hero";
import { Products } from "@/components/home/Products";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <Footer />
        </>
    )
}

export default Home;