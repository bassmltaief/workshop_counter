import { INCREMENT, DECREMENT } from "../const/ActionTypes";


const initialState = {
    counter: 10
}

const counterReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case INCREMENT:
            return { ...state, counter: state.counter + payload };

        case DECREMENT:
            return { ...state, counter: state.counter - payload };

        default:
            return state

    }
}



export default counterReducer;