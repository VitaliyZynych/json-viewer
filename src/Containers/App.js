import React, { Component } from 'react';
import Menu from '../Components/Menu/Menu';
import Output from '../Components/Output/Output';
import Input from '../Components/Input/Input';
import styles from './App.module.css'

class App extends Component {
    
    state = {
        selectedTab: 'jsonInput',
        json: {
            "string": "this is a test ...",
            "integer": 42,
            "array":[ 1, 2, 3, "test", NaN ],
            "float":3.14159,
            "undefined":undefined,
            "object": {
                "first-child": true,
                "second-child": false,
                "last-child": null
            },
            "string_number": "1234",
            "date": new Date(Date.now())
        }
    };
    
    changeTabSelection(tab) {
        this.setState({selectedTab: tab});
    }

    changeJSON(json) {
        this.setState({
            json: json
        },() => {
            this.changeTabSelection('tree');
        });
    }

    jsonUpdateHandler(event){
        this.setState({
            json: event.updated_src
        })
    }


    render() {
        return (
            <div className={styles.App}>
                <Menu 
                    changeTabSelection={ this.changeTabSelection.bind(this) }
                    selectedTab={ this.state.selectedTab }
                />
                <div className="tab-container">
                    {
                        this.state.selectedTab === 'tree' && 
                        <Output 
                            data={ this.state.json }
                            updated={ this.jsonUpdateHandler.bind(this) }
                        />
                    }
                    {
                        this.state.selectedTab === 'jsonInput' &&
                        <Input  
                            data={ this.state.json }
                            changeJSON={ this.changeJSON.bind(this) }
                            updated={ this.jsonUpdateHandler.bind(this) }
                        />
                    }
                </div>
            </div>
        );
    }
}

export default App;
