import './style.scss';
import * as constants from '../../constants.js';
import Card from '../Card/index';

const Main = () => {
  
  return (
    <div className='main'>
      {constants.arrCards.map((item, index) => {
        return <Card 
        key={index} 
        lagoBig={item.lagoBig} 
        h3={item.h3} 
        h2={item.h2} 
        lago_1={item.lago_1} 
        lago_2={item.lago_2} 
        h3_green={item.h3_green}
        h2_green={item.h2_green}
        p_1={item.p_1}
        p_2={item.p_2}
        start={item.start}
        month={item.month}
        price={item.price}
        />
      })};
    </div>
  );    
};

export default Main;