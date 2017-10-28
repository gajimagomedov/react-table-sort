import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import logo from './logo.svg';
import './App.css';
import load from './utils/load';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: null,
      active: 0,
      term:''
    }

    this.loadData();
    
  }


  loadData(){
    load(this.props.data).then(res => {
      // this.setState({
      //   data: JSON.parse(res)
      // });
      console.log(JSON.parse(res));
    });
  }




  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Table-Data</h1>
        </header>

        <main>




        </main>
     
      </div>
    );
  }



}

App.propTypes = {
  data: PropTypes.string
}

export default App;
