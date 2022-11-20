import { useState } from "react";
import "./style.css";

export const Form = ({ setListTransactions }) => {
  const [descriptionTransaction, setDescriptionTransaction] = useState("");
  const [valueTransaction, setValueTransaction] = useState({});
  const [typeTransaction, setTypeTransaction] = useState("entrada");

  const onSubmit = (event) => {
    event.preventDefault();

    const dataTransaction = {
      description: descriptionTransaction,
      type: typeTransaction,
      value: valueTransaction,
    };

    setListTransactions((oldList) => [...oldList, dataTransaction]);

    setDescriptionTransaction("");
    setValueTransaction({});
    setTypeTransaction("entrada");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="description">
        <label htmlFor="description">Descrição</label>
        <input
          name="description"
          className="inputDecription"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={descriptionTransaction}
          onChange={(event) => setDescriptionTransaction(event.target.value)}
        />
        <p className="exemple">Ex: Compra de roupas</p>
      </div>

      <div className="inputValues">
        <div className="values">
          <label htmlFor="value">Valor</label>
          <input
            name="value"
            className="input"
            type="number"
            value={valueTransaction}
            onChange={(event) => setValueTransaction(event.target.value)}
          />
        </div>

        <div className="inputType">
          <label htmlFor="tupe">Tipo de Valor</label>
          <select
            className="input"
            value={typeTransaction}
            onChange={(event) => setTypeTransaction(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>

      <button className="button" type="submit">
        Inserir Valor
      </button>
    </form>
  );
};
