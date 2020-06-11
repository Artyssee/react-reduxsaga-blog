import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  trace: true,
  actionCreators: {},
});

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
