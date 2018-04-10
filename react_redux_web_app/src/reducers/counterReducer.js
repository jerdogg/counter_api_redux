
// use connect to get stuff in or out of store
export const COUNT = 'COUNT';
export const INC = 'INC';
export const DEC = 'DEC';

// object being passed in
// { type: COUNT, value: response.data.data }
// action = {
//    type: COUNT
//    value: response.data.data
// }

const counter = (state = 0, action) => {
  switch (action.type) {
    case COUNT:
      return action.value;
    case INC:
      return state + 1;
    case DEC:
      return state - 1;
    default:
      return state
  }
}

export default counter;

// this can grow or be modified to be something more like:
// { type: 'INC', todo: 'Learn Redux' }
// access it this way => action.todo