import React, { Component } from 'react';
import Menu from '../Components/Menu/Menu';
import Output from '../Components/Output/Output';
import Input from '../Components/Input/Input';
import '../css/style.css';

class App extends Component {
    
    state = {
        selectedTab: 'jsonInput',
        json: {
            "valid": true
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

    render() {
        return (
            <div className="App">
                <Menu 
                    changeTabSelection={ this.changeTabSelection.bind(this) }
                    selectedTab={ this.state.selectedTab }
                />
                <div className="tab-container">
                    {
                        this.state.selectedTab === 'tree' && 
                        <Output 
                            data={ this.state.json }
                        />
                    }
                    {
                        this.state.selectedTab === 'jsonInput' &&
                        <Input  
                            json={ this.state.json }
                            changeJSON={ this.changeJSON.bind(this) }
                        />
                    }
                </div>
            </div>
        );
    }
}

export default App;
