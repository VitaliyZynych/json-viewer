import React, { PureComponent } from 'react';
import styles from "./Menu.module.css"

class Menu extends PureComponent {

    state = {
        selectedTab: this.props.selectedTab
    };

    setActive(tab) {
        this.setState({
            selectedTab: tab
        });
        this.props.changeTabSelection(tab);
    }

    componentWillMount () {
        this.prepareComponentState(this.props);
    }  

    componentWillReceiveProps(nextProps) {
        this.prepareComponentState(nextProps);
    }

    prepareComponentState(props) {
        this.setState({
            selectedTab: props.selectedTab
        });
    }

    render() {
        return (
            <div className={styles.Menu}>
                <ul className={styles.menus}>
                    <li className={this.state.selectedTab === 'tree'? styles.active : ''}>
                        <button onClick={this.setActive.bind(this, 'tree')}>Output</button>
                    </li>
                    <li className={this.state.selectedTab === 'jsonInput'? styles.active : ''}>
                        <button onClick={this.setActive.bind(this, 'jsonInput')}>Input</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
