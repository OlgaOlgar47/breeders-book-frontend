import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Добро пожаловать,
          <br />
          уважаемый друг!
        </h1>
        <p>
          Если вы оказались на этой странице, это означает, что вы - истинный
          ценитель животных. Наш сайт - это не просто торговая площадка или
          место для хранения фотографий, здесь вы найдете много больше!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
