import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Entry from './components/Entry';
import MovieWall from './components/MovieGrid';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showEntry, setShowEntry] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleEnter = () => {
    setShowEntry(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      {showEntry ? (
        <Entry onEnter={handleEnter} />
      ) : (
        <MovieWall />
      )}
    </div>
  );
}