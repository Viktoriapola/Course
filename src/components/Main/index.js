import './style.scss';
import * as constants from '../../constants.js';
import Card from '../Card/index';

const Main = () => {
  
  return (
    <div className='main'>
      {constants.arrCards.map((item, index) => {
        return <Card 
        key={index} 
        lagoBig={item.white.lagoBig} 
        h3={item.white.h3} 
        h2={item.white.h2} 
        lago_1={item.white.lago_1} 
        lago_2={item.white.lago_2} 
        h3_green={item.green.h3_green}
        h2_green={item.green.h2_green}
        p_1={item.green.p_1}
        p_2={item.green.p_2}
        start={item.green.start}
        month={item.green.month}
        price={item.green.price}
        />
      })}
    </div>
  );    
};

export default Main;