import { Movie } from '../types/movie';

interface MovieGridProps {
    movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-8 py-24">
                <h2 className="font-display text-5xl tracking-wider mb-12 text-center">
                    THE COLLECTION
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {movies.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500 py-24">
                            No movies yet. Share your collection to begin.
                        </div>
                    ) : (
                        movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="aspect-[2/3] bg-blood-950/30 border border-blood-900/50 rounded-sm overflow-hidden hover:border-blood-700 transition-all duration-300"
                            >
                                <div className="p-6 h-full flex flex-col justify-end">
                                    <h3 className="font-display text-lg mb-2">{movie.title}</h3>
                                    <p className="font-body text-sm text-gray-400">
                                        {movie.director} · {movie.year}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}