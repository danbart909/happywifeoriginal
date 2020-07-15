import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import OurServices from './components/OurServices'
import ServiceAreas from './components/ServiceAreas'
import Pricing from './components/Pricing'
import BookNow from './components/BookNow'

export default class App extends Component {
  render() {
    return (
      <div id='overlord'>
        <section id='header'>
          <Header/>
        </section>
        <section id='nav'>
          <Nav/>
        </section>
        <section id='body'>
          <Switch>
            <Route path='/OurServices' component={OurServices} />
            <Route path='/ServiceAreas' component={ServiceAreas} />
            <Route path='/Pricing' component={Pricing} />
            <Route path='/BookNow' component={BookNow} />
            <Route path='/' component={Home} />
          </Switch>
        </section>
        <section id='footer'>
          <Footer/>
        </section>
      </div>
    )
  }
}