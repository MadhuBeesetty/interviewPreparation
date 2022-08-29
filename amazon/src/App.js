import SearchBox from "./components/searchbox/searchbox";
import { ParentComponent } from "./components/parent/parentComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBox />
        <ParentComponent/>
      </header>
    </div>
  );
}

export default App;
