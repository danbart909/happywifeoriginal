import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LowerLeft extends Component {
  render() {
    return (
      <div id='home-LL'>
        <div id='home-LL-container'>
          <span id='home-LL-title'>Simple Scheduling</span>
          <div id='home-LL-text'>
            <span id='home-LL-text-1'>1) Fill out the form on the right to send an email OR send us a text</span>
            <span id='home-LL-text-2'>2) Check out our pricing page <Link to='/Pricing'>here</Link>.</span>
            <span id='home-LL-text-3'>3) We will contact you shortly to schedule a time that works for you!</span>
          </div>
        </div>
      </div>
    )
  }
}