import * as React from 'react';
import { texts } from '../../texts';

export class ProfilesPage extends React.Component<{}> {
    render() {
        return (<div dangerouslySetInnerHTML={{__html: texts.profiles}}>
        </div>
        );
    }
}
