import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import {Link} from 'react-router-dom'


// React component
class ImgesDemo extends Component {
  render() {
    return (<div>
        <img src={require('../../images/1.png')}/>
        <img src={require('../../images/2.jpg')}/>
        <img src={require('../../images/index/3.jpg')}/>
        <div className={'backgroung_img'}>
        
        </div>
        {/*<Link to="/">清空</Link>*/}
      </div>)
  }
}



module.exports =ImgesDemo