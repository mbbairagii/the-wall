import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import BackgroundLayer from '../components/BackgroundLayer';
import FloatingParticles from '../components/FloatingParticles';
import EnterButton from '../components/EnterButton';

interface EntryProps {
    onEnter: () => void;
}

export default function Entry({ onEnter }: EntryProps) {
    const [isExiting, setIsExiting] = useState(false);
    const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
    const [showSecretMessage, setShowSecretMessage] = useState(false);

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newSequence = [...konamiSequence, e.key].slice(-10);
            setKonamiSequence(newSequence);

            if (newSequence.join(',') === konamiCode.join(',')) {
                setShowSecretMessage(true);
                setTimeout(() => setShowSecretMessage(false), 5000);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [konamiSequence]);

    const handleEnter = () => {
        setIsExiting(true);
        setTimeout(() => {
            onEnter();
        }, 1000);
    };

    return (
        <motion.div
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            exit={{
                clipPath: 'circle(0% at 50% 50%)',
            }}
            transition={{ duration: isExiting ? 1.5 : 1, ease: 'easeInOut' }}
            style={{
                background: `
                    radial-gradient(ellipse at 50% 30%, rgba(240, 100, 100, 0.6) 0%, transparent 50%),
                    radial-gradient(ellipse at 30% 60%, rgba(180, 70, 70, 0.5) 0%, transparent 40%),
                    radial-gradient(ellipse at 70% 70%, rgba(160, 60, 60, 0.5) 0%, transparent 40%),
                    linear-gradient(180deg, #2a1010 0%, #3d1a1a 20%, #5a2828 40%, #7a3636 50%, #5a2828 60%, #3d1a1a 80%, #2a1010 100%)
                `
            }}
        >
            <BackgroundLayer />
            <FloatingParticles />

            <AnimatePresence>
                {showSecretMessage && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="relative max-w-3xl"
                            initial={{ scale: 0.5, rotateX: -90, opacity: 0 }}
                            animate={{ scale: 1, rotateX: 0, opacity: 1 }}
                            exit={{ scale: 0.5, rotateX: 90, opacity: 0 }}
                            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
                        >
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-blood-500/20 via-amber-500/20 to-blood-500/20 rounded-3xl blur-2xl"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 backdrop-blur-xl px-12 py-10 rounded-3xl border-2 border-blood-500/50 shadow-2xl">
                                <motion.div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                >
                                    <div className="w-16 h-16 border-4 border-blood-500/30 border-t-blood-500 rounded-full" />
                                </motion.div>

                                <motion.div
                                    className="text-center mb-6"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.div
                                        className="inline-block text-6xl mb-2"
                                        animate={{
                                            rotate: [0, -10, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                    >
                                        🎬
                                    </motion.div>
                                    <h3 className="text-3xl font-display text-transparent bg-clip-text bg-gradient-to-r from-blood-400 via-amber-300 to-blood-400 tracking-[0.3em] mb-2">
                                        TRUTH UNVEILED
                                    </h3>
                                    <div className="h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-blood-500 to-transparent" />
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="space-y-4"
                                >
                                    <p className="text-white/90 text-xl text-center leading-relaxed font-serif italic">
                                        "Cinema is a mirror by which we often see ourselves."
                                    </p>
                                    <p className="text-amber-400/80 text-center text-sm tracking-[0.2em] uppercase">
                                        — Alejandro González Iñárritu
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="mt-6 pt-6 border-t border-white/10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <p className="text-white/60 text-sm text-center leading-relaxed">
                                        Every frame, every shadow, every silence speaks louder than words ever could.
                                        <br />
                                        You've found what most will never seek.
                                    </p>
                                </motion.div>

                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-blood-500 rounded-full"
                                        style={{
                                            top: `${20 + i * 20}%`,
                                            left: i % 2 === 0 ? '-8px' : 'auto',
                                            right: i % 2 === 1 ? '-8px' : 'auto',
                                        }}
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                            scale: [0.8, 1.2, 0.8],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* SUBTLE FLOATING PARTICLES - Only 5 */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="fixed w-2 h-2 rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(255, 150, 150, 0.6), rgba(255, 100, 100, 0.2))',
                        left: `${15 + i * 18}%`,
                        top: `${30 + (i % 3) * 20}%`,
                        boxShadow: '0 0 10px rgba(255, 100, 100, 0.4)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        y: [0, -250 - i * 15],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 7 + i,
                        repeat: Infinity,
                        delay: i * 1.2,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* SUBTLE EXPANDING RINGS - Only 3 */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`ring-${i}`}
                    className="fixed pointer-events-none"
                    style={{
                        left: `${25 + i * 25}%`,
                        top: `${35 + i * 15}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        scale: [0, 2, 2.5],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: i * 1.8,
                        ease: 'easeOut',
                    }}
                >
                    <div
                        className="w-32 h-32 border rounded-full"
                        style={{
                            borderColor: 'rgba(255, 120, 120, 0.3)',
                            borderWidth: '1px'
                        }}
                    />
                </motion.div>
            ))}

            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.5) 100%)',
                }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 45%, rgba(0, 0, 0, 0.6) 100%)',
                }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
                }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.04) 2px, rgba(255, 255, 255, 0.04) 4px)',
                }}
                animate={{ y: [0, 50] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none opacity-40"
                animate={{
                    background: [
                        'radial-gradient(ellipse at 30% 30%, rgba(240, 48, 48, 0.25) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 70% 70%, rgba(240, 48, 48, 0.25) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 30% 30%, rgba(240, 48, 48, 0.25) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* ELEGANT CORNER BRACKETS */}
            <motion.div
                className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.line
                        x1="0" y1="0" x2="35" y2="0"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                    <motion.line
                        x1="0" y1="0" x2="0" y2="35"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                </svg>
            </motion.div>

            <motion.div
                className="fixed top-0 right-0 w-20 h-20 pointer-events-none z-50 rotate-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.line
                        x1="0" y1="0" x2="35" y2="0"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                    <motion.line
                        x1="0" y1="0" x2="0" y2="35"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                </svg>
            </motion.div>

            <motion.div
                className="fixed bottom-0 left-0 w-20 h-20 pointer-events-none z-50 -rotate-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.line
                        x1="0" y1="0" x2="35" y2="0"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                    <motion.line
                        x1="0" y1="0" x2="0" y2="35"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.9 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                </svg>
            </motion.div>

            <motion.div
                className="fixed bottom-0 right-0 w-20 h-20 pointer-events-none z-50 rotate-180"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.line
                        x1="0" y1="0" x2="35" y2="0"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                    <motion.line
                        x1="0" y1="0" x2="0" y2="35"
                        stroke="rgba(255, 120, 120, 0.8)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255, 100, 100, 0.5))' }}
                    />
                </svg>
            </motion.div>

            <div className="relative z-10 text-center px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-8 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <motion.div
                            className="h-[2px] w-24 bg-gradient-to-r from-transparent to-white/80"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />

                        <motion.div className="relative">
                            <motion.div
                                className="w-2.5 h-2.5 bg-red-400 rotate-45"
                                animate={{
                                    rotate: [45, 405],
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                                style={{ boxShadow: '0 0 10px rgba(255, 100, 100, 0.6)' }}
                            />
                            <motion.div
                                className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-red-400 to-transparent origin-top"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: [0, 1, 0] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            />
                        </motion.div>

                        <motion.div
                            className="h-[2px] w-24 bg-gradient-to-l from-transparent to-white/80"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />
                    </motion.div>

                    <motion.h1
                        className="font-display text-5xl md:text-7xl font-light tracking-[0.35em] text-white mb-6 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        style={{
                            textShadow: '0 0 40px rgba(240, 48, 48, 0.7), 0 4px 12px rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        <motion.div
                            className="animate-glow"
                            initial={{ opacity: 0, y: -30, letterSpacing: '1em' }}
                            animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                        >
                            <motion.span
                                animate={{
                                    textShadow: [
                                        '0 0 40px rgba(240, 48, 48, 0.7)',
                                        '0 0 60px rgba(240, 48, 48, 0.9)',
                                        '0 0 40px rgba(240, 48, 48, 0.7)',
                                    ],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                THE
                            </motion.span>
                        </motion.div>
                        <motion.div
                            className="animate-glow"
                            initial={{ opacity: 0, y: 30, letterSpacing: '1em' }}
                            animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
                            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        >
                            <motion.span
                                animate={{
                                    textShadow: [
                                        '0 0 40px rgba(240, 48, 48, 0.7)',
                                        '0 0 60px rgba(240, 48, 48, 0.9)',
                                        '0 0 40px rgba(240, 48, 48, 0.7)',
                                    ],
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                            >
                                WALL
                            </motion.span>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.35, 0] }}
                            transition={{ duration: 0.15, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 8 }}
                            style={{
                                textShadow: '2px 0 #ff0000, -2px 0 #00ff00',
                            }}
                        >
                            <div className="animate-glow">THE</div>
                            <div className="animate-glow">WALL</div>
                        </motion.div>
                    </motion.h1>

                    <motion.p
                        className="font-body text-base md:text-lg tracking-[0.2em] text-gray-100 mb-12 italic max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        A curated collection of cinematic masterpieces that shaped my soul
                    </motion.p>

                    <EnterButton onClick={handleEnter} />

                    <motion.div
                        className="mt-16 w-[2px] h-24 mx-auto bg-gradient-to-b from-white/50 to-transparent"
                        initial={{ height: 0 }}
                        animate={{ height: 96 }}
                        transition={{ delay: 2, duration: 1 }}
                    />
                </motion.div>
            </div>

            <motion.footer
                className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-sm py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
            >
                <p className="text-center text-white/85 text-sm font-body tracking-[0.35em] uppercase">
                    Designed and Developed by Mohini
                </p>
            </motion.footer>
        </motion.div>
    );
}
