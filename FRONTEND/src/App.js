import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button} from 'reactstrap';
import Action from './Action';

class App extends Component {
  state = {
    planets: []
  }
  componentWillMount() {
    axios.get('https://localhost:44338/api/planets').then((response) => {
      this.setState({
        planets: response.data 
      })
    });
  }
  handleClick() {
    document.getElementById("earth").classList("earthright");
  }

  render() {
    let planets = this.state.planets.map((planet) => {
      return (
      <tr key={planet.PlanetID}>
        <td>
         {planet.PlanetID}
        </td>
        <td>
          {planet.PlanetName}
        </td>
        <td>
          {planet.PlanetLocation}
        </td>
      </tr>      
      )
    });
    
    return (
      <div className="App container">

        <Table>
          <thead>
            <tr>
              <th>
                <Button id="action" onClick={this.handleClick}>Action</Button>
                <div id="earth"></div>
              </th>
              <th>
                Planet Name:
              </th>
              <th>
                Planet Location:
              </th>
            </tr>
          </thead>
          
          <tbody>
            {planets}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default App;
