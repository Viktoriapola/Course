import './style.scss';
import 'font-awesome/css/font-awesome.min.css';

const Card = ({ lagoBig, h3, h2, lago_1, lago_2, h3_green, h2_green, p_1, p_2, start, month, price }) => {
  return(
      <div className='card-container'>
      <img className='big-img hiden' src={lagoBig}/>
      <div className='green-lago'>
        <h2 className='active'>{h3_green}</h2>
        <button className='active'><i className="fa fa-plus"></i><i className="fa fa-times"></i></button>
        <h3 className='hiden'>{h3}</h3>
        <h2 className='hiden'>{h2}</h2>
      </div>
      <div>
        <h3 className='active'>{h2_green}</h3>
        <p className='active'>{p_1}</p>
        <p className='active'>{p_2}</p>
        <p className='hiden'><img src={lago_1} />Postgraduate</p>
        <p className='hiden'><img src={lago_2} />Every 12 weeks</p>
      </div>
      <div className='active'>
        <h3>{start}</h3>
        <p>{month}</p>
      </div>
      <h2 className='active price'>{price}</h2>
      <button>More Info</button>
    </div>
  )
}

export default Card;