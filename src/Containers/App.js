import React, { PureComponent } from 'react';
import Output from '../Components/Output/Output';
import Input from '../Components/Input/Input';
import styles from './App.module.css'

class App extends PureComponent {
    
    state = {
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

    changeJSON(updatedJSON) {
        this.setState({
            json: updatedJSON
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
                <div className="tab-container">
                    <Input
                        data={ this.state.json }
                        changeJSON={ this.changeJSON.bind(this) }
                        updated={ this.jsonUpdateHandler.bind(this) }
                    />
                    <Output 
                        data={ this.state.json }
                        updated={ this.jsonUpdateHandler.bind(this) }
                    />
                </div>
            </div>
        );
    }
}

export default App;
