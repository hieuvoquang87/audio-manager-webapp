/**
 * Created by hieuvo on 4/16/16.
 */
import React, { Component, PropTypes } from 'react';
import { PlayIconSVG, PauseIconSVG } from './Icons';

export default class PlayButton extends Component {
    static propsTypes = {

    };
    constructor (props) {
        super(props);
    }
    shouldComponentUpdate (nextProps) {
        //let { playing, seeking } = this.props;
        //return (
        //    playing !== nextProps.playing || seeking !== nextProps.seeking
        //);
        return true;
    }
    handleClick () {
        if(this.props.isPaused) {
            //emit PLAY_PLAYER event
            this.props.onPlayClick();
        } else {
            //emit PAUSE_PLAYER event
            this.props.onPauseClick();
        }
    }
    render () {
        let iconNode;
        if(this.props.isPaused) {
            iconNode = <PlayIconSVG />;
        } else {
            iconNode = <PauseIconSVG />;
        }
        return (
            <button type="button" className="sb-soundplayer-play-btn" onClick={this.handleClick.bind(this)}>
                {iconNode}
            </button>
        );
    }
}