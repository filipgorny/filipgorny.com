import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from "./Login";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

class App extends React.Component<{}> {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row-12">
                        <Login />
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;