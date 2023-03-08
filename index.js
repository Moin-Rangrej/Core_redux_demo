const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

//action creator 
function buycake() {
    return{
        type: BUY_CAKE,
        info: "First redux action"
    }
}

//(previousState, action) = newState

const initialState = {
    numOfcake : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfcake : state.numOfcake - 1
            }
    }
}
//hold application data in store
//createStore redux library accept parameter which is reducer function
const store = createStore(reducer) 
console.log('Initial state:', store.getState())
//subscribe method accept the function
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
//the store provide the dispatch method to update the state
// accept action as a parameter
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()

