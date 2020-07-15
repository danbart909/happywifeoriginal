import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='footer-banner'>
          <span>Schedule Now!</span>
        </div>
        <div id='footer-space1'>
          <div id='footer-labels'>
            <div className='footer-label-text'>
              <div className='footer-label-text-top'>
                <span>Our Info:</span>
              </div>
              <div className='footer-label-text-bottom'>
                <div id='top'>
                  <span>Pretty Good Inc, DBA</span>
                  <span>Happy Wife Junk Removal</span>
                </div>
                <div id='mid'>
                  <span>1820 Tree Top Way</span>
                  <span>Marietta, GA 30062</span>
                </div>
                <div id='bottom'>
                  <span>david@prettygoodinc.com</span>
                  <span>770.873.0803</span>
                </div>
              </div>
            </div>
            <div className='footer-label-text'>
              <div className='footer-label-text-top'>
                <span>Our Services:</span>
              </div>
              <div className='footer-label-text-bottom-links'>
              <Link to='/services/ApplianceRemoval'><span>Appliance Removal</span></Link>
                <Link to='/services/AtticJunkRemoval'><span>Attic Junk Removal</span></Link>
                <Link to='/services/BasementCleanOut'><span>Basement Clean Out</span></Link>
                <Link to='/services/BulkTrashPickUp'><span>Bulk Trash Pick-up</span></Link>
                <Link to='/services/FreezerRemoval'><span>Freezer Removal</span></Link>
                <Link to='/services/GarageCleanOut'><span>Garage Clean Out</span></Link>
                <Link to='/services/GrillRemoval'><span>Grill Removal</span></Link>
                <Link to='/services/HouseholdJunkRemoval'><span>Household Junk Removal</span></Link>
                <Link to='/services/MattressRemoval'><span>Mattress Removal</span></Link>
                <Link to='/services/MovingJunk'><span>Moving Junk</span></Link>
                <Link to='/services/OvenRemoval'><span>Oven Removal</span></Link>
                <Link to='/services/RefrigeratorRemoval'><span>Refrigerator Removal</span></Link>
                <Link to='/services/StoveRemoval'><span>Stove Removal</span></Link>
                <Link to='/services/WasherAndDryerRemoval'><span>Washer and Dryer Removal</span></Link>
                <Link to='/services/YardDebrisRemoval'><span>Yard Debris Removal</span></Link>
                <Link to='/services/ApartmentCleanOut'><span>Apartment Clean Out</span></Link>
                <Link to='/services/CarpetRemoval'><span>Carpet Removal</span></Link>
                <Link to='/services/ForeclosureJunkRemoval'><span>Foreclosure Junk Removal</span></Link>
                <Link to='/services/OfficeJunkRemoval'><span>Office Junk Removal</span></Link>
                <Link to='/services/StorageUnitCleanOut'><span>Storage Unit Clean Out</span></Link>
                <Link to='/services/WarehouseCleanOut'><span>Warehouse Clean Out</span></Link>
                <Link to='/services/CouchRemoval'><span>Couch Removal</span></Link>
                <Link to='/services/DresserRemoval'><span>Dresser Removal</span></Link>
                <Link to='/services/EWasteRemoval'><span>E-Waste Removal</span></Link>
                <Link to='/services/EntertainmentCenterRemoval'><span>Entertainment Center Removal</span></Link>
                <Link to='/services/LoveSeatRemoval'><span>Love Seat Removal</span></Link>
                <Link to='/services/ReclinerRemoval'><span>Recliner Removal</span></Link>
                <Link to='/services/TableAndChairsRemoval'><span>Table and Chairs Removal</span></Link>
                <Link to='/services/TVRemoval'><span>TV Removal</span></Link>
              </div>
            </div>
            <div className='footer-label-text'>
              <div className='footer-label-text-top'>
                <span>Our Zip Codes:</span>
              </div>
              <div className='footer-label-text-bottom'>
                <span>30060</span>
                <span>30062</span>
                <span>30064</span>
                <span>30066</span>
                <span>30067</span>
                <span>30068</span>
                <span>30080</span>
                <span>30082</span>
                <span>30106</span>
                <span>30126</span>
                <span>30127</span>
              </div>
            </div>
            <div className='footer-label-text'>
              <div className='footer-label-text-top'>
                <span>Our Areas:</span>
              </div>
              <div className='footer-label-text-bottom'>
                <span>Cobb County</span>
                <span>East Cobb</span>
                <span>North Cobb</span>
                <span>South Cobb</span>
                <span>West Cobb</span>
              </div>
            </div>
            <div className='footer-label-text'>
              <div className='footer-label-text-top'>
                <span>Our Cities:</span>
              </div>
              <div className='footer-label-text-bottom-links'>
                <Link to='/areas/Acworth'><span>Acworth</span></Link>
                <Link to='/areas/Austell'><span>Austell</span></Link>
                <Link to='/areas/Kennesaw'><span>Kennesaw</span></Link>
                <Link to='/areas/Marietta'><span>Marietta</span></Link>
                <Link to='/areas/Mableton'><span>Mableton</span></Link>
                <Link to='/areas/PowderSprings'><span>Powder Springs</span></Link>
                <Link to='/areas/Roswell'><span>Roswell</span></Link>
                <Link to='/areas/Smyrna'><span>Smyrna</span></Link>
                <Link to='/areas/Vinings'><span>Vinings</span></Link>
                <Link to='/areas/Woodstock'><span>Woodstock</span></Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}