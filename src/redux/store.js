import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducer";



export const store = createStore(productReducer, applyMiddleware(thunk));
