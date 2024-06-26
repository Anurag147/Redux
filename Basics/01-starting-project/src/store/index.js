import { createStore } from "redux";

const counterReducer = (state = {counter:0},action) => {

    if(action.type==='increement'){
        return {
            counter:state.counter+1,
        }
    }

    else if(action.type==='decreement'){
        return {
            counter:state.counter-1,
        }
    }
    else{
        return {
            counter:state.counter
        }
    }
}

const store = createStore(counterReducer);

export default store;