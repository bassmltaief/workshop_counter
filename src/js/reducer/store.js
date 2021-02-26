import { createStore } from "redux";
import counterReducer from "./counterReducer";


const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store=createStore(counterReducer , devtools)
export default store;