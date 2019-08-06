import { observable, computed } from 'mobx';
import axios from 'axios';
import { task } from 'mobx-task'

class MoviesContainer
{
  @observable genre = "";
  @observable movies = [];
  @observable searchPhrase = "";

  constructor(genre)
  {
      this.genre = genre;
      this.getMoviesList();
  }

  @task async getMoviesList()
  {
    await fetch("http://localhost:3001/movies/getMovies/" + this.genre)
      .then((data) => data.json())
      .then((res) => {
          const data = res.data;
          if(data && data.length > 0)
          {
            data.map((dat) => {
              const obj= {};
              obj.id = dat.id;
              obj.name = dat.name;
              obj.image = dat.image;
              this.movies.push(obj);
            });
          }
      }).catch(function(x) { console.log("Oops..! " + x); });
  }

  setGenre(genre)
  {
    this.genre = genre;
  }

  getSearchPhrase()
  {
    return this.searchPhrase;
  }

  setSearchPhrase(phrase)
  {
    this.searchPhrase = phrase;
  }

  getFilteredMovies()
  {
    const searchPhrase = this.searchPhrase;

    if (searchPhrase) {
      const searchingFor = (searchPhrase) => {
        return function (obj) {
          return (obj.name.toLowerCase().includes(searchPhrase.toLowerCase()));
        };
      };
      return this.movies.filter(searchingFor(searchPhrase));
    }
    else {
      return this.movies;
    }
  }

  all()
  {
    return this.movies;
  }

  getObjectById(id)
  {
    return this.movies.find(p => p.id == id);
  }

  updateName(id, newName)
  {
    const product = this.movies.find(p => p.id == id);
    product.name = newName;
  }

  updatePhoto(id, newPhoto)
  {
    const product = this.movies.find(p => p.id == id);
    product.image = newPhoto;
  }

  removeVideo(id)
  {
    const movies = this.movies;
    let i = movies.length;
    while (i--) {
      if (
        movies[i] &&
        movies[i].hasOwnProperty("id") &&
        (movies[i]["id"] === id)
      ) {
        movies.splice(i, 1);
      }
    }
  }

  // our put method that uses our backend api
  // to create new query into our data base
  putMovieToDb(obj)
  {
    axios.post('http://localhost:3001/movies/putMovie/' + this.genre, {
      id: obj.id,
      name: obj.name,
      image: obj.image,
    });
  }

  addObject(obj)
  {
    this.movies.push({
      id: obj.id,
      name: obj.name,
      image: obj.image
    });

    this.putMovieToDb(obj);
  }

  count()
  {
    return this.movies.length;
  }
}

export default MoviesContainer;
