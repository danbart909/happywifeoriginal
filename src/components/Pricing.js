import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import './Pricing.css'
import Top from './Top';
import Bottom from './Bottom';
import { Link } from 'react-router-dom'

export default class Pricing extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Pricing</title>
          <meta name="description" content="Happy Wife - Pricing" />
        </Helmet>
        <div id='pricing-page'>
          {/* <div id='home-top'>
            <Top />
          </div> */}
          <div id='pricing-container'>
            <div id='pricing-left'>
              <span>Our trailer is 15 cubic yards!</span>
              <span>A full load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</span>
              <span>Our Full load is 350 dollars</span>
              <span>A 2/3 Load is 250 dollars</span>
              <span>A 1/3 load is 150 dollars</span>
              <span>An single item removal cost 99 dollars.</span>
              <span>We only charge you for what you use!</span>
            </div>
            <div id='pricing-right'>
              <img id='pricing-pic' src='https://i.imgur.com/oGXAo1U.jpg' alt='a picture of our trailer' />
            </div>
          </div>
          <div id='pricing-modules'>
            <div id='modules-left'>
              <div id='pricing-L'>
                <div id='pricing-L-container'>
                  <div id='pricing-L-text'>
                    <span id='pricing-L-text-1'>10% Garage Discount!</span>
                    <span id='pricing-L-text-2'>Place your junk in your garage or one easily accessible area for quick service and receive a 10% discount!</span>
                  </div>
                </div>
              </div>
            </div>
            <div id='modules-right'>
              <div id='pricing-R'>
                <div id='pricing-R-container'>
                  <span id='pricing-R-title'>Easy scheduling!</span>
                  <div id='pricing-R-text'>
                    <span id='pricing-R-text-1'>Just send us a text and we will make sure all your needs are met! We will be over soon!
                    {/* 1) Fill out the form on the right to send an email OR send us a text</span>
                    <span id='pricing-R-text-2'>2) Check out our pricing page <Link to='/Pricing'>here</Link>.</span>
                    <span id='pricing-R-text-3'>3) We will contact you shortly to schedule a time that works for you! */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='home-bottom'>
            <Bottom />
          </div>
        </div>
      </>
    )
  }
}