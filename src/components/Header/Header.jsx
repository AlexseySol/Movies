import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <h1 className="header__title">Movies</h1>
        <ul className="header__navBlock">
          <li> <a href="#">Contact</a></li>
          <li> <a href="#">Map</a> </li>
          <li> <a href="#">About</a> </li>
        </ul>
      </div>
    </header>
  );
};
