import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
// import s from "./App.css";

// import { useState, useEffect } from "react";

function App() {
  const feedbackData = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <section>
      <Description />
      <Options isVisible={false} />

      <Feedback feedback={feedbackData} />
      <Notification />
    </section>
  );
}

export default App;
