import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import WelcomeBar from './Components/WelcomeBar';
import ProductTable from './Components/ProductTable';
import AddProduct from './Components/AddProduct';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AddProduct></AddProduct>
    
    </div>
  );
}

export default App;
