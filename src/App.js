import logo from './logo.svg';
import './App.css';

function App() {

  const todo = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]
  
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      {
        todo.map( (element) => {
          return <li>{element}</li>
        })
      }
    </div>
  );
}

export default App;
