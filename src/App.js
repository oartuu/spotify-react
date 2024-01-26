import './App.css';
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer';
import Sidebar from './componentes/Sidebar/Sidebar';
import Main from './componentes/Main/Main';

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
