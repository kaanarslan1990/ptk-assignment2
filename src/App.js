import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([
    {
      taskname: "Taste Javascript",
    },
    {
      taskname: "Give talks",
    },
    {
      taskname: "Write tutorials",
    },
    {
      taskname: "Have a life!",
    }
  ]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <div className="App">
      <Header />
      <Form addTask={setTasks} tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
