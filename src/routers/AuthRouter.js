import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {LoginScreen} from '../pages/login/components/LoginScreen';
import {RegisterScreen} from '../pages/register/components/RegisterScreen';


export const AuthRouter = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <Switch>
                        <Route 
                            exact
                            path="/auth/login"
                            component={ LoginScreen }
                        />
                        <Route 
                            exact
                            path="/auth/register"
                            component={ RegisterScreen }
                        />
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
