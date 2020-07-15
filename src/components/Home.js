import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import UpperRight from './UpperRight'
import LowerLeft from './LowerLeft'
import LowerRight from './LowerRight'
import HomeBottomHalf from './HomeBottomHalf'
import Top from './Top'
import Bottom from './Bottom'
import HomeUL from '../pages/HomeUL'
import Acworth from '../pages/areas/Acworth'
import Austell from '../pages/areas/Austell'
import Kennesaw from '../pages/areas/Kennesaw'
import Mableton from '../pages/areas/Mableton'
import Marietta from '../pages/areas/Marietta'
import PowderSprings from '../pages/areas/PowderSprings'
import Roswell from '../pages/areas/Roswell'
import Smyrna from '../pages/areas/Smyrna'
import Vinings from '../pages/areas/Vinings'
import Woodstock from '../pages/areas/Woodstock'
import ResidentialJunkRemoval from '../pages/services/ResidentialJunkRemoval'
import ApplianceRemoval from '../pages/services/ApplianceRemoval'
import AtticJunkRemoval from '../pages/services/AtticJunkRemoval'
import BasementCleanOut from '../pages/services/BasementCleanOut'
import BulkTrashPickUp from '../pages/services/BulkTrashPickUp'
import FreezerRemoval from '../pages/services/FreezerRemoval'
import GarageCleanOut from '../pages/services/GarageCleanOut'
import GrillRemoval from '../pages/services/GrillRemoval'
import HouseholdJunkRemoval from '../pages/services/HouseholdJunkRemoval'
import MattressRemoval from '../pages/services/MattressRemoval'
import MovingJunk from '../pages/services/MovingJunk'
import OvenRemoval from '../pages/services/OvenRemoval'
import RefrigeratorRemoval from '../pages/services/RefrigeratorRemoval'
import StoveRemoval from '../pages/services/StoveRemoval'
import WasherAndDryerRemoval from '../pages/services/WasherAndDryerRemoval'
import YardDebrisRemoval from '../pages/services/YardDebrisRemoval'
import CommercialJunkRemoval from '../pages/services/CommercialJunkRemoval'
import ApartmentCleanOut from '../pages/services/ApartmentCleanOut'
import CarpetRemoval from '../pages/services/CarpetRemoval'
import ForeclosureJunkRemoval from '../pages/services/ForeclosureJunkRemoval'
import OfficeJunkRemoval from '../pages/services/OfficeJunkRemoval'
import StorageUnitCleanOut from '../pages/services/StorageUnitCleanOut'
import WarehouseCleanOut from '../pages/services/WarehouseCleanOut'
import FurnitureJunkRemoval from '../pages/services/FurnitureJunkRemoval'
import CouchRemoval from '../pages/services/CouchRemoval'
import DresserRemoval from '../pages/services/DresserRemoval'
import EWasteRemoval from '../pages/services/EWasteRemoval'
import EntertainmentCenterRemoval from '../pages/services/EntertainmentCenterRemoval'
import LoveSeatRemoval from '../pages/services/LoveSeatRemoval'
import ReclinerRemoval from '../pages/services/ReclinerRemoval'
import TableAndChairsRemoval from '../pages/services/TableAndChairsRemoval'
import TVRemoval from '../pages/services/TVRemoval'

export default class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife Junk Removal</title>
          <meta name="description" content="Happy Wife Junk Removal Homepage" />
        </Helmet>
        <div id='home-top-half'>
          <div id='home-div'>
            {/* <div id='home-top'>
              <Top />
            </div> */}
            <div id='home-middle'>
              <div id='home-middle-left'>
                <Switch>
                  <Route exact path='/' component={HomeUL} />
                  <Route path='/areas/Acworth' component={Acworth} />
                  <Route path='/areas/Austell' component={Austell} />
                  <Route path='/areas/Kennesaw' component={Kennesaw} />
                  <Route path='/areas/Mableton' component={Mableton} />
                  <Route path='/areas/Marietta' component={Marietta} />
                  <Route path='/areas/PowderSprings' component={PowderSprings} />
                  <Route path='/areas/Roswell' component={Roswell} />
                  <Route path='/areas/Smyrna' component={Smyrna} />
                  <Route path='/areas/Vinings' component={Vinings} />
                  <Route path='/areas/Woodstock' component={Woodstock} />
                  <Route path='/services/ResidentialJunkRemoval' component={ResidentialJunkRemoval} />
                  <Route path='/services/ApplianceRemoval' component={ApplianceRemoval} />
                  <Route path='/services/AtticJunkRemoval' component={AtticJunkRemoval} />
                  <Route path='/services/BasementCleanOut' component={BasementCleanOut} />
                  <Route path='/services/BulkTrashPickUp' component={BulkTrashPickUp} />
                  <Route path='/services/FreezerRemoval' component={FreezerRemoval} />
                  <Route path='/services/GarageCleanOut' component={GarageCleanOut} />
                  <Route path='/services/GrillRemoval' component={GrillRemoval} />
                  <Route path='/services/HouseholdJunkRemoval' component={HouseholdJunkRemoval} />
                  <Route path='/services/MattressRemoval' component={MattressRemoval} />
                  <Route path='/services/MovingJunk' component={MovingJunk} />
                  <Route path='/services/OvenRemoval' component={OvenRemoval} />
                  <Route path='/services/RefrigeratorRemoval' component={RefrigeratorRemoval} />
                  <Route path='/services/StoveRemoval' component={StoveRemoval} />
                  <Route path='/services/WasherAndDryerRemoval' component={WasherAndDryerRemoval} />
                  <Route path='/services/YardDebrisRemoval' component={YardDebrisRemoval} />
                  <Route path='/services/CommercialJunkRemoval' component={CommercialJunkRemoval} />
                  <Route path='/services/ApartmentCleanOut' component={ApartmentCleanOut} />
                  <Route path='/services/CarpetRemoval' component={CarpetRemoval} />
                  <Route path='/services/ForeclosureJunkRemoval' component={ForeclosureJunkRemoval} />
                  <Route path='/services/OfficeJunkRemoval' component={OfficeJunkRemoval} />
                  <Route path='/services/StorageUnitCleanOut' component={StorageUnitCleanOut} />
                  <Route path='/services/WarehouseCleanOut' component={WarehouseCleanOut} />
                  <Route path='/services/FurnitureJunkRemoval' component={FurnitureJunkRemoval} />
                  <Route path='/services/CouchRemoval' component={CouchRemoval} />
                  <Route path='/services/DresserRemoval' component={DresserRemoval} />
                  <Route path='/services/EWasteRemoval' component={EWasteRemoval} />
                  <Route path='/services/EntertainmentCenterRemoval' component={EntertainmentCenterRemoval} />
                  <Route path='/services/LoveSeatRemoval' component={LoveSeatRemoval} />
                  <Route path='/services/ReclinerRemoval' component={ReclinerRemoval} />
                  <Route path='/services/TableAndChairsRemoval' component={TableAndChairsRemoval} />
                  <Route path='/services/TVRemoval' component={TVRemoval} />
                </Switch>
                <LowerLeft/>
              </div>
              <div id='home-middle-right'>
                <UpperRight/>
                <LowerRight/>
              </div>
            </div>
            <div id='home-bottom'>
              <a href='/text.txt' />
              <a href='/text.txt'>a</a>
              <Bottom />
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={HomeBottomHalf} />
        </Switch>
      </>
    )
  }
}