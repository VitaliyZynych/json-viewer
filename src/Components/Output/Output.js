import React from 'react';
import styles from './Output.module.css'
import ReactJson from 'react-json-view'

const Output = (props) => (
            <div className={styles.Output}>
                <h1>JSON tree</h1>
                <div className={styles.jsonOutput}>
                    <ReactJson 
                        src={ props.data }
                        name={ false }
                        enableClipboard={ false }
                        displayObjectSize={ false }
                        displayDataTypes={ false }
                        onDelete={ event => props.updated(event) }
                    />
                </div>
            </div>
);

export default Output;