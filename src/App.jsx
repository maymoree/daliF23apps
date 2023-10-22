// ***********************************************
// Memo Tangtipongkul, Fall 2023
// ***********************************************

import './App.css';
import Post from './components/Post';
import Profile from './components/Profile';
import logo from './assets/logo.png';

// ***********************************************
// renders the Post page and Profile page side by side
// has a logo of the app/website on the top
// ***********************************************

const App = () => {

  return (
    <div className="App">
      <img src={logo}></img>
      <div className='appContainer'>
        <Profile/>
        <Post/>
      </div>
    </div>
  )
}

export default App