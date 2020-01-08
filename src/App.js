import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import CrimeList from "./Components/CrimeList";
import Graph from "./Components/Graph";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class App extends Component {
  state = {
    data: [],
    isLoading: true
  };
  fetchData = (category) => {
    axios
      .get(
        `https://data.police.uk/api/crimes-no-location?category=${category}&force=leicestershire&date=2017-03`
      )
      .then(({ data }) => {
        return this.setState({
          data,
          isLoading: false
        });
      })
      .catch();
  };

  render() {
    {
      const { isLoading } = this.state;
      if (isLoading) return <p>loading ...</p>;
    }
    return (
      <div>
        <Header />
        <Graph data={this.state.data} />
        <CrimeList data={this.state.data} fetchData={this.fetchData} />
      </div>
    );
  }
  componentDidMount() {
    this.fetchData();
  }
}
