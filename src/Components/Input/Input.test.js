import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from './Input'
configure({ adapter: new Adapter() });

describe('Test of Input Component', () => {
  const wrapper = shallow(<Input />);

  it('Should return default state of resetErrors function', () => {
    wrapper.instance().resetErrors()
    
    const expectedState = {
      errors: {
          jsonParseFailed: {
              status: false,
              message: 'Failed to parse invalid JSON format'
          },
          rawJSON: {
              status: false,
              message: 'Field shouldn\'t be empty'
          }
      }
  }
    expect(wrapper.state()).toEqual(expectedState);
  });
});