/**
 * Created by hieuvo on 4/22/16.
 */
import React, {Component, PropTypes} from 'react';

export class MediaSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }
    onMediaItemSelected (mediaItem) {
        //console.log(mediaItem)
        this.props.selectMediaItem(mediaItem);
    }
    renderMediaItem(mediaItems) {
        return mediaItems.map((mediaItem) => {
            return (
                <li key={mediaItem.id} className={`list-group-item ${this.state.isOpen? '': 'hidden'}`}
                    onClick={() => this.onMediaItemSelected(mediaItem)}>
                    <h4 className="list-group-item-heading">{mediaItem.name}</h4>
                    <p className="list-group-item-text">{mediaItem.url}</p>
                </li>);
        });
    }
    render() {
        return (
            <div>
                <li className={`list-group-item active`}
                    onClick={() => {this.state.isOpen? this.setState({isOpen: false}): this.setState({isOpen: true})}}>
                    <h4 className="list-group-item-heading">{this.props.mediaSet.name}</h4>
                </li>
                {this.renderMediaItem.bind(this)(this.props.mediaSet.mediaItems)}
            </div>
        )
    }
}