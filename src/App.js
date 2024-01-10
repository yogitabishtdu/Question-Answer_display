import "./App.css";
import Data from "./components/Data";
import { useState } from "react";
import Answers from "./components/Answers";
function App() {
  const [questions, setQuestions] = useState(Data);
  return (
    <div className="App">
      <h1> Questions and Answers about login</h1>
      {questions.map((q) => {
        return <Answers key={q.id} {...q} />;
      })}
    </div>
  );
}

export default App;
