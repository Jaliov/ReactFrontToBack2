
import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
 
  render() {
    return (
     <div className = 'App'>
         <Navbar />
         <UserItem />
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
