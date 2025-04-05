import React from 'react'
import '../css/MovieCard.css'

export const MovieCard = ({movie}) => {

    function onFavoriteClick() {
        alert(`You liked ${movie.title}`)
    }
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={onFavoriteClick}>♥	</button>
            </div>
        </div>
        <div className='movie-info'>
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}
