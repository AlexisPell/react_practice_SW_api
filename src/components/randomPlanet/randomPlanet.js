import React, { Component } from 'react'
import './randomPlanet.css'

import SwapiService from './../../services/swapiService'
import Spinner from './../spinner/spinner'
import errorIndicator from '../errorIndicator/errorIndicator'

class RandomPlanet extends Component {

  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  constructor() {
    super()
    this.updatePlanet()
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    })
  }

  onError = err => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random()* 19 + 2)
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }


  render() {

    const { planet : { 
              id, name, population, 
              rotationPeriod, diameter 
            }, 
            loading,
            error } = this.state

    if (loading) {
      return <Spinner />
    } else if (error){ 
       return <errorIndicator />
    } else 
      return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
             />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default RandomPlanet