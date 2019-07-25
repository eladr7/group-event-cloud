import { observable } from 'mobx'; 

const ComedyContainer = observable({
    movies: [
      { id: 1, name: "Djungo-bar-scene", image: "https://www.youtube.com/embed/xRnUyVUJR_E?start=76" },
    ],

    searchPhrase: "",
    getSearchPhrase: function() {return this.searchPhrase},
    setSearchPhrase: function(phrase) {this.searchPhrase = phrase},

    all: function() { return this.movies},
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

    addObject: function(obj)
    { 
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
  

export default ComedyContainer;