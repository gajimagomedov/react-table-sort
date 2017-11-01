import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import Preloader from './components/Preloader';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: null,
      active: 0,
      term:''
    }
    
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount(){
    fetch(this.props.data)
      .then(res => res.json())
      .then(data => { this.initialData = data;  this.setState({ data: this.initialData });})   
      .catch(error => console.log(error));   
  }


  updateData(config){
    this.setState(config)
  }

  renderDisplay(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Table-Data</h1>
        <SearchBar update={this.updateData} data={this.initialData} term={this.state.term} />
      </header>
      <main className="wrapper">
        <div className="user-active">
          <ActiveUser data={this.state.data} active={this.state.active} /> 
        </div>
        <div className="user-list">    
          <UserList data={this.state.data} update={this.updateData}/> 
        </div> 
      </main>
    </div>
    );
  }

  render() {
     return this.state.data ? this.renderDisplay() : <Preloader />
  }

}

export default App;
