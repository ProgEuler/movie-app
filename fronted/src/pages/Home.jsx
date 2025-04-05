import React from 'react'
import { MovieCard } from '../components/MovieCard'
import {useState} from 'react'
import '../css/Home.css'


export const Home = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const movies = [
        {id: 1, title: 'John Wick', release_date: '2023-03-24', url: 'https://image.tmdb.org/t/p/w500/8Z2v4j0x1X9z5Y6g7k2m4q5e5h8.jpg'},
        {id: 2, title: 'The Batman', release_date: '2022-03-04', url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvH1bq0f4u4v8d5h8.jpg'},
        {id: 3, title: 'The Matrix Resurrections', release_date: '2021-12-22', url: 'https://image.tmdb.org/t/p/w500/8Z2v4j0x1X9z5Y6g7k2m4q5e5h8.jpg'},
    ]
    function handleSearch(e) {
        e.preventDefault()
        alert(`You searched for ${searchQuery}`)
        setSearchQuery('')

    }
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form' action="">
            <input
            type="text"
            placeholder='Search for movies...'
            className='search-input'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='home-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {movies.map(
                movie =>
                    // movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                (
                    <MovieCard key={movie.id} movie={movie}/>
                )
            )}
        </div>
    </div>
  )
}
