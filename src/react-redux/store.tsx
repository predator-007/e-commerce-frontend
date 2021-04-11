import { createStore , combineReducers } from "redux";
import { userreducer } from "./reducers/user";
import {tokenreducer} from "./reducers/token";
export const store=createStore(combineReducers(
{
    user:userreducer,
    token:tokenreducer

}
),(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());