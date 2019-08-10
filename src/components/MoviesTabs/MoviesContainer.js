import { observable, computed } from 'mobx';
import axios from 'axios';
import { task } from 'mobx-task'

class MoviesContainer
{
  @observable genre = "";
  @observable movies = [];
  @observable searchPhrase = "";

  constructor(genre) {
      this.genre = genre;
      this.getMoviesList();
  }

  @task async getMoviesList() {
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

  setGenre(genre) {
    this.genre = genre;
  }

  setSearchPhrase(phrase) {
    this.searchPhrase = phrase;
  }

  getFilteredMovies() {
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

  // our delete method that uses our backend api
  // to delete from our data base.  TODO: implement
  deleteVideoFromDb(movieToDeleteId) {
    axios.delete('http://localhost:3001/movies/deleteMovie/' + this.genre, {
      data: {
        id: movieToDeleteId,
      },
    });
  }

  removeVideo(id) {
    const movies = this.movies;
    let i = movies.length;
    while (i--) {
      if (movies[i] &&
          movies[i].hasOwnProperty("id") &&
          (movies[i]["id"] === id)) 
      {
        let movieToDeleteId = movies[i].id;
        movies.splice(i, 1);
        this.deleteVideoFromDb(movieToDeleteId);
      }
    }
  }

  // our put method that uses our backend api
  // to create new query into our data base
  putMovieToDb(nextId, videoName, url) {
    axios.post('http://localhost:3001/movies/putMovie/' + this.genre, {
      id: nextId,
      name: videoName,
      image: url,
    });
  }

  getNextIdToAdd() {
    const movies = this.movies;

    let nextId = 1;
    let i = movies.length;
    while (nextId <= i) {
      if(movies[nextId - 1].id > nextId)
      {
        return nextId;
      }
      nextId++;
    }

    return nextId;
  }

  addObject(videoName, url) {
    const nextId = this.getNextIdToAdd();
    this.movies.splice(nextId - 1, 0, {
        id: nextId,
        name: videoName,
        image: url
      });
    // this.movies.push({
    //   id: nextId,
    //   name: videoName,
    //   image: url
    // });

    this.putMovieToDb(nextId, videoName, url);
  }

  addObjectTest(obj) {
    this.movies.push({
      id: obj.id,
      name: obj.name,
      image: obj.image
    });
  }

  count() {
    return this.movies.length;
  }
}

export default MoviesContainer;
