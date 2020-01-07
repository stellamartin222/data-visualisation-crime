import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header';
import CrimeList from './Components/CrimeList';
import Graph from './Components/Graph';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    data : [],
    isLoading : true
  }

  render() {
    {const { isLoading } = this.state
        if (isLoading) return <p>loading Articles...</p>}
    return (
      <div>
        <Header/>
        <Graph data={this.state.data}/>
        <CrimeList data={this.state.data}/> 

      </div>
    )
  }

  componentDidMount() {
    fetch("https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire&date=2017-03")
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        this.setState({
          data,
          isLoading : false
        })
    })
}
}
