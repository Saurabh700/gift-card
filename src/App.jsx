import Apple from "./Apple";
import Amazon from "./Amazon";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Switch</button>
      {toggle ? <Apple /> : <Amazon />}
    </>
  );
};

export default App;
