import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [tarefas, setTarefas] = React.useState([]);

  useEffect(() => {
    const vai = async () => {
      const resultado = await axios.get("http://localhost:50000/tarefas");
      setTarefas((tarefasOld) => resultado.data);
    };
    vai();
  }, []);
  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
