import { useState } from 'react'
import { useGetFilmListQuery } from '../../redux/slice/apiSlice'
import FilmList from "./FilmList/FilmList";

function MainPage() {
  const [searchField, setSearchField] = useState('');
  const { data, isLoading, isSuccess } = useGetFilmListQuery(searchField);

  function handleChange(e) {
    const { value } = e.target;
    setSearchField(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (data.Error === 'Movie not found!') {
    content = <p>По Вашему запросу ничего не найдено</p>;
  } else if (isSuccess) {
    content = <FilmList filmList={data.Search} /> 
  }

  return (
    <>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" className='form-input' value={searchField} onChange={handleChange} placeholder='Введите название...'/>
      </form>
      {content}
    </>
  )
}

export default MainPage;