/**
 * Created by hieuvo on 4/16/16.
 */
import React, { Component, PropTypes } from 'react';
import { PrevIconSVG } from './Icons';

export default class PrevButton extends Component {
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
                <PrevIconSVG />
            </button>);
    }
}