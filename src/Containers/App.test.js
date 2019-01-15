import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App'
import Input from '../Components/Input/Input';
import Output from '../Components/Output/Output';

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

    it('should render <Output /> when receiving the JSON data', () => {
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
        expect(wrapper.find(Output)).toHaveLength(1);
    });

    it('Should updates the state when JSON is changed', () => {
        const changedJSON  = {
            "changed": "JSON"
        }
        const expectedState = {
            json: changedJSON
        };
        wrapper.instance().changeJSON(changedJSON);
        expect(wrapper.state()).toEqual(expectedState);
    })
    
});