/**
 * Created by russell.frame on 1/6/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  //ES5 short hand property name
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
