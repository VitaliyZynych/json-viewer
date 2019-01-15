import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Output from './Output';
import ReactJson from 'react-json-view';

configure({ adapter: new Adapter() });

describe('<Output />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Output />);
    });

    it('Should render parsed JSON tree', () => {
        expect(wrapper.find(ReactJson)).toHaveLength(1);
    });

    it('Should render <Output /> component with single css class', () => {
        expect(wrapper.find('.Output')).toHaveLength(1);
    });
});