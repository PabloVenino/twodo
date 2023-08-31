import { useState } from "react";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { InputField } from "../InputField"; 
import "./Form.css"

const Form = (props) => {

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState(Date);
  const [image, setImage] = useState("");
  const [executeTask, setExecuteTask] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      taskName,
      taskDescription,
      date,
      image,
      executeTask
    });
  };

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  return(
    <section className="form">
      <form onSubmit={onSubmit}>
        <InputField 
          label="Nome da Tarefa"
          placeholder="Digite o nome da tarefa"
          type="text"
          value={taskName}
          onChange={value => setTaskName(value)}
        />
        <InputField 
          label="Descrição da Tarefa"
          placeholder="Digite a descrição da tarefa"
          type="text"
          value={taskDescription}
          onChange={value => setTaskDescription(value)}
        />
        <InputField
          label="Imagem"
          placeholder="Digite a url da imagem"
          type="text"
          value={image}
          onChange={value => setImage(value)}
        />
        <InputField
          label="Data para concluir"
          placeholder="Escolha a data para conclusão"
          type="date"
          value={date}
          onChange={value => setDate(value)}
        />
        <Dropdown
          label="Onde executar a tarefa"
          itens={props.placeList}
          value={executeTask}
          onChange={(e) => handleChange(e, setExecuteTask)}
        />

        <Button>
          Criar Tarefa
        </Button>
      </form>
    </section>
  );
}

export default Form;