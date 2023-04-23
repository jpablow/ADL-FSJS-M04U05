import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DatosFeriados from './components/MiApi';

function App() {
  return (
    <>
      <Header />
      <DatosFeriados />
    </>
  );
}

export default App;
