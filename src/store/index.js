import {createStore} from "redux";
const reducerFunction = (state = {counter: 10}, action) => {
    switch(action.type) {
        case "increment":
            return {counter: state.counter += 1};
        case "decrement":
            return {counter: state.counter -= 1};
            case "incrementBy":
                return {counter: state.counter += action.payload};
        default:
            return state
    }
}
const store = createStore(reducerFunction);

export default store;