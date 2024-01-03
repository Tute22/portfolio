import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Me } from "./components/Me";
import { Navbar } from "./components/Navbar";
import { Proyects } from "./components/Proyects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Me></Me>
      <Skills></Skills>
      <Proyects></Proyects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
