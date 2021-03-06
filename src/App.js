import React from 'react';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';

const sampleSimpson = {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
      
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      simpson: sampleSimpson
    };
    this.getSimpson = this.getSimpson.bind(this);
  }
  getSimpson(){
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes?count=num')
    .then(response => response.data)
    .then(data =>{
      this.setState({
        simpson: data[0],
      });
    });
  }
  render(){
  return (
    <div className="App">
      <DisplaySimpson simpson={this.state.simpson} />
      <button type="button" onClick={this.getSimpson}>Get Simpson</button>
    </div>
  );
}
}

export default App;
