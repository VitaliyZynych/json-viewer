import React, { PureComponent } from 'react';
import styles from "./Input.module.css"

class Input extends PureComponent {

    state = {
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

                <div className={styles.formInput}>
                    <textarea 
                        ref="rawJSON"
                        value={JSON.stringify(this.props.data)}
                        onChange={ this.props.updated }
                        className={styles.jsonInput}
                    ></textarea>
                </div>

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

                <div className={`${styles.formInput} ${styles.saveBtnArea}`}>
                    <button
                        className={ styles.btn }
                        onClick={ this.parseJSON.bind(this) }
                    >Parse JSON
                    </button>
                </div>
            </div>
        );
    }
}

export default Input;
