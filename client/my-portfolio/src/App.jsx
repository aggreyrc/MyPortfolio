import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="font-sans text-black-900 bg-custom-image bg-cover bg-center flex flex-col min-h-screen ">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

