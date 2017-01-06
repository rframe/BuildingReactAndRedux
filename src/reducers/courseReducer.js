/**
 * Created by russell.frame on 1/6/2017.
 */
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      //...state is utilizing the es6 spread operator
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
