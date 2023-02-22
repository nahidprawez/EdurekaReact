import './App.css';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <header className="header">
          <p>Welcome to React</p>
      </header>
      <content>
          <Timer/>
      </content>
      <footer>Copyright &copy; {new Date().getFullYear()} | All rights reserved</footer>
    </div>
  );
}

export default App;
