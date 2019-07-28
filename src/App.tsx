import React from "react";
import "./App.css";
import PageAccueil from "./container/accueil/PageAccueil";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applicationSaga } from "./saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
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

sagaMiddleware.run(applicationSaga);
