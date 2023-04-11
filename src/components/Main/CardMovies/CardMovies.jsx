import { Movie } from "../Movie/Movie";
import "./CardMovies.scss";

export const CardMovies = ({ movie }) => {

    if(!movie){
        return <div className="error">Movie not found</div>
    }  
  return (
    <div className="card__block">
      {movie.map((card) => {
        return <Movie key={card.imdbID} {...card} />;
      })}
    </div>
  );
};
