import Film from "./Film/Film";

function FilmList({filmList}) {
  if(filmList) return (
    <div className='film-list'>
      {filmList.map(film => <Film key={film.imdbID} film={film} />)}
    </div>
  )
}

export default FilmList;
