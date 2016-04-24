import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import {TopImage} from 'components/TopImage';
import {Spinner} from 'components/Spinner';
import {AudioPlayer} from 'components/AudioPlayer';
import {Library} from 'containers/Library';

const metaData = {
    title: 'React Redux Boilerplate',
    description: 'Start you project easy and fast with modern tools',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags',
        },
    },
};

export class Home extends Component {
    render() {
        return (
            <section>
                <DocumentMeta {...metaData} />
                <div className="container">
                    <Spinner />
                    <div className="row">
                        <AudioPlayer />
                    </div>
                    <div className="row">
                        <Library />
                    </div>
                </div>
            </section>
        );
    }
}
