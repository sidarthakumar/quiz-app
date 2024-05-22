import "./App.css";
import Header from "./common/Header";
import Home from "./home/Home";
import Login from "./login/Login";
import ViewQuiz from "./view-quiz/ViewQuiz";

function App() {
  return (
    <div className="App">
      <Header />
      <ViewQuiz />
    </div>
  );
}

export default App;
