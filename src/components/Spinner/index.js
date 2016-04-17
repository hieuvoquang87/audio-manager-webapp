/**
 * Created by hieuvo on 4/16/16.
 */
import React, { Component } from 'react';
import { styles } from './styles.scss';

export class Spinner extends Component {
    render() {
        return (
            <div className={`${styles}`}>
                <div className="spinner-container">
                    <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>
                </div>
            </div>
        );
    }
}
