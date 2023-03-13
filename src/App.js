import "./App.css";
import { useState } from "react";
import { MyContext } from "./component/myContext";
import Routers from "./component/Routers";
import { initialStateValue } from "./component/controllerData";


function App() {
  const [state, setState] = useState(initialStateValue);
  return (
    <>
      <MyContext.Provider value={{ state, setState }}>
        <Routers />
      </MyContext.Provider>
    </>
  );
}

export default App;
