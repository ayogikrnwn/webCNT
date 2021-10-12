import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home/Home";
import { ContextReact, initialState, reducers } from "./context/store";
import react from "react";
const App = () => {
  const [data, dispatch] = react.useReducer(reducers, initialState);
  return (
    <ContextReact.Provider value={{ data, dispatch }}>
      <Home />
    </ContextReact.Provider>
  );
};

export default App;
