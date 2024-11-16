import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
import About from "./about";
import Clubs from "./clubs";
import Scroll from "./scroll";
import Gallery from "./gallery";
import Mentors from "./mentors";

export default function homescreen() {
    return (<>
        <Navbar />
        <Hero />
        <About />
        <Clubs />
        <Scroll />
        <Gallery />
        <Mentors />
        <Footer />
    </>)
}