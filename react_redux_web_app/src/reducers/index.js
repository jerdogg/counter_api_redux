// this file takes all of our reducers and combine them into a single reducer
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// takes a object: the object and what we want to call it
// const rootRuducer = combineReducers({
//   todos: todos
// })

// since the varible name and object are the same name
// reduce syntax like..
const rootRuducer = combineReducers({
  counterReducer,
})

export default rootRuducer;