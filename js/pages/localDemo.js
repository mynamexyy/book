import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import {Link} from 'react-router-dom'


// React component
class ImgesDemo extends Component {
    state={
        cookie:document.cookie,
        locastorage:localStorage
    }
    func=()=>{
    
    }
    render() {
        return (<div>
            <div>cookie:{this.state.cookie}</div>
            <div>locastorage:{JSON.stringify(this.state.locastorage)}</div>
        </div>)
    }
}



module.exports =ImgesDemo