/**
 * Created by russell.frame on 1/6/2017.
 */
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CoursesList = ({courses, deleteCourse}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};




CoursesList.propTypes = {
  courses: PropTypes.array.isRequired

};

export default CoursesList;
