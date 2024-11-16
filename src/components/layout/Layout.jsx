// src/components/layout/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
