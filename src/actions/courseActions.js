/**
 * Created by russell.frame on 1/6/2017.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  //return {type: 'CREATE_COURSE', course: course};
  //in ES6 if left hand side matches right hand side you can ignore lefthand side
  return {type: types.CREATE_COURSE, course};
}
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}



export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
