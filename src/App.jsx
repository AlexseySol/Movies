import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

function App() {
  const [movie, setMovie] = React.useState([]);
  const [IsSearch, setIsSearch] = React.useState("mortal");
  const [IsType, setIsType] = React.useState("");
  const [IsRequest, setIsRequest] = React.useState(false);

  let handlSearch = (event) => {
    setIsSearch(event.target.value);
  };

  React.useEffect(() => {
    try {
      fetch(`http://www.omdbapi.com/?apikey=4aa27dd2&s=${IsSearch}`)
        .then((response) => response.json())
        .then((data) => setMovie(data.Search));
      setIsRequest(true);
    } catch (error) {
      console.log("Error");
    }
  }, []);

  let searchMovies = (str, type) => {
    debugger;
    fetch(`http://www.omdbapi.com/?apikey=4aa27dd2&s=${str}&type=${type}`)
      .then((response) => response.json())
      .then((data) => setMovie(data.Search));
  };

  return (
    <div className="app__wrapper">
      <Header />
      <Main
        movie={movie}
        handlSearch={handlSearch}
        IsSearch={IsSearch}
        searchMovies={searchMovies}
        IsRequest={IsRequest}
        IsType={IsType}
        setIsType={setIsType}
      />
      <Footer />
    </div>
  );
}

export default App;
