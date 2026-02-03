export interface Movie {
    id: string;
    title: string;
    year: number;
    director: string;
    poster?: string;
    rating?: number;
    genre?: string[];
    notes?: string;
}

export interface WallData {
    movies: Movie[];
    createdAt: Date;
    updatedAt: Date;
}