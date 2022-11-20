import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const valueSum = () => {
    const totalIn = listTransactions.filter(
      (transaction) => transaction.type === "entrada"
    );

    const totalOut = listTransactions.filter(
      (transaction) => transaction.type === "saída"
    );

    const reduceIn = totalIn.reduce(
      (acumulado, valorAtual) => acumulado + Number(valorAtual.value),
      0
    );

    const reduceOut = totalOut.reduce(
      (acumulado, valorAtual) => acumulado - Number(valorAtual.value),
      0
    );

    const sumTotal = listTransactions.length
      ? Number(reduceIn) + Number(reduceOut)
      : Number(0);
    return sumTotal;
  };

  return (
    <div className="totalMoney">
      <div className="valueBox">
        <p className="valueTotal">Valor total:</p>
        <p className="textTotal">O valor se refere ao saldo</p>
      </div>

      <div className="spanTotal">
        <span>R$ {valueSum()}</span>
      </div>
    </div>
  );
};
