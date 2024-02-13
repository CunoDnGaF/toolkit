import { useSelector } from 'react-redux'
import Film from '../../components/MainPage/FilmList/Film/Film'

function Favorite() {
  const filmList = useSelector(state => state.favoriteFilms)
  
  return (
    <div className='film-list'>
      {filmList.length > 0 ? filmList.map(film => <Film key={film.imdbID} film={film}/>) : <p>Список избранного пуст</p>}
    </div>
  )
}

export default Favorite;