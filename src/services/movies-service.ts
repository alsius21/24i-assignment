import MovieList from "../models/movieList";
import films from "../../assets/data/films.json";

export default class MoviesService {
    static async getMovies(): Promise<MovieList[]> {
        return Promise.resolve(films.carousels as MovieList[])
    }
}