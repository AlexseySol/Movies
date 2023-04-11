import "./Movie.scss";

export const Movie = ({ Title, Year, Type, Poster }) => {
 
  return (
    <div className="card_wrapper">
      <img className="card__img" src={Poster} alt="" />
      <h2 className="card__title">{Title}</h2>
      <div className="card__block_type">
        <h4>{Year}</h4>
        <h5>{Type}</h5>
      </div>
    </div>
  );
};
