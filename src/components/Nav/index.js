import './style.scss';
import { useState } from 'react';

import Lago from '../../img/Vector.png';
import 'font-awesome/css/font-awesome.min.css';

const Nav = () => {

  const arr = ['Market Research Executive', 'Child Psychologist', 'Guidance Counsellor', 'Behaviour Analys', 'Recreational Therapist'];
  const [drop, setDrop] = useState(false);

  const onClick = () => {
    setDrop(true);
    if(drop) {
      setDrop(!drop);
    };
  };

  return (
    <div className='nav hiden'>
      <div className='nav-content'>
        <div className='nav-lago'><img src={Lago} alt='lago'/>Careers</div>
        <div className='nav-list'>
          <button className='nav-button'>Business & Management <i className="fa fa-caret-down"></i></button>
          <button className='nav-button'>Computing & IT <i className="fa fa-caret-down"></i></button>
          <button className='nav-button'>Fashion & Media <i className="fa fa-caret-down"></i></button>
          <button className='nav-button'>Finance & Accounting <i className="fa fa-caret-down"></i></button>
          <button className='nav-button'>Law & Criminology <i className="fa fa-caret-down"></i></button>
          <button className='nav-button'>Marketing & Communications <i class="fa fa-caret-down"></i></button>
         {drop ?  <div>
          <button className='nav-button color' onClick={onClick}>Psychology & Social Sciences <i className="fa fa-sort-asc" aria-hidden="true"></i></button>
          {arr.map(i => <button className='nav-drop-down' key={i}>{i}</button>)}
         </div> : <button className='nav-button' onClick={onClick}>Psychology & Social Sciences <i className="fa fa-caret-down"></i></button>}
        </div>  
        </div>  
      <button className='nav-show'>Show all programmes</button>
    </div>
  );
};

export default Nav;