import React from 'react'
import './app.css'

import Header from '../header/header'
import RandomPlanet from '../randomPlanet/randomPlanet'
import ItemList from '../itemList/itemList'
import PersonDetails from '../personDetails/personDetails'

const App = () => {

  return(
    <div className="header">
      <Header />
      <RandomPlanet />

      <div className="row md2">
        <div className="col-md-6">
          <ItemList />
        </div>

        <div className="col-md-6">
          <PersonDetails />
          
        </div>
      </div> 

    </div>
  )
}

export default App