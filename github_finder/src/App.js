
import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => "Ebullent Trees";

  render() {
    const name = "Globby";

    const slop = () => "Bar";

    const loading = false;
    const showName = false;

    if(loading) { 
      return<h4>Loading...</h4>;
    }


    return (
     <div className = 'App'>
       <h1>My App</h1>
         {loading? <h2>Loading...</h2> : <h1>Hey, howyuh doin {showName && name}</h1>}
         
         <label htmlFor='name'>Name</label>
         <h2>Content</h2>
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
