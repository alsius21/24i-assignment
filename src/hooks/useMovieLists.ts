import { useEffect, useState } from "react";
import MovieList from "../models/movieList";
import MoviesService from "../services/movies-service";



export default function useMovieLists(): [MovieList[], boolean ] {
    const [list, setList] = useState([] as MovieList[])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let isMounted = true
        const fetchMoviesList = () => {
            setIsLoading(true)
            MoviesService.getMovies()
                .then((films) => {
                    if (isMounted) {
                        setList(films)
                    }
                })
                .catch(_ => console.warn('Could not get films'))
                .finally(() => {
                    if (isMounted) {
                        setIsLoading(false)
                    }
                })
        }
        if (isMounted && !isLoading) {
            fetchMoviesList()
        }
        return () => {
            isMounted = false
        }
    }, [])

    return [list, isLoading]
}