import React, { useState } from "react";
import './App.css'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer';
import Sidebar from './componentes/Sidebar/Sidebar';
import Main from './componentes/Main/Main';

function App() {
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);

  return (
    <div className="App">
      <Sidebar />
      <main className="main-container">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <Main searchInput={searchInput} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
