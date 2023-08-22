import { InputField } from "../InputField"; 
import "./Form.css"

const Form = () => {
  return(
    <section className="form">
      <form>
        <InputField label="Nome da Tarefa" placeholder="Digite o nome da tarefa" type="text"/>
        <InputField label="Descrição da Tarefa" placeholder="Digite a descrição da tarefa" type="text"/>
        <InputField label="Imagem" placeholder="Digite a url da imagem" type="text"/>
        <InputField label="Data para concluir" placeholder="Escolha a data para conclusão" type="date"/>
      </form>
    </section>
  );
}

export default Form;