// import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default Feedback;
