import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { Navigation } from './Navigation';
import { ProfilesPage } from './pages/ProfilesPage';

class App extends React.Component<{}> {
    render() {
        return (
            <div>
            <div className="container">
                <div id="top"><h1><span className="red">Filip Górny</span><span className="gray">Senior Software Engineer</span></h1></div>
            </div>
            <Router>
                <Navigation/>
                <div className="container">
                    <div className="row-12">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/profiles" component={ProfilesPage} />
                    </div>
                </div>
            </Router>
            <div className="container">
                <div className="row-12">
                    <footer>
                        Copyright &copy; 2019 by Filip Górny | Made with Typescript and React | see source code: <a href="https://github.com/filipgorny/filipgorny.com">github.com/filipgorny/filipgorny.com</a>
                    </footer>
                </div>
            </div>
            </div>
        );
    }
}

export default App;