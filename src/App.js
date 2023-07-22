import logo from "./logo.svg";
import "./App.css";
import Organiser from "./components/organiser/organiser.component";
import { FlagProvider } from "./context/flag.context";
import FlagReader from "./components/flag/flag-reader.component";

// <Organiser highlight={12} />

function App() {
  const flag = (
    <FlagProvider>
      <FlagReader />
    </FlagProvider>
  );
  return (<div className="App"><Organiser/></div>);
}

export default App;
