import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Entry from './components/Entry';
import MovieWall from './components/MovieGrid';
import { movies } from './lib/movieData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showEntry, setShowEntry] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const imagesToPreload = [
      '/11x.png',
      '/15x.png',
      '/19x.jpeg',
      '/16x.jpeg',
      '/20x.png',
      ...movies.map(movie => movie.poster)
    ];

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          resolve(src);
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    Promise.all(imagesToPreload.map(src => preloadImage(src)))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(err => {
        console.error('Error preloading images:', err);
        setImagesLoaded(true);
      });
  }, []);

  const handleLoadingComplete = () => {
    if (imagesLoaded) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (imagesLoaded && !isLoading) {
      setIsLoading(false);
    }
  }, [imagesLoaded]);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowEntry(false);
      setIsTransitioning(false);
    }, 1200);
  };

  if (isLoading || !imagesLoaded) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      <div style={{ display: showEntry ? 'none' : 'block' }}>
        <MovieWall />
      </div>

      <AnimatePresence mode="wait">
        {showEntry && <Entry onEnter={handleEnter} key="entry" />}
      </AnimatePresence>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="transition"
            className="fixed inset-0 z-[100] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.3) 0%, transparent 70%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: 1 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              exit={{ scale: 0, rotate: 720 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <div className="w-32 h-32 border-2 border-blood-500/50 rounded-full" />
              <div className="absolute inset-0 w-32 h-32 border-2 border-blood-500/30 rounded-full animate-ping" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-display text-2xl tracking-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 1, 0], y: 0 }}
              transition={{ duration: 1.2, times: [0, 0.3, 0.7, 1] }}
            >
              ENTERING
            </motion.div>

            <motion.div
              className="absolute inset-0"
              initial={{ clipPath: 'circle(0% at 50% 50%)' }}
              animate={{ clipPath: 'circle(100% at 50% 50%)' }}
              exit={{ clipPath: 'circle(150% at 50% 50%)' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.5) 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
