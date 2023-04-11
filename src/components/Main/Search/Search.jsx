import "./Search.scss";
import React from "react";

export const Search = ({
  IsSearch,
  handlSearch,
  searchMovies,
  IsType,
  setIsType,
}) => {
  let handlKey = (ev) => {
    if (ev.key === "Enter") {
      searchMovies(IsSearch, IsType);
    }
  };

  let handlType = (ev) => {
    setIsType(ev.target.dataset.datatype);
  };

  React.useEffect(() => {
    return searchMovies(IsSearch, IsType);
  }, [IsType]);
  return (
    <section className="search__bacground">
      <div className="search__wrapper">
        <div className="search__radio">
          <label htmlFor="">
            <input
              type="radio"
              data-datatype=""
              name="s"
              id=""
              onChange={handlType}
              checked={IsType === ""}
            />
            All
          </label>
          <label htmlFor="">
            <input
              onChange={handlType}
              type="radio"
              data-datatype="series"
              name="s"
              id=""
              checked={IsType === "series"}
            />
            Series
          </label>
          <label htmlFor="">
            <input
              type="radio"
              data-datatype="movie"
              name="s"
              id=""
              onChange={handlType}
              checked={IsType === "movie"}
            />
            Movies
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="s"
              id=""
              data-datatype="game"
              onChange={handlType}
              checked={IsType === "game"}
            />
            Game
          </label>
        </div>
        <div className="block_search">
          <input
            className="search__inp"
            onChange={handlSearch}
            value={IsSearch}
            type="text"
            placeholder="Search"
            onKeyDown={handlKey}
          />
          <button
            onClick={() => searchMovies(IsSearch, IsType)}
            className="btn"
          >
            find
          </button>
        </div>
      </div>
    </section>
  );
};
