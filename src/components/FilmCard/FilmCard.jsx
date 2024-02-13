import { useGetFilmByIDQuery } from '../../redux/slice/apiSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFilm, deleteFilm } from '../../redux/slice/filmsSlice';

function FilmCard() {
  const id = useParams()
  const dispatch = useDispatch();
  const {data, isLoading, isSuccess} = useGetFilmByIDQuery(id.filmId);
  const favorites = useSelector(state => state.favoriteFilms);
  const isFavorite = favorites.find(film => film.imdbID === id.filmId);

  function handleClick() {
    isFavorite ? dispatch(deleteFilm(id)) : dispatch(addFilm(data))
  }

  if (isLoading) {
    return <p>Loading...</p>
  } else if (isSuccess) {
    const {Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating} = data;
    
    return <div className='film-card'>
              <div className="film-img">
                <img src={Poster} />
              </div>
              <button className="film-btn" onClick={handleClick}>
                  {isFavorite ? '❤️' : '🤍'}
              </button>
              <div className="film-card-content">
                <p>Название: {Title}</p>
                <p>Год выпуска: {Year}</p>
                <p>Жанр: {Genre}</p>
                <p>Продолжительность: {Runtime}</p>
                <p>Режиссер: {Director}</p>
                <p>Актеры: {Actors}</p>
                <p>Рейтинг: {imdbRating}</p>
              </div>
            </div>
  }
}

export default FilmCard