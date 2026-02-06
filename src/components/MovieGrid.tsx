import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { movies } from '../lib/movieData'

export default function MovieWall() {
    const [hoveredMovie, setHoveredMovie] = useState<string | null>(null)
    const [hoveredPainting, setHoveredPainting] = useState<string | null>(null)
    const [selectedMovie, setSelectedMovie] = useState<string | null>(null)

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
            description: "An impressionist masterpiece capturing the modernity of Parisian railway stations through light and steam."
        },
        leftBottom: {
            title: "Nocturne by the River",
            artist: "Romantic Era — Unknown",
            year: "19th Century",
            description: "A moody nocturnal riverside scene illuminated by gas lamps, evoking solitude, mist, and quiet reflection."
        },
        right: {
            title: "Starry Night Over the Rhône",
            artist: "Vincent van Gogh",
            year: 1888,
            description: "A nocturnal landscape depicting the night sky reflected in the Rhône river, with glowing gas lights along the shore."
        }
    }

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

            <div
                className="fixed bottom-9 left-12 z-30 pointer-events-none"
            >
                <img
                    src="/20x.png"
                    className="h-[600px] w-auto object-contain drop-shadow-2xl"
                    style={{ filter: 'brightness(0.85) contrast(1.1)' }}
                    draggable={false}
                />
            </div>

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
                                            Click outside to close
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
