import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer'
import Inicio from './pages/Inicio/inicio'
import './reset.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;
