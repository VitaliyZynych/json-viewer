import React, { Component } from 'react';
import { initPlugin } from '../../utils/json-viewer/jquery.json-viewer.js';
import '../../utils/json-viewer/jquery.json-viewer.css';
import styles from './Output.module.css';
const $ = require('jquery');

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 0,
            value: null,
            data: props.data,
        };
        this.toggleSection = this.toggleSection.bind(this);
    }

    toggleSection(e) {
        e.preventDefault();
        var target = $(e.target).toggleClass('collapsed').siblings('ul.json-dict, ol.json-array');
        target.toggle();
        if (target.is(':visible')) {
            target.siblings('.json-placeholder').remove();
        }
        else {
            var count = target.children('li').length;
            var placeholder = count + (count > 1 ? ' items' : ' item');
            target.after('<a href class="json-placeholder">' + placeholder + '</a>');
        }
    }
    componentDidMount() {
        window.json = this.props.data;
        this.$node = $(this.refs.jsonRenderer);

        if ($) {
            const pluginOptions = {
                collapsed: false,
                withQuotes: true
            };
            initPlugin(this.$node, $, this.props.data, pluginOptions);
            $(document).on("click", "a.json-toggle", this.toggleSection);

          setTimeout(() => {
                if ({}.collapsed === true) {
                $.each($('a.json-toggle'), function (index, item) {
                    if (index > 0) {
                        $(item).trigger('click');
                    }
                });
            }
          }, 1000);
        }
    }

    componentWillUnmount() {
        $(document).off("click", "a.json-toggle", this.toggleSection);
    }

    render() {
        window.json = this.props.data;
        return (
            <div className={styles.Output}>
                <h1>JSON tree</h1>
                <pre ref="jsonRenderer" className={styles.jsonOutput}></pre>
            </div>
        );
    }
}

export default Output;
