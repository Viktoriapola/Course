import Nav from './components/Nav/index';
import Main from './components/Main/index';
import Lago1 from './img/Vector1.png'

import './App.scss';


function App() {
  return (
   <div className='body'>
      <div className='container'>
      <h1>Find Your Course</h1>
      <div className='content'>
        <Nav />
        <Main />
      </div>
      <footer>More programmes <img src={Lago1} alt='lago' /></footer>
    </div>
   </div>
  );
}

export default App;
