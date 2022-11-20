import "./style.css";

export const Header = ({ page, setPage }) => {
  return (
    <header>
      <div className="headerBox">
        <img src={require("../../assets/Nu_Kenzie.png")} alt="logo" />
        <button
          className="buttonHeader"
          type="button"
          onClick={() => setPage(!page)}
        >
          Início
        </button>
      </div>
    </header>
  );
};
