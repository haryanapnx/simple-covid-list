import { createBrowserHistory } from "history";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./stores";

const history = createBrowserHistory();

const devToolsExtension = ((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose;

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  typeof devToolsExtension === 'function' ? devToolsExtension : (f: any) => f
));

export { store, history };