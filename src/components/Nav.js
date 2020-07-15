import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <>
        <div id='nav-container'>
          <div className='nav nav-one'>
            <Link to='/'>
              <button className='navbutton rightbutton'>
                <span>Home</span>
              </button>
            </Link>
          </div>
          <div className='nav nav-two'>
            <Link to='/ServiceAreas'>
            <button className='navbutton'>
              <span>Service Areas</span>
            {/* <div className='dropdown'>
              <Link to='/areas/Acworth'><p>Acworth</p></Link>
              <Link to='/areas/Austell'><p>Austell</p></Link>
              <Link to='/areas/Kennesaw'><p>Kennesaw</p></Link>
              <Link to='/areas/Marietta'><p>Marietta</p></Link>
              <Link to='/areas/Mableton'><p>Mableton</p></Link>
              <Link to='/areas/PowderSprings'><p>Powder Springs</p></Link>
              <Link to='/areas/Roswell'><p>Roswell</p></Link>
              <Link to='/areas/Smyrna'><p>Smyrna</p></Link>
              <Link to='/areas/Vinings'><p>Vinings</p></Link>
              <Link to='/areas/Woodstock'><p>Woodstock</p></Link>
            </div> */}
            </button>
            </Link>
          </div>
          <div className='nav nav-three'>
            <Link to='/OurServices'>
            <button className='navbutton'>
              <span>Our Services</span>
            {/* <div className='dropdown'>
              <Link to='/services/ApplianceRemoval'><p>Appliance Removal</p></Link>
              <Link to='/services/AtticJunkRemoval'><p>Attic Junk Removal</p></Link>
              <Link to='/services/BasementCleanOut'><p>Basement Clean Out</p></Link>
              <Link to='/services/BulkTrashPickUp'><p>Bulk Trash Pick-up</p></Link>
              <Link to='/services/CommercialJunkRemoval'><p>Commercial Junk Removal</p></Link>
              <Link to='/services/CouchRemoval'><p>Couch Removal</p></Link>
              <Link to='/services/FurnitureJunkRemoval'><p>Furniture Junk Removal</p></Link>
              <Link to='/services/HouseholdJunkRemoval'><p>Household Junk Removal</p></Link>
              <Link to='/services/RefrigeratorRemoval'><p>Refrigerator Removal</p></Link>
              <Link to='/services/ResidentialJunkRemoval'><p>Residential Junk Removal</p></Link>
              <Link to='/services/StorageUnitCleanOut'><p>Storage Unit Clean Out</p></Link>
              <Link to='/services/TVRemoval'><p>TV Removal</p></Link>
              <Link to='/services/WasherAndDryerRemoval'><p>Washer and Dryer Removal</p></Link>
              <Link to='/services/YardDebrisRemoval'><p>Yard Debris Removal</p></Link>
            </div> */}
            </button>
            </Link>
          </div>
          <div className='nav nav-four'>
            <Link to='/Pricing'>
            <button className='navbutton'>
              <span>Pricing</span>
            </button>
            </Link>
          </div>
          <div className='nav nav-five'>
            <Link to='/BookNow'>
            <button className='navbutton leftbutton'>
              <span>Book Now</span>
            </button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}