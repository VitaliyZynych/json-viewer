import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App'
import Input from '../Components/Input/Input';
import Menu from '../Components/Menu/Menu';

configure({adapter: new Adapter()});

describe('<App />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render <Input /> when receiving the JSON data', () => {
        wrapper.setProps({
            json: {
                "string": "this is a test ...",
                "integer": 42,
                "array": [1,2,3,"test",null],
                "float": 3.14159,
                "object": {
                    "first-child": true,
                    "second-child": false,
                    "last-child": null
                },
                "string_number": "1234",
                "date": "2019-01-14T12:57:40.972Z"
            }
        });
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('should render <Menu /> when receiving the selected tab', () => {
        wrapper.setProps({ selectedTab: 'jsonInput' });
        expect(wrapper.find(Menu)).toHaveLength(1);
    });

    it('Should updates the state when JSON is changed', () => {
        const changedJSON  = {
            "changed": "JSON"
        }
        const expectedState = {
            json: changedJSON,
            selectedTab: 'tree',
        };
        wrapper.instance().changeJSON(changedJSON);
        expect(wrapper.state()).toEqual(expectedState);
    });

    it('Should updates the state when selected tab is Output', () => {
        const expectedState = {
            selectedTab: 'tree',
            json: {
                "string": "this is a test ...",
                "integer": 42,
                "array": [1,2,3,"test",null],
                "float": 3.14159,
                "object": {
                    "first-child": true,
                    "second-child": false,
                    "last-child": null
                },
                "string_number": "1234",
                "date": "2019-01-14T12:57:40.972Z"
            }
        };
        wrapper.instance().changeTabSelection(expectedState.selectedTab);
        expect(wrapper.state()).toEqual(expectedState);
    })
    
});