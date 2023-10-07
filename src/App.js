import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMovies, setFilteredMovies]  = useState(movies);
  
  useEffect(()=>{
    const response = fetch(url, {
      method: 'get',
      //body: JSON.stringify(body),
      // headers: {
      //   'X-RapidAPI-Key': '4ced8ea1ddmshea7585d43ba7c0bp1864c1jsnba452df53031',
      //   'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      // }
    }).then(response => response.json())
      .then((movies) => {
        setMovies(movies);
      });
  },
  []
  );

  useEffect(()=>{
    console.log('filter movie effect.')
    setFilteredMovies(movies.filter(movie => { return movie.name.toLocaleLowerCase().includes(searchField) }));
  },
  [movies, searchField]
  );

  console.log('render');
  //const body = { a: 1 };
  
  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    console.log('value set');
    setSearchField(searchString);
  };

  

  return (
    <div className="row">
      <SearchBox onChangeHandler={onSearchChange} placeHolderText={'Search movies.'} />
      <CardList cardslist={filteredMovies} />
    </div>
  );
}

export default App;
