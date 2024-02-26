import axios from 'axios';
import './App.css';
import { Component } from 'react';
import BeerCard from './components/BeerCard';

class App extends Component{
  state = {
    beers: []
  };

  async componentDidMount() {
    const response = await axios.get('https://api.punkapi.com/v2/beers');
    console.log('response', response.data)
    this.setState({
      beers: response.data
    })
  }

  render() {
    return (
      <ul>
        {this.state.beers.map(beer => (
          <BeerCard beer={beer}/>
        ))}
      </ul>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
