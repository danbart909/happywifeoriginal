import React, { Component, useState } from 'react'
export default class LowerRight extends Component {
  render() {
    return (
      <div id='home-LR'>
        <form id='contact-form' action="https://formspree.io/xwkrwbyl" method="POST">
          <fieldset id='CF-fieldset'>
            <legend className='CF-fieldset-legend hidden'>Contact Form / Get a Quote</legend>
            <input id='CF-home-nameinput' type='text' name='name' placeholder='Name' required />
            <input id='CF-home-emailinput' type='email' name='email' placeholder='Email' required />
            <input id='CF-home-phoneinput' type='phone' name='phone' placeholder='Phone' required />
            <textarea id='CF-home-contentinput' name='content' placeholder='How can we serve you? It can sometimes be best to include a picture.' required defaultValue={""} />
            <input id='CF-home-submit' type='submit' name='send' value='Request a Quote' />
          </fieldset>
        </form>
        <div id='home-LR-bottom'>
          <span>Fill out the form to send an email or text "Come on out to my address" to 770-873-0803 for quick service. Feel free to add any other concerns. We look forward to taking care of you.</span>
        </div>
      </div>
    )
  }
}