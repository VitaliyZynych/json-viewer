import React from 'react'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Input />);
    });

    it('Should render component with single css class', () => {
        expect(wrapper.find('.Input')).toHaveLength(1);
    });

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

      it('Should find the button', () => {
        const wrapper = mount(<Input />);
        expect(wrapper.find('button')).toHaveLength(1);
      });
      
});