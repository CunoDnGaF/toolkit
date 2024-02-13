import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFilm, deleteFilm } from '../../../../redux/slice/filmsSlice';

function Film({film}) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoriteFilms);
  const {Title, Poster, Year, imdbID} = film;
  const isFavorite = favorites.find(film => film.imdbID === imdbID);

  function handleClick() {
    isFavorite ? dispatch(deleteFilm(imdbID)) : dispatch(addFilm(film))
  }

  return (
    <div className='film'>
        <NavLink to={`/films/${imdbID}`}>
          <div className="film-img">
            <img src={Poster} />
          </div>
        </NavLink>
        <button className="film-btn" onClick={handleClick}>
            {isFavorite ? '❤️' : '🤍'}
        </button>
        <div className="film-content">
          <NavLink to={`/films/${imdbID}`}>
            <h2 className="film-title">
              {Title}{` (${Year})`}
            </h2>
          </NavLink>
        </div>
    </div>
  )
}

export default Film;