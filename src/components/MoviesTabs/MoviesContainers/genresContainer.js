import ComedyContainer from "./ComedyContainer";
import DramaContainer from "./DramaContainer";
import FantasyContainer from "./FantasyContainer";

import Genres from "../Genres";


const GenresContainer = {
    getMoviesContainer: function(genre) {
        switch(genre)
        {
            case Genres.Comedy:
                return ComedyContainer;
            case Genres.Drama:
                return DramaContainer;
            case Genres.Fantasy:
                return FantasyContainer;
        }
     }
  };
  

export default GenresContainer;