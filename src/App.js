import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
