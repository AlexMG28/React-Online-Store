import PromiseReducer from './promiseReducer'
import thunk from 'redux-thunk'
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux'

const allReducers = combineReducers({
    promiseReducer: PromiseReducer
})

export default createStore(allReducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))