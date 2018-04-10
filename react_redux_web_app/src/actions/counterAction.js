import axios from 'axios';
import { BASE_URL } from '../utils/urls'
import { 
  COUNT,
  INC,
  DEC,
} from '../reducers/counterReducer';

// old verison without rails api backend
// export const Inc = ({
//     type: INC
// })


export const setInc = () => {
    // simulate network lag: 
    // I want to update local store instantly, then
    // once network responds, check the response against 
    // local store and see if local store matches, or needs to be updated
    // based upon the response not being what we expected.
    return (dispatch) => {
        axios.patch(`${BASE_URL}/api/count/1?counter=INC`)
        .then ( (response) => {
            dispatch({ type: INC })
        })
    }
}

// old verison without rails api backend
// export const Dec = ({
//     type: DEC
// })

export const setDec = () => {
    return (dispatch) => {
        axios.patch(`${BASE_URL}/api/count/1?counter=DEC`)
        .then( (response) => {
            dispatch( { type: DEC })
        })
    }
}

export const getValue = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/api/count`)
        .then( (response) => {
            dispatch({ type: COUNT, value: response.data.data })
            // console.log(response.data) 
        } ) 
    }
}
// this was orginally used here ^
// ({ data }) => dispatch({ type: COUNT, value: data })



// export const setInc = ({
//     return (dispatch) => {
//         axios.post(`${BASE_URL}/api/`)
//     }
// })

// Function Declaration (hoisted)
// function bar() {
//     return 3;
// }

// Function Expression (3 types)
// anonymous function expression
// Variable Declarations get hoisted but their Assignment Expressions don’t.
// var a = function() {
//     return 3;
// }
 
// //named function expression
// var a = function bar() {
//     return 3;
// }
 
// //self invoking function expression
// (function sayHello() {
//     alert("hello!");
// })();

// Function Statement?

// function declarations / expressions with arrow functions 
// arrow functions give us access to the class `this`
