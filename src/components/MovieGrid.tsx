import { motion } from 'framer-motion';
import { useState } from 'react';
import { movies } from '../lib/movieData';

export default function MovieWall() {
    const [hoveredMovie, setHoveredMovie] = useState<string | null>(null);

    const rows = 6;
    const cols = 10;
    const posterWidth = 85;
    const posterHeight = 127;
    const gap = 12;

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url(/11x.png)' }}
        >
            <div className="absolute inset-0 bg-black/5" />

            <motion.div
                className="fixed top-[10%] left-12 -translate-y-1/2 z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p
                    className="text-amber-100/70 text-sm tracking-[0.5em] uppercase"
                    style={{ fontFamily: 'Equistrian Modern Serif Display' }}
                >
                    Archive
                </p>
            </motion.div>

            <motion.div
                className="fixed top-12 right-12 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className="bg-black/70 backdrop-blur-md px-8 py-4 rounded-full border border-amber-900/30 inline-block">
                    <p className="text-white/90 text-sm tracking-[0.35em] uppercase">
                        Hover for Details
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="fixed top-[46%] right-12 -translate-y-1/2 z-40 text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
            >
                <div
                    className="text-amber-100 leading-tight"
                    style={{ fontFamily: 'Equistrian Modern Serif Display' }}
                >
                    <p className="text-6xl mb-4">60</p>
                    <p className="text-4xl mb-2 tracking-wide">CINEMATIC</p>
                    <p className="text-4xl tracking-wide">MASTERPIECES</p>
                </div>
            </motion.div>

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    transform: 'translate(-50%, -64%) scale(0.6)',
                }}
            >
                <div
                    className="relative p-4"
                    style={{
                        background: 'linear-gradient(180deg, #2a2a2a, #0e0e0e)',
                        boxShadow: `
                            0 40px 80px rgba(0,0,0,0.85),
                            inset 0 0 0 2px rgba(255,255,255,0.06),
                            inset 0 0 40px rgba(0,0,0,0.9)
                        `,
                    }}
                >
                    <div
                        className="p-3"
                        style={{
                            background: '#050505',
                            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.9)',
                        }}
                    >
                        <div
                            className="grid bg-black/95 p-6"
                            style={{
                                gridTemplateColumns: `repeat(${cols}, ${posterWidth}px)`,
                                gridTemplateRows: `repeat(${rows}, ${posterHeight}px)`,
                                gap: `${gap}px`,
                                boxShadow: 'inset 0 0 80px rgba(0,0,0,0.9)',
                            }}
                        >
                            {movies.map((movie, index) => (
                                <motion.div
                                    key={movie.id}
                                    className="relative group"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: index * 0.008,
                                        duration: 0.4,
                                        ease: 'easeOut',
                                    }}
                                    onMouseEnter={() => setHoveredMovie(movie.id)}
                                    onMouseLeave={() => setHoveredMovie(null)}
                                    whileHover={{ scale: 1.1, zIndex: 100 }}
                                >
                                    <div
                                        className="relative w-full h-full overflow-hidden"
                                        style={{
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.8)',
                                        }}
                                    >
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            draggable={false}
                                        />
                                    </div>

                                    {hoveredMovie === movie.id && (
                                        <motion.div
                                            className="absolute inset-0 bg-black/98 flex flex-col items-center justify-center p-3 text-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.15 }}
                                            style={{
                                                border: '3px solid rgba(220, 38, 38, 0.9)',
                                                boxShadow:
                                                    '0 0 40px rgba(220, 38, 38, 0.8), inset 0 0 30px rgba(220, 38, 38, 0.3)',
                                            }}
                                        >
                                            <h3 className="text-white font-display text-base mb-2 leading-tight px-2 font-semibold">
                                                {movie.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm font-body mb-1">
                                                {movie.director}
                                            </p>
                                            <p className="text-blood-400 text-sm font-body font-mono font-bold">
                                                {movie.year}
                                            </p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <motion.footer
                className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <p className="text-center text-white/60 text-sm font-body tracking-[0.35em] uppercase">
                    Designed and Developed by Kira
                </p>
            </motion.footer>
        </div>
    );
}
