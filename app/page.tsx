import Header from "@sections/header/Header";
import Hero from "@sections/hero/Hero";
import Companies from "@sections/companies/Companies";
import Services from "@sections/services/Services";
import Portfolio from "@sections/portfolio/Portfolio";
import References from "@sections/references/References";
import Contact from "@sections/contact/Contact";
import Banner from "@sections/banner/Banner";
import Footer from "@sections/footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Companies />
            <Services />
            <Portfolio />
            <References />
            <Contact />
            <Banner />
            <Footer />
        </>
    )
}
