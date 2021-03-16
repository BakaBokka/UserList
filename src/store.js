import {createStore} from "redux";
import data from "./db";

import reducer from "./reducers/reducers";

const store = createStore(reducer);

store.subscribe(() => {console.log(store.getState())});
export default store;