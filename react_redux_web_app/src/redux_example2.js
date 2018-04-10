import { createStore } from 'redux'
import react from 'react'
import ReactDom from 'react-dom'

const counter = (state, action) => {
  if (action.type === 'INC')
    return state + 1
  else if (action.type === 'DEC')
    return state - 1
  else
      return state
}

const store = createStore(counter)

// console.log(
//   counter(0, { type: 'INC' })
// )

// console.log(
//   counter(0, { type: 'DEC' })
// )

class Example extends React.Component {
  
  render() {
    const { value, onInc, onDec, store } = this.props;

    <div>
      <h1>counter</h1>
      <h1>{value}</h1>
      <button onClick={onInc}>+</button>
      <button onClick={onDec}>-</button>
    </div>

  }
  

  // every time the store changes, I am going to call this function.
  // subscribe to a function ie render
  // store.subscribe(render) 

}

export default Example;
