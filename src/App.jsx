import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";

import { useState, useEffect } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(
    JSON.parse(localStorage.getItem("feedback-statistics")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  const handleUpdateFeedback = (feedbackType) => {
    setFeedbacks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback-statistics", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  return (
    <div>
      <Description />
      <Options
        handleUpdateFeedback={handleUpdateFeedback}
        handleReset={handleReset}
        isVisibleReset={totalFeedback > 0}
      />
      {totalFeedback > 0 ? <Feedback feedback={feedbacks} /> : <Notification />}
    </div>
  );
}

export default App;
