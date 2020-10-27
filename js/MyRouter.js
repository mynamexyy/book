import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import {BrowserRouter,Route,hashHistory,HashRouter} from 'react-router-dom'
import store from './store/store'

import Menu from './pages/Menu'
import ImgesDemo from './pages/ImgesDemo'
import AddAndReduceDemo from './pages/AddAndReduceDemo'
import AxiosWithReduxDemo from './pages/AxiosWithReduxDemo';
import TableDemo from './pages/TableDemo';
import localDemo from './pages/localDemo'
export default class MyRouter extends Component {
    render() {
        return (
            
                <Provider store={store}>
                    <BrowserRouter history={hashHistory}>
                        <div>
                            <Route name='index' path='/' component={Menu}></Route>
                            <Route name='index' path='/datademo' component={AddAndReduceDemo}></Route>
                            <Route name='index' path='/imgesdemo' component={ImgesDemo}></Route>
                            <Route name='index' path='/axiosdemo' component={AxiosWithReduxDemo}></Route>
                            <Route name='index' path='/TableDemo' component={TableDemo}></Route>
                            <Route name='index' path='/localDemo' component={localDemo}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            
        )
    }
}