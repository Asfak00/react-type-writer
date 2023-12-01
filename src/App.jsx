import React from "react";

// react type writer
import { Typewriter } from "react-simple-typewriter";

const App = () => {
  return (
    <div className="container">
      <h1>
        Hello, I am a{" "}
        <span>
          <Typewriter
            words={[
              "Front-End Web Developer",
              "React Developer",
              "Javascript Developer",
            ]}
            loop={false}
          />
        </span>
      </h1>
    </div>
  );
};

export default App;
