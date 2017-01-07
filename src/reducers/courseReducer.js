/**
 * Created by russell.frame on 1/6/2017.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.CREATE_COURSES_SUCCESS:
      //...state is utilizing the es6 spread operator
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSES_SUCCESS:
      //...state is utilizing the es6 spread operator
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
