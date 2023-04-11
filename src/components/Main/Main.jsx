import { CardMovies } from "./CardMovies/CardMovies";
import "./Main.scss";
import Preloader from "./Preloader/Preloader";
import { Search } from "./Search/Search";

export const Main = ({
  movie,
  IsSearch,
  handlSearch,
  searchMovies,
  IsRequest,
  setIsType,
  IsType,
}) => {
  return (
    <main>
      <div className="main__wrapper">
        <Search
          IsSearch={IsSearch}
          handlSearch={handlSearch}
          searchMovies={searchMovies}
          IsType={IsType}
          setIsType={setIsType}
        />

        {IsRequest ? <CardMovies movie={movie} /> : <Preloader />}
      </div>
    </main>
  );
};
