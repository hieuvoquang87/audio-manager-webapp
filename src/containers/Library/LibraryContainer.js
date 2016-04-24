/**
 * Created by hieuvo on 4/17/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actionCreators from 'actions/library_actions';

import {MediaSet} from './MediaSet';

import {styles} from './styles.scss';


@connect(
    state => state.library,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class LibraryContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchMediaSets();
    }

    renderMediaSet() {
        return this.props.library.map((mediaSet) => {
            return (
                <MediaSet key={mediaSet.id} mediaSet={mediaSet} {...this.props}/>
            )
        });

    }

    render() {
        return (
            <div className={`${styles}`}>
                <div className="list-group">
                    {this.renderMediaSet.bind(this)()}
                </div>
            </div>)
    }
}