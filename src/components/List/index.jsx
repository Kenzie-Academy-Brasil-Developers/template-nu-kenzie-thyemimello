import { Card } from "./Card";
import "./style.css";

export const List = ({ listTransactions, removeCard, setFilter }) => {
  return (
    <div className="totalList">
      <div className="menuList">
        <p>Resumo Financeiro</p>

        <div className="buttonsList">
          <button className="btn" onClick={() => setFilter("")}>
            Todos
          </button>
          <button className="btn" onClick={() => setFilter("entrada")}>
            Entrada
          </button>
          <button className="btn" onClick={() => setFilter("saída")}>
            Despesas
          </button>
        </div>
      </div>

      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          key={index}
          removeCard={removeCard}
          index={index}
        />
      ))}
    </div>
  );
};
