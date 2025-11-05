import { useContext } from 'react';
import { Link } from 'react-router';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { BookingContext } from '../../context/BookingContext.jsx';

const DestinationCard = ({ title, image, text, slug }) => {
  const { theme } = useContext(ThemeContext);
  const { bookingState, addDestination, removeDestination } = useContext(BookingContext);

  const isBooked = bookingState.destinations.includes(slug);

  function handleClick() {
    if (isBooked) {
      removeDestination(slug);
    } else {
      addDestination(slug);
    }
  }

  return (
    <div className='card bg-base-100 shadow-md' data-theme={theme}>
      <figure>
        <img src={image} alt='Tokyo' className='h-48 w-full object-cover' />
      </figure>
      <div className='card-body'>
        <Link to={`/destinations/${slug}`}>
          <h2 className='card-title text-lg font-semibold hover:text-primary'>{title}</h2>
        </Link>
        <p>{text}</p>
        <div className='card-actions justify-end'>
          <button type='button' className={`btn ${isBooked ? 'btn-error' : 'btn-primary'}`} onClick={handleClick}>
            {isBooked ? 'Unbook' : 'Book now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
