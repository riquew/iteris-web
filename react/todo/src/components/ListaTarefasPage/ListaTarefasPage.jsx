import React, { useState } from "react";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";
import Tarefa from "../Tarefa";
import "./ListaTarefasPage.css";

function ListaTarefasPage() {
  const { listaDeTarefas, adicionarTarefa, limparLista } = useListaTarefas();

  const [novaTarefa, setNovaTarefa] = useState("");

  const [botaoDeleta, setBotaoDeleta] = useState(null);

  const [botaoDeletaCss, setBotaoDeletaCss] = useState("buttonDeletaEscondido");

  function inputChangeCallBack(event) {
    setNovaTarefa(event.target.value);
  }

  function btnNovaTarefaCallBack() {
    console.log(listaDeTarefas.length)
    console.log(listaDeTarefas)
    if(novaTarefa.length > 0 && novaTarefa.trim().length > 0) {
      setBotaoDeletaCss("buttonDeleta");
      setBotaoDeleta("Limpar Lista");
      adicionarTarefa(novaTarefa); // cria a nova tarefa;
      setNovaTarefa(""); //limpa o valor da tela
    }


    
  }

  function btnDeletaTodasTarefasCallBack() {
    limparLista();
    setBotaoDeletaCss("buttonDeletaEscondido");
    setBotaoDeleta("");
  }

  const atividadePendentes = listaDeTarefas.filter((x) => !x.concluida).length;

  return (
    <div className="ListaTarefasPage">
      <h1>Lista de Atividades!</h1>
      <span className="msg">
          Você tem {atividadePendentes} atividades pendentes
        </span>
      <div className="action-box">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={inputChangeCallBack}
          onKeyUp={(event) => {
            if(event.key === "Enter") btnNovaTarefaCallBack()
          }}
        />
        <button
          type="button"
          className="button big"
          onClick={btnNovaTarefaCallBack}
        >
          +
        </button>
      </div>
      <div className="list">
        {listaDeTarefas.map((item, i) => {
          return <Tarefa key={i} tarefa={item}></Tarefa>;
        })}
      </div>

      <button
          type="button"
          className={botaoDeletaCss}
          onClick={btnDeletaTodasTarefasCallBack}
        >
          {botaoDeleta}
        </button>
    </div>
  );
}
export default ListaTarefasPage;