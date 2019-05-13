import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar';
// import FormField from './FormField';
// import CoolButton from './CoolButton';
import Signup from './Signup';



//React class Component
class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" /> 
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
        <CoolButton isSmall isSuccess>Singup</CoolButton>  */}
        <Signup />
      </div>
    );
  }
}


export default App;
