import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <div id='header-container'>
          <div id='header-left'>
            <div id='header-left-top'>
              <span>Happy Wife</span>
            </div>
            <div id='header-left-bottom'>
              <span>A Customer Service-Driven Junk Removal Service</span>
            </div>
          </div>
          <div id='header-right'>
            <div id='header-right-top'>
              <span>770.873.0803</span>
            </div>
            <div id='header-right-bottom'>
              <span>Call during work hours</span>
              <span>to schedule instantly</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}