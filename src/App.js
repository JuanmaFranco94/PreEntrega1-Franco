import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <CartWidget />
      </Navbar>
      <ItemListContainer greeting="Bienvenidos a Terapi-Toys! La tienda online de juguetes terapeuticos" />
    </div>
  );
}

export default App;
