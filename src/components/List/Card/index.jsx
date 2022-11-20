import "./style.css";
import { FaTrashRestoreAlt } from "react-icons/fa";

export const Card = ({ transaction, removeCard, index }) => {
  return (
    <>
      {transaction.type === "entrada" ? (
        <div className="card in">
          <div className="textCard">
            <p className="description">{transaction.description}</p>
            <p className="type">{transaction.type}</p>
          </div>
          <div className="value">
            <span className="valueTransaction">R$ {transaction.value}</span>
            <button className="btnTrash" onClick={() => removeCard(index)}>
              <FaTrashRestoreAlt className="trashIcon" />
            </button>
          </div>
        </div>
      ) : (
        <div className="card out">
          <div className="textCard">
            <p className="description">{transaction.description}</p>
            <p className="type">{transaction.type}</p>
          </div>
          <div className="value">
            <span className="valueTransaction">R$ {transaction.value}</span>
            <button className="btnTrash" onClick={() => removeCard(index)}>
              {" "}
              <FaTrashRestoreAlt className="trashIcon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
