
import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  foo = () => "Ebullent Trees";

  render() {
    const name = "Globby";
    const numbers = [1 ,2,  5, 7];
    const slop = () => "Bar";

    const loading = false;
    const showName = false;

    if(loading) { 
      return<h4>Loading...</h4>;
    }

    return (
     <div className = 'App'>
         <Navbar />
         </div>
      
   
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hey, howyuh doin?</h1>
//     </div>
//   );
// }

export default App;
