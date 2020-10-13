import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { Main, Login, News, Profile } from './pages'
import { useSelector } from 'react-redux';

export default function () {

    const auth = useSelector(state => state.auth)

    return (
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/news">
                <News />
            </Route>
            <Route path="/profile">
                {auth.isAuthenticated ?
                    <Profile /> :
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />}
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    )
}