import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import {loginAuthAction} from '../redux/actions/authActions';
import {DashboardScreen} from '../pages/dashboard/DashboardScreen';


export const AppRouter = () => {
    const dispatch = useDispatch();
    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    useEffect(() => {
        
        const localToken=localStorage.getItem('token');
        if ( localToken ) {
            dispatch( loginAuthAction( 'manuel@test.com','123456') );
            setIsLoggedIn( true );
        } else {
            setIsLoggedIn( false );
        }
        setChecking(false);
    }, [ dispatch, setChecking, setIsLoggedIn ])
    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }
  return (
    <Router>
        <Switch>
            <PublicRoute 
                path="/auth"
                component={ AuthRouter }
                isAuthenticated={ isLoggedIn }
            />
             <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ DashboardScreen }
                    />

            <Redirect to="/auth/login" />
        </Switch>
    </Router>
  )
}