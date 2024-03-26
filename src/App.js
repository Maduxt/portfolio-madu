import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer'
import Inicio from './pages/Inicio/inicio'
import './reset.css'
// import Sobre from './pages/Sobre/Sobre';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Sobre /> */}
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;
