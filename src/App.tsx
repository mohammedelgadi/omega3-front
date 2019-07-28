import React from "react";
import "./App.css";
import PageAccueil from "./container/accueil/PageAccueil";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

let initialStore = {};

const logger = (store: any) => {
  return (next: any) => {
    return (action: any) => {
      return next(action);
    };
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PageAccueil />
      </Provider>
    );
  }
}

export default App;
