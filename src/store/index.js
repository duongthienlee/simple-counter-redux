import { createStore } from "redux"
import reducer from "../reducers";
const initialState = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "MINUTES"
}
export const store = createStore(reducer, initialState);