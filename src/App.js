import logo from './logo.svg';
import './App.css';
import Products from "./components/Products";


function App() {
  return (
      <div className="App">
        <div>
          <h1>Our Products</h1>
          <Products />
        </div>
      </div>
  );
}

export default App;