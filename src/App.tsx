import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Entry from './components/Entry';
import MovieGrid from './components/MovieGrid';
import { Movie } from './types/movie';
import { getMovies } from './lib/movieService';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showEntry, setShowEntry] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      console.error('Failed to load movies:', error);
    } finally {
      setDataLoading(false);
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleEnter = () => {
    setShowEntry(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (dataLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white font-body tracking-widest animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {showEntry ? (
        <Entry onEnter={handleEnter} />
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
}