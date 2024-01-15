import {createStore, applyMiddleware} from "redux"
import appReduser from "./appRedusers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(appReduser,composeWithDevTools(applyMiddleware(thunk)));
export default store;