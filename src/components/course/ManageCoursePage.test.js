/**
 * Created by rframe on 1/17/2017.
 */
import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage'; //raw component for testing
//import ManageCoursePage from './ManageCoursePage'; //default import statement

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      course: {id: '', watchHref: '', title: '', aurhtorId: '', length: '', category: ''},
      actions: {
        saveCourse: () => { return Promise.resolve(); }
      }
    };

    //const wrapper = mount(<Provider store={store}><ManageCoursePage /></Provider>);
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

  });
});
