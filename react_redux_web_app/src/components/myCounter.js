import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { myStore } from '../myStore';

// before rails api backend
// import { Inc, Dec } from '../actions/counterAction';
import { setInc, setDec, getValue } from '../actions/counterAction';

// import { 
//   COUNT,
//   INC,
//   DEC,
// } from '../reducers/counterReducer';

const Centered = styled.div`
width: 100%;
text-align: center;
`;

const Button = styled.button`
  background: ${props => props.inc ? `green` : `red`};
  border-radius: 8px;
  color: white;
  height: 40px;
  width:  40px;
`;

// height: ${props => props.inc ? background: red : background: green}px;
// width: ${props => props.dec ? 60 : 120}px;

class myCounter extends React.Component {
  // Don't need any state in this instance cause connect down below
  // will cause component to re-render with each store update.
  // state = { value: 0 }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getValue())
  }

  decrement = () => {
    // before rails api backend
    // this.props.dispatch(Dec)
    this.props.dispatch(setDec())
  }

  increment = () => {
    // before rails api backend
    // this.props.dispatch(Inc)
    this.props.dispatch(setInc())
  }

  render() {
    const { value } = this.props;
      
    return(
      <Centered>
        <h3>counter</h3>
        <h4>{value}</h4>
        {/* a new function will get made every time this component is re-rendered. 
            In React, rendering is cheap so re-renders can happen often. This means 
            functions created on previous renders pile up in memory and force the 
            garbage collector to clean them, which is an expensive operation. 
            Don't use inline functions in render */}
        <Button inc onClick={ () => this.props.dispatch(setInc()) }>+</Button>
        <Button dec onClick={ this.decrement }>-</Button>
      </Centered>
    )
  }
}

// oringally used this when I didn't have `actions`
// <Button inc onClick={ () => dispatch({ type: INC}) }>+</Button>
// <Button dec onClick={ () => dispatch({ type: DEC}) }>-</Button>


// every time the store changes, I am going to call this function.
// subscribe to a function ie render
// store.subscribe(render) 
// puts my redux store variable to a props variable for my component
const mapStateToProps = store => {
  return { value: store.counterReducer };
};

// Dispatch gets mapped to the components props with this command
// connect takes in 0,1, or 2 params and wraps my component
// by not passing anything in, or null, you get the entire dispatch function
// 1st param: somehow map redux status to react props
// 2nd param: somehow map redux dispatch to react props

// this entire connect() method returns a new component
export default connect(mapStateToProps)(myCounter);

// Calling this.setState() within the component. This will trigger the following component 
//lifecycle methods: shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate

// Changes in component's props. This will trigger:
// componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > 
// render > componentDidUpdate 
// (connect method of react-redux trigger this when there are applicable changes in the Redux store)

// You can minimize your component's rerender by implementing a check inside 
// your shouldComponentUpdate and returning false if it doesn't need to.

