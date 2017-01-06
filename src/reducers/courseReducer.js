/**
 * Created by russell.frame on 1/6/2017.
 */
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      //...state is utilizing the es6 spread operator
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
