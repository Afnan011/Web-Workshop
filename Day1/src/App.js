import "./App.css";
import Foot from "./Foot";
import Heading from "./Heading";
import MainSection from "./MainSection";

function App() {
  return (
    <div className="App-header">
      <header>
        <Heading />
      </header>

      <section>
        <MainSection />
      </section>

      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
