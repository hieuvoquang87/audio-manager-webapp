/**
 * Created by hieuvo on 4/16/16.
 */
import React, { Component, PropTypes } from 'react';
import { NextIconSVG } from './Icons';

export default class NextButton extends Component {
    static propTypes = {

    };
    shouldComponentUpdate() {
        return false;
    }
    handleClick () {

    }
    render () {
        return (
            <button type="button" className="sb-soundplayer-play-btn" onClick={this.handleClick.bind(this)}>
                <NextIconSVG />
            </button>);
    }
}