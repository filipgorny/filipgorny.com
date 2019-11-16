import * as React from 'react';
import { texts } from './../../texts';

export class HomePage extends React.Component<{}> {
    render() {
        return (<div dangerouslySetInnerHTML={{__html: texts.intro}}>
        </div>
        );
    }
}
