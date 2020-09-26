import React, { useState } from "react";

const useInput = (inintialValue) => {
  const [value, setValue] = useState(inintialValue);
  const onChange = (event) => {
    console.log(event.tartget);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
export default App;
