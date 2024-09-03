import s from "./Options.module.css";

const Options = ({ isVisible }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.btn}>Good</button>
      <button className={s.btn}>Neutral</button>
      <button className={s.btn}>Bad</button>
      {isVisible && <button className={s.btn}>Reset</button>}
    </div>
  );
};
export default Options;
