import React from "react";
import "./App.css";
import PageAccueil from "./container/accueil/PageAccueil";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applicationSaga } from "./saga";
import createSagaMiddleware from "@redux-saga/core";
import { Route, Switch } from "react-router-dom";
import IntrouvablePage from "./component/common/404";
import { ConnectedRouter } from "connected-react-router";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const routerMidleware = routerMiddleware(history);

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(routerMidleware, sagaMiddleware))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/accueil" component={PageAccueil} />
            <Route component={IntrouvablePage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

sagaMiddleware.run(applicationSaga);
