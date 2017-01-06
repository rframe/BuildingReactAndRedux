/**
 * Created by russell.frame on 1/6/2017.
 */
import * as types from './actionTypes';

export function createCourse(course) {
  //return {type: 'CREATE_COURSE', course: course};
  //in ES6 if left hand side matches right hand side you can ignore lefthand side
  return {type: types.CREATE_COURSE, course};
}
