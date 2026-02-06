import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { movies } from '../lib/movieData'

export default function MovieWall() {
    const [hoveredMovie, setHoveredMovie] = useState<string | null>(null)
    const [hoveredPainting, setHoveredPainting] = useState<string | null>(null)
    const [selectedMovie, setSelectedMovie] = useState<string | null>(null)
    const [paintingSecret, setPaintingSecret] = useState<string | null>(null)
    const [hoveredPerson, setHoveredPerson] = useState(false)

    const rows = 6
    const cols = 10
    const posterWidth = 85
    const posterHeight = 127
    const gap = 12

    const hoveredMovieData = movies.find(m => m.id === hoveredMovie)
    const selectedMovieData = movies.find(m => m.id === selectedMovie)

    const paintings = {
        left: {
            title: "The Gare Saint-Lazare",
            artist: "Claude Monet",
            year: 1877,
            description: "An impressionist masterpiece capturing the modernity of Parisian railway stations through light and steam.",
            secret: "Time moves like a train through a station—some moments arrive, others depart, but the tracks of memory remain forever.",
            icon: "🚂"
        },
        leftBottom: {
            title: "Nocturne by the River",
            artist: "Romantic Era — Unknown",
            year: "19th Century",
            description: "A moody nocturnal riverside scene illuminated by gas lamps, evoking solitude, mist, and quiet reflection.",
            secret: "In the darkest frames, we find our truest selves. Cinema, like night, reveals what daylight conceals.",
            icon: "🌙"
        },
        right: {
            title: "Starry Night Over the Rhône",
            artist: "Vincent van Gogh",
            year: 1888,
            description: "A nocturnal landscape depicting the night sky reflected in the Rhône river, with glowing gas lights along the shore.",
            secret: "Every star tells a story, every film is a constellation. We are all searching for light in infinite darkness.",
            icon: "⭐"
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedMovie) {
                setSelectedMovie(null);
            }

            if (selectedMovie) {
                const currentIndex = movies.findIndex(m => m.id === selectedMovie);

                if (e.key === 'ArrowRight' && currentIndex < movies.length - 1) {
                    setSelectedMovie(movies[currentIndex + 1].id);
                }

                if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    setSelectedMovie(movies[currentIndex - 1].id);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedMovie]);

    const handlePaintingDoubleClick = (painting: 'left' | 'leftBottom' | 'right') => {
        setPaintingSecret(painting);
        setTimeout(() => setPaintingSecret(null), 5000);
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url(/11x.png)' }}
        >
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />

            <div className="fixed inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: 'linear',
                        }}
                    />
                ))}
            </div>

            <div className="fixed top-[10%] left-12 z-30 pointer-events-none">
                <p
                    className="text-amber-100/70 text-sm tracking-[0.5em] uppercase"
                    style={{ fontFamily: 'Equistrian Modern Serif Display, Georgia, serif' }}
                >
                    Archive
                </p>
            </div>

            <motion.div
                className="fixed top-[13%] left-12 z-30 cursor-pointer"
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setHoveredPainting('left')}
                onMouseLeave={() => setHoveredPainting(null)}
                onDoubleClick={() => handlePaintingDoubleClick('left')}
                animate={{
                    y: hoveredPainting === 'left' ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src="/15x.png"
                    className="w-48 h-auto shadow-2xl"
                    style={{
                        filter: hoveredPainting === 'left' ? 'brightness(1)' : 'brightness(0.9)',
                        pointerEvents: 'none'
                    }}
                    draggable={false}
                    animate={{
                        boxShadow: hoveredPainting === 'left'
                            ? '0 0 30px rgba(220, 38, 38, 0.4), 0 20px 60px rgba(0,0,0,0.8)'
                            : '0 20px 40px rgba(0,0,0,0.5)'
                    }}
                />
            </motion.div>

            <motion.div
                className="fixed top-[40%] left-8 z-30 cursor-pointer"
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setHoveredPainting('leftBottom')}
                onMouseLeave={() => setHoveredPainting(null)}
                onDoubleClick={() => handlePaintingDoubleClick('leftBottom')}
                animate={{
                    y: hoveredPainting === 'leftBottom' ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src="/19x.jpeg"
                    className="w-48 h-auto shadow-2xl"
                    style={{
                        filter: hoveredPainting === 'leftBottom' ? 'brightness(0.95)' : 'brightness(0.8)',
                        pointerEvents: 'none'
                    }}
                    draggable={false}
                    animate={{
                        boxShadow: hoveredPainting === 'leftBottom'
                            ? '0 0 30px rgba(220, 38, 38, 0.4), 0 20px 60px rgba(0,0,0,0.8)'
                            : '0 20px 40px rgba(0,0,0,0.5)'
                    }}
                />
            </motion.div>

            <div className="fixed top-12 right-12 z-50 pointer-events-none">
                <div className="bg-black/70 backdrop-blur-md px-8 py-4 rounded-full border border-amber-900/30 inline-block">
                    <p className="text-white/90 text-sm tracking-[0.35em] uppercase">
                        Hover for Details
                    </p>
                </div>
            </div>

            <div
                className="fixed top-[55%] right-12 -translate-y-1/2 z-40 text-right pointer-events-none"
                style={{ fontFamily: 'Equistrian Modern Serif Display, Georgia, serif' }}
            >
                <div className="text-amber-100 leading-tight">
                    <p className="text-6xl mb-4">
                        60
                    </p>
                    <p className="text-4xl mb-2 tracking-wide">
                        CINEMATIC
                    </p>
                    <p className="text-4xl tracking-wide">
                        MASTERPIECES
                    </p>
                </div>
            </div>

            <motion.div
                className="fixed top-[18%] right-12 z-30 cursor-pointer"
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setHoveredPainting('right')}
                onMouseLeave={() => setHoveredPainting(null)}
                onDoubleClick={() => handlePaintingDoubleClick('right')}
                animate={{
                    y: hoveredPainting === 'right' ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src="/16x.jpeg"
                    className="w-48 h-auto shadow-2xl"
                    style={{
                        filter: hoveredPainting === 'right' ? 'brightness(1)' : 'brightness(0.9)',
                        pointerEvents: 'none'
                    }}
                    draggable={false}
                    animate={{
                        boxShadow: hoveredPainting === 'right'
                            ? '0 0 30px rgba(220, 38, 38, 0.4), 0 20px 60px rgba(0,0,0,0.8)'
                            : '0 20px 40px rgba(0,0,0,0.5)'
                    }}
                />
            </motion.div>

            <AnimatePresence>
                {paintingSecret && (
                    <motion.div
                        className="fixed inset-0 z-[70] flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="relative max-w-2xl"
                            initial={{ scale: 0.3, rotateY: -180, opacity: 0 }}
                            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                            exit={{ scale: 0.3, rotateY: 180, opacity: 0 }}
                            transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                        >
                            <motion.div
                                className="absolute -inset-3 bg-gradient-to-r from-amber-500/30 via-blood-500/30 to-amber-500/30 rounded-3xl blur-xl"
                                animate={{
                                    opacity: [0.5, 0.8, 0.5],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            <div className="relative bg-gradient-to-br from-amber-950 via-zinc-900 to-black backdrop-blur-xl px-10 py-8 rounded-3xl border-2 border-amber-500/40 shadow-2xl">
                                <motion.div
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl"
                                    animate={{
                                        rotate: [0, -15, 15, -15, 0],
                                        y: [0, -5, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {paintings[paintingSecret as keyof typeof paintings].icon}
                                </motion.div>

                                <div className="text-center mb-4 mt-6">
                                    <motion.div
                                        className="inline-block"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        <h4 className="text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 tracking-[0.2em] mb-2">
                                            HIDDEN TRUTH
                                        </h4>
                                        <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                                    </motion.div>
                                </div>

                                <motion.p
                                    className="text-white/90 text-lg text-center leading-relaxed font-serif italic mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    "{paintings[paintingSecret as keyof typeof paintings].secret}"
                                </motion.p>

                                <motion.div
                                    className="flex items-center justify-center gap-2 text-amber-400/60 text-xs tracking-[0.2em]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="h-[1px] w-8 bg-amber-500/30" />
                                    <span>REVEALED TO THE CURIOUS</span>
                                    <div className="h-[1px] w-8 bg-amber-500/30" />
                                </motion.div>

                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-amber-400 rounded-full"
                                        style={{
                                            top: `${15 + i * 15}%`,
                                            left: i % 2 === 0 ? '10px' : 'auto',
                                            right: i % 2 === 1 ? '10px' : 'auto',
                                        }}
                                        animate={{
                                            opacity: [0.2, 1, 0.2],
                                            scale: [0.5, 1.5, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* PERSON SITTING - WITH "THAT'S ME" TOOLTIP */}
            <motion.div
                className="fixed bottom-9 left-12 z-30 cursor-pointer"
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setHoveredPerson(true)}
                onMouseLeave={() => setHoveredPerson(false)}
                animate={{
                    y: hoveredPerson ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src="/21x.png"
                    className="h-[400px] w-auto object-contain drop-shadow-2xl"
                    style={{
                        filter: hoveredPerson ? 'brightness(1) contrast(1.2)' : 'brightness(0.85) contrast(1.1)',
                        pointerEvents: 'none'
                    }}
                    draggable={false}
                />

                <AnimatePresence>
                    {hoveredPerson && (
                        <motion.div
                            className="absolute top-20 left-1/2 -translate-x-1/2 z-50"
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
                        >
                            <motion.div
                                className="relative"
                                animate={{
                                    rotate: [-2, 2, -2],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-blood-500/20 via-amber-500/20 to-blood-500/20 rounded-2xl blur-lg"
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 backdrop-blur-xl px-6 py-4 rounded-2xl border-2 border-blood-500/50 shadow-2xl">
                                    <motion.div
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <motion.span
                                            className="text-3xl"
                                            animate={{
                                                rotate: [0, 14, -8, 14, 0],
                                            }}
                                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                                        >
                                            👋
                                        </motion.span>
                                        <div>
                                            <p className="text-white font-display text-xl tracking-wide mb-1">
                                                That's Me
                                            </p>
                                            <p className="text-amber-400/80 text-xs tracking-[0.15em] uppercase">
                                                Lost in cinema
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Decorative corner dots */}
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1.5 h-1.5 bg-blood-400 rounded-full"
                                            style={{
                                                top: i < 2 ? '8px' : 'auto',
                                                bottom: i >= 2 ? '8px' : 'auto',
                                                left: i % 2 === 0 ? '8px' : 'auto',
                                                right: i % 2 === 1 ? '8px' : 'auto',
                                            }}
                                            animate={{
                                                opacity: [0.3, 1, 0.3],
                                                scale: [0.8, 1.2, 0.8],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Arrow pointer */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ transform: 'translate(-50%, -64%) scale(0.6)' }}
            >
                <div
                    className="relative p-4"
                    style={{
                        background: 'linear-gradient(180deg, #2a2a2a, #0e0e0e)',
                        boxShadow: `
                            0 40px 80px rgba(0,0,0,0.85),
                            inset 0 0 0 2px rgba(255,255,255,0.06),
                            inset 0 0 40px rgba(0,0,0,0.9)
                        `
                    }}
                >
                    <div className="p-3" style={{ background: '#050505' }}>
                        <div
                            className="grid bg-black/95 p-6 pointer-events-auto"
                            style={{
                                gridTemplateColumns: `repeat(${cols}, ${posterWidth}px)`,
                                gridTemplateRows: `repeat(${rows}, ${posterHeight}px)`,
                                gap: `${gap}px`
                            }}
                        >
                            {movies.map(movie => (
                                <motion.div
                                    key={movie.id}
                                    className="relative cursor-pointer overflow-hidden"
                                    style={{ pointerEvents: 'auto' }}
                                    onMouseEnter={() => setHoveredMovie(movie.id)}
                                    onMouseLeave={() => setHoveredMovie(null)}
                                    onClick={() => setSelectedMovie(movie.id)}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={movie.poster}
                                        alt={movie.title}
                                        className="w-full h-full object-cover"
                                        style={{ pointerEvents: 'none' }}
                                        draggable={false}
                                    />
                                    {hoveredMovie === movie.id && (
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            style={{
                                                boxShadow: '0 0 20px rgba(220, 38, 38, 0.6), inset 0 0 20px rgba(220, 38, 38, 0.2)',
                                                border: '1px solid rgba(220, 38, 38, 0.5)'
                                            }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {(hoveredMovieData || hoveredPainting) && !selectedMovie && (
                <motion.div
                    className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 max-w-xl pointer-events-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bg-black/90 backdrop-blur-xl px-8 py-6 rounded-2xl border shadow-2xl">
                        <h3 className="text-white text-2xl mb-2 font-bold tracking-wide">
                            {hoveredMovieData?.title || paintings[hoveredPainting as keyof typeof paintings].title}
                        </h3>
                        <p className="text-amber-500 text-sm mb-3 tracking-wider">
                            {hoveredMovieData
                                ? `${hoveredMovieData.director} • ${hoveredMovieData.year}`
                                : `${paintings[hoveredPainting as keyof typeof paintings].artist} • ${paintings[hoveredPainting as keyof typeof paintings].year}`}
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            {hoveredMovieData?.description || paintings[hoveredPainting as keyof typeof paintings].description}
                        </p>
                    </div>
                </motion.div>
            )}

            <AnimatePresence>
                {selectedMovie && selectedMovieData && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center px-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMovie(null)}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="relative max-w-6xl w-full bg-gradient-to-b from-zinc-900 to-black rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/70 hover:bg-blood-500/20 rounded-full flex items-center justify-center border border-white/10 transition-colors"
                                onClick={() => setSelectedMovie(null)}
                            >
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex flex-col md:flex-row gap-8 p-8">
                                <motion.div
                                    className="flex-shrink-0"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <img
                                        src={selectedMovieData.poster}
                                        alt={selectedMovieData.title}
                                        className="w-64 h-auto rounded-lg shadow-2xl"
                                        style={{
                                            boxShadow: '0 0 40px rgba(220, 38, 38, 0.3)'
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="flex-1 flex flex-col justify-center"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-5xl font-display text-white mb-4 tracking-wide">
                                        {selectedMovieData.title}
                                    </h2>

                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-amber-500 text-lg font-semibold">
                                            {selectedMovieData.year}
                                        </span>
                                        <span className="text-white/40">•</span>
                                        <span className="text-white/70 text-lg">
                                            {selectedMovieData.director}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        {selectedMovieData.description}
                                    </p>

                                    <div className="flex gap-3 flex-wrap">
                                        <span className="px-4 py-2 bg-blood-500/20 border border-blood-500/30 rounded-full text-blood-400 text-sm">
                                            ESC to close
                                        </span>
                                        <span className="px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm">
                                            ← → to navigate
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <footer className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent py-4 pointer-events-none">
                <p className="text-center text-white/60 text-sm tracking-[0.35em] uppercase">
                    Designed and Developed by Kira
                </p>
            </footer>
        </div>
    )
}
