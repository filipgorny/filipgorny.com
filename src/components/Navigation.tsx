import * as React from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component<{}> {
    render() {
        let css = {
            marginRight: '20px',
            color: '#f00'
        };

        return (<div>
            <div className="container">
                <div className="row-12">
                    <nav>
                        <Link style={css} to="/">Home</Link>
                        <Link style={css} to="/profiles">Web profiles</Link>
                    </nav>
                </div>
            </div>
        </div>
        );
    }
}
