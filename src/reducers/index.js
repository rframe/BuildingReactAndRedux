/**
 * Created by russell.frame on 1/6/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  //ES5 short hand property name
  courses,
  authors
});

export default rootReducer;
