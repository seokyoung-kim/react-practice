import React, { useState } from "react";

const useInput = inintialValue => {
  const [value, setValue] = useState(inintialValue);
  const onChange = event => {
    console.log(event.tartget);
  }
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.")

  return (
    <>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </>
  );
};
export default App;
