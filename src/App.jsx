import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { useState } from "react";

export const App = () => {
  const [page, setPage] = useState(false);

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: 150 },
  ]);

  const [filter, setFilter] = useState("");

  const removeCard = (clickCard) => {
    const remove = listTransactions.filter(
      (transaction) => transaction !== listTransactions[clickCard]
    );
    setListTransactions(remove);
  };

  const filtredList = listTransactions.filter((transaction) =>
    filter === "" ? true : transaction.type === filter
  );

  return (
    <>
      {page ? (
        <div>
          <Header page={page} setPage={setPage} />
          <div className="mainDiv">
            <div className="bothDiv">
              <div className="leftDiv">
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
                <TotalMoney listTransactions={listTransactions} />
              </div>
              <div className="rightDiv">
                <List
                  listTransactions={filtredList}
                  removeCard={removeCard}
                  setFilter={setFilter}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainHome">
          <div className="leftBox">
            <img
              className="imgBox"
              src={require("./assets/Nu_Kenzieblack.png")}
              alt=""
            />
            <p className="textTitle">Centralize o controle das suas finanças</p>
            <p className="text">de forma rápida e segura</p>
            <button
              className="btnStart"
              type="button"
              onClick={() => setPage(!page)}
            >
              Iniciar
            </button>
          </div>

          <div className="rightBox">
            <img src={require("./assets/illustration.png")} alt="" />
          </div>
        </div>
      )}
    </>
  );
};
