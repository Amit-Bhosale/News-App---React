import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state={
    progress:0,
    country:"in",
  }
  pageSize=15;
  
  apiKey=process.env.REACT_APP_NEWS_API;
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  setCountry= async (country)=>{
    await this.setState({country:country})
  }
  async componentDidMount() {
    this.setCountry();
  }

  render() {

    return (
      <div>
        <Router>
          <Navbar setCountry={this.setCountry} />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={this.pageSize} country={this.state.country} category="General" />
            </Route>
            <Route exact path="/Business">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={this.pageSize} country={this.state.country} category="Business" />
            </Route>
            <Route exact path="/Health">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={this.pageSize} country={this.state.country} category="Health" />
            </Route>
            <Route exact path="/Sports">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={this.pageSize} country={this.state.country} category="Sports" />
            </Route>
            <Route exact path="/Entertainment">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={this.pageSize} country={this.state.country} category="Entertainment" />
            </Route>
            <Route exact path="/Technology">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={this.pageSize} country={this.state.country} category="Technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
