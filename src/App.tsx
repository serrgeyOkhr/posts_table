import Table from "./components/Table";
import SearchComponent from "./components/SearchComponent";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState('')
  // const query = ""
  return (
    <div className="container">
      <SearchComponent text={searchText} setText={setSearchText}/>
      <Table query={searchText} ></Table>
    </div>
  );
}

export default App;
