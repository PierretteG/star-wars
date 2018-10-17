import React, { Component } from 'react';
import PersonCardList from '../components/People/PersonCardList';
import PlanetCardList from '../components/Planets/PlanetCardList';
import FilmCardList from '../components/Films/FilmCardList';
import SpeciesCardList from '../components/Species/SpeciesCardList';
import StarshipCardList from '../components/Starships/StarshipCardList';
import VehicleCardList from '../components/Vehicles/VehicleCardList';
import SearchBox from '../components/SearchBox';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
import './App.css';
import Particles from 'react-particles-js';


const particlesOptions = {
    particles: {
      number: {
        value: 87,
        density: {
          enable: true,
          value_area: 1000
        }  
      }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 800,
            "line_linked": {
              "opacity": 1
            }
          },
        }
      },
    }


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            people: [],
            films: [],
            planets: [],
            species: [],
            starships: [],
            vehicles: [],
            searchfield: '',
            route: 'menu'
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    onButtonSelect = (route) => {
        this.setState({ route: route})
    }
    
      
    render() {
        const { results, searchfield, route } = this.state;

            
        if (route !== 'menu') {
            fetch(`https://swapi.co/api/${route}/`)
            .then(response => response.json())
            .then(data => this.setState({ results: data.results }))                
        }

        if (route === 'films') {
            var filteredResults = results.filter(data => {
            return data.title.toLowerCase().includes(searchfield.toLowerCase())
            })           
        } else {
            filteredResults = results.filter(data => {
            return data.name.toLowerCase().includes(searchfield.toLowerCase())
            })
        }
  
        if (!results.length && route !== 'menu') {
        return <h1 className='tc'>Loading...</h1> 
        } else {
            switch (route) {
                default:
                    return (
                        <div className='tc'>
                            <h1 className='f1 mt5'>Star Wars</h1>
                            <h3 className='f3 mt4'>Come explore the Star Wars world!</h3>
                            <Menu onButtonSelect={this.onButtonSelect} />
                            <Particles className='particles'
                            params = {particlesOptions} /> 
                        </div>
                    );
                case 'films':
                    return (
                        <div className='tc'>
                            <Navigation />
                            <h1 className='f1'>Star Wars Films</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <FilmCardList films={filteredResults} />
                        </div>
                    ); 
                case 'people':
                    return (
                        <div className='tc'>
                            <Navigation />
                            <h1 className='f1'> Star Wars People</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <PersonCardList people={filteredResults} />
                        </div>
                    );
                case 'planets':
                    return (
                        <div className='tc'>
                            <Navigation />
                            <h1 className='f1'>Star Wars Planets</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <PlanetCardList planets={filteredResults} />
                        </div>
                    );
                case 'species':
                    return (
                        <div className='tc'>
                            <Navigation />
                            <h1 className='f1'>Star Wars Species</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <SpeciesCardList species={filteredResults} />
                        </div>
                    );
                case 'starships':
                    return (
                        <div className='tc'>
                            <Navigation />
                            <h1 className='f1'>Star Wars Starships</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <StarshipCardList starships={filteredResults} />
                        </div>
                    );
                case 'vehicles':
                    return (
                        <div className='tc'>
                            <Navigation />
                            <h1 className='f1'>Star Wars Vehicles</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <VehicleCardList vehicles={filteredResults} />
                        </div>
                    );
            }
        
        }
            
    }
}


export default App;

