import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';

const App = () => {
  const products = [
    {
      "name": "PC Lenovo",
      "price": "1400",
      "img": "product1.webp",
      "like":0,
      "quantity":10,
      "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    },
    {
      "name": "Mouse",
      "price": "30",
      "img": "product2.jpg",
      "like":0,
      "quantity":0,
      "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    },
    {
      "name": "KeyBoard",
      "price": "70",
      "img": "product3.jpg",
      "like":0,
      "quantity":20,
      "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    }
  ];

  return (
      <div>
        <Products products={products} />
      </div>
  );
};

export default App;

