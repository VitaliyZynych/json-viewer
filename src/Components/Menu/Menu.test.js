import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from './Menu'

configure({ adapter: new Adapter() });

describe('<Menu />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Menu />);
    });

    it('Should change the state when another tab is active', () => {
        const changedTab  = 'tree'
        const expectedState = {
            selectedTab: changedTab
        };
        wrapper.setProps({ changeTabSelection: () => {} })
        wrapper.instance().setActive(changedTab);
        expect(wrapper.state()).toEqual(expectedState);
    });

});