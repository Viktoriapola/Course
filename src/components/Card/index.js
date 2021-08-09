import './style.scss';
import 'font-awesome/css/font-awesome.min.css';

const Card = ({ lagoBig, h3, h2, lago_1, lago_2, h3_green, h2_green, p_1, p_2, start, month, price }) => {


  return(
    <div className='card-container'>
      <button className='circle'><i className="fa fa-plus"></i><i className="fa fa-times"></i></button> 
      <div className='card-container-white'>
        <img className='big-img hiden' src={lagoBig}/>
        <h3 className='hiden'>{h3}</h3>
        <h2 className='hiden'>{h2}</h2>
        <div>
          <p className='hiden'><img src={lago_1} />Postgraduate</p>
          <p className='hiden'><img src={lago_2} />Every 12 weeks</p>
        </div>
        <button>More Info</button>
      </div>
      <div className='card-container-green'>
          <h3 className='active'>{h3_green}</h3>
        <div>
          <h3>{h2_green}</h3>
          <p>{p_1}</p>
          <p>{p_2}</p>
        </div>
        <div>
          <h3>{start}</h3>
          <p>{month}</p>
         </div>
           <h2 className='price'>{price}</h2>
           <button className='info'>More Info</button>
        </div>
    </div>
  )
}

export default Card;