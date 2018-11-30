import React, { Component } from 'react';
import styles from "./Input.module.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                jsonParseFailed: {
                    status: false,
                    message: 'Failed to parse invalid JSON format'
                },
                rawJSON: {
                    status: false,
                    message: 'Field shouldn\'t be empty'
                }
            },
            json: JSON.stringify(props.json, null, 4)
        }
    }

    parseJSON() {
        const rawJSON = this.refs.rawJSON.value.trim();
        this.resetErrors();
        if (!rawJSON) {
            this.setState({
                errors: {
                    ...this.state.errors,
                    ...{
                        ...this.state.errors,
                        rawJSON: {
                            ...this.state.errors.rawJSON,
                            ...{
                                status: true
                            }
                        }
                    }
                }
            });
            return;
        }

        try {
            const json = JSON.parse(rawJSON);
            this.setState({
                json: json
            })
            this.props.changeJSON(json);
        } catch (e) {
            this.setState({
                'errors': {
                    ...this.state.errors,
                    ...{
                        ...this.state.errors,
                        jsonParseFailed: {
                            ...this.state.errors.jsonParseFailed,
                            ...{
                                status: true
                            }
                        }
                    }
                }
            });
        }
    }

    resetErrors() {
        this.setState({
            'errors': {
                ...this.state.errors,
                ...{
                    ...this.state.errors,
                    jsonParseFailed: {
                        ...this.state.errors.jsonParseFailed,
                        ...{
                            status: false
                        }
                    },
                    rawJSON: {
                        ...this.state.errors.rawJSON,
                        ...{
                            status: false
                        }
                    }
                }
            }
        });
    }

    render() {
        return (
            <div className={styles.Input}>
                <h1>Please enter JSON text</h1>
                {
                    this.state.errors.jsonParseFailed.status &&
                    (<div className={styles.jsonInputErrorMsg}>
                        {this.state.errors.jsonParseFailed.message}
                    </div>)
                }
                {
                    this.state.errors.rawJSON.status &&
                    (<div className={styles.jsonInputErrorMsg}>
                        {this.state.errors.rawJSON.message}
                    </div>)
                }
                <div className={styles.formInput}>
                    <textarea ref="rawJSON" defaultValue={this.state.json} className={styles.jsonInput}></textarea>
                </div>
                
                <div className={`${styles.formInput} ${styles.saveBtnArea}`}>
                    <button
                        className={ styles.btn }
                        onClick={this.parseJSON.bind(this)}
                    >Parse JSON
                    </button>
                </div>
            </div>
        );
    }
}

export default Input;
