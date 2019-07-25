import { observable } from "mobx";

const DramaContainer = observable({
  movies: [
    {
      id: 1,
      name: "Ivar the boneless - I might have been happy",
      image: "https://www.youtube.com/embed/HA7gZRApCyQ?start=57"
    },
    {
      id: 2,
      name: "Breaking-Nad: Meeting with Tuko Salamanka",
      image: "https://www.youtube.com/embed/Ztw-bOkkY5A"
    },
  ],

  searchPhrase: "",
  getSearchPhrase: function() {
    return this.searchPhrase;
  },
  setSearchPhrase: function(phrase) {
    this.searchPhrase = phrase;
  },

  all: function() {
    return this.movies;
  },
  getObjectById: function(id) {
    return this.movies.find(p => p.id == id);
  },

  updateName: function(id, newName) {
    const product = this.movies.find(p => p.id == id);
    product.name = newName;
  },
  updatePhoto: function(id, newPhoto) {
    const product = this.movies.find(p => p.id == id);
    product.image = newPhoto;
  },
  removeVideo: function(id) {
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
  },

  addObject: function(obj) {
    this.movies.push({
      id: obj.id,
      name: obj.name,
      image: obj.image
    });
  },
  count: function() {
    return this.movies.length;
  }
});

export default DramaContainer;
