import React from 'react';
import './App.css';
import Card from './Component/Card'


//retrieve data from weather API and store in object 


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataList : []
    }
  }

  componentDidMount(){
    let obj;
    console.log("Mounted!")
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(async(response) => {
      obj = await response.json();
      this.setState({dataList : obj.properties.periods})
    })
  }

 

  render(){
    return(
      <div>
        {this.state.dataList.map((value, index) => 
          <Card key = {index} name = {value.name}
          temp = {value.temperature} tempUnit = {value.temperatureUnit}
          forecast = {value.detailedForecast} ></Card>
        )}
      </div>

    )
  }

}

export default App;