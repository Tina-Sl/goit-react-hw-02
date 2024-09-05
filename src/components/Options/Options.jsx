import s from "./Options.module.css";

const Options = ({ handleUpdateFeedback, handleReset, isVisibleReset }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={() => handleUpdateFeedback("good")}>Good</button>
      <button onClick={() => handleUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleUpdateFeedback("bad")}>Bad</button>
      {isVisibleReset && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};
export default Options;
