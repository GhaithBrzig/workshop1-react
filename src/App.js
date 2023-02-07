import logo from './logo.svg';
import './App.css';
import {findLongestWord} from "./EcmaScript/findLongestWord";
import {countDistinctElements} from "./EcmaScript/countDistinctElements";
import {calculateTotal} from "./EcmaScript/calculateTotal";
import {search} from "./EcmaScript/fonction";


function App() {
  let Tab = [];
  let currentId = 0;

// Ajoutez les données initiales dans le tableau
  Tab.push({ name: 'John', age: 30, city: 'New York' });
  Tab.push({ name: 'Jane', age: 25, city: 'London' });

// Ajoutez une propriété ID à chaque objet
  Tab.forEach(obj => obj.id = ++currentId);

// Ajoutez de nouvelles entrées avec la méthode "push"
  Tab.push({ name: 'Jim', age: 35, city: 'Paris' });

// Ajoutez de nouvelles entrées avec la méthode "unshift"
  Tab.unshift({ name: 'Anna', age: 40, city: 'Berlin' });

// Ajoutez une propriété ID à la nouvelle entrée
  Tab[0].id = ++currentId;

  let result = search(Tab, 2);
  console.log(result);



  // const words = ['apple', 'bananaaaa', 'cherry', 'date'];
  // const result = findLongestWord(words);
  //
  // console.log(result);


  // const input = [['apple', 'banana', 'apple'], ['cherry', 'banana']];
  // const counts = countDistinctElements(input);
  // console.log(counts);


  // const grades = [45, 60, 75, 80, 90, 100];
  // const total = calculateTotal(grades);
  // console.log(total); // Output: 465
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
