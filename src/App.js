import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
class App extends Component {
  constructor() {
    super();
    this.state = {
      
      movies : [],
      searchString : '',
    }
  }
  
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    //const url = 'https://movies-app1.p.rapidapi.com/api/movies';

    try {
      //const body = { a: 1 };

      const response = fetch(url, {
        method: 'get',
        //body: JSON.stringify(body),
        // headers: {
        //   'X-RapidAPI-Key': '4ced8ea1ddmshea7585d43ba7c0bp1864c1jsnba452df53031',
        //   'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
        // }
      }).then(response => response.json())
        .then((movies) => {
          this.setState(
            () => {
              return {
                movies: movies
              }
            },
            () => {
            })
        });
    } catch (error) {
      console.error(error);
    }
  }
  onSearchChange = (event) => { 
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState({ searchString : searchString});
  };
  render(){
    const filteredMovies = this.state.movies.filter(movie => { return movie.name.toLocaleLowerCase().includes(this.state.searchString)});
    return (
      <div className="row">
        <SearchBox onChangeHandler = {this.onSearchChange} placeHolderText = {'Search movies.'} />
        <CardList cardslist={filteredMovies}/>
      </div>
    );
  }
}
export default App;
