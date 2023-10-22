import './App.css';
import Post from './components/Post';
import Profile from './components/Profile';
import logo from './assets/logo.png';

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