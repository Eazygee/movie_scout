import React from "react";

const MovieCard = ({Movie}) => {
  return (
    <div className="movie">
      <div>
        <p>{Movie.Title}</p>
      </div>
      <div>
        <img
          src={
            Movie.Poster !== "N/A"
              ? Movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={Movie.Title}
        />
      </div>
      <div>
        <span>{Movie.Type}</span>
      </div>
      <div>
        <span>{Movie.Title}</span>
      </div>
    </div>
  
  );
};

export default MovieCard;
