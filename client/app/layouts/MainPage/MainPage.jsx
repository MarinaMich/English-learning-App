import './MainPage.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import ForgotPassword from '~/ForgotPassword/containers/ForgotPassword.jsx';

function MainPage() {
    return (
        <Router>
            <div className="main-page">
                <Link to="/forgot_password"><ForgotPassword/></Link>
            </div>
        </Router>
    );
}

export default MainPage;
