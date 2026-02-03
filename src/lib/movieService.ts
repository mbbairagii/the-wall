import { Movie } from '../types/movie';

const STORAGE_KEY = 'thewall_movies';

export async function getMovies(): Promise<Movie[]> {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    return [];
}

export async function addMovie(movie: Omit<Movie, 'id'>): Promise<Movie> {
    const movies = await getMovies();
    const newMovie: Movie = {
        ...movie,
        id: crypto.randomUUID(),
    };
    movies.push(newMovie);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    return newMovie;
}

export async function updateMovie(id: string, updates: Partial<Movie>): Promise<void> {
    const movies = await getMovies();
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
        movies[index] = { ...movies[index], ...updates };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    }
}

export async function deleteMovie(id: string): Promise<void> {
    const movies = await getMovies();
    const filtered = movies.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export async function setMovies(movies: Movie[]): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
}