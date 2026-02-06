import { motion } from 'framer-motion';
import { useState } from 'react';
import BackgroundLayer from '../components/BackgroundLayer';
import FloatingParticles from '../components/FloatingParticles';
import EnterButton from '../components/EnterButton';

interface EntryProps {
    onEnter: () => void;
}

export default function Entry({ onEnter }: EntryProps) {
    const [isExiting, setIsExiting] = useState(false);

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
                    radial-gradient(ellipse at 50% 30%, rgba(220, 80, 80, 0.5) 0%, transparent 50%),
                    radial-gradient(ellipse at 30% 60%, rgba(160, 50, 50, 0.4) 0%, transparent 40%),
                    radial-gradient(ellipse at 70% 70%, rgba(140, 40, 40, 0.4) 0%, transparent 40%),
                    linear-gradient(180deg, #1a0808 0%, #2d1414 20%, #4a2020 40%, #6a2e2e 50%, #4a2020 60%, #2d1414 80%, #1a0808 100%)
                `
            }}
        >
            <BackgroundLayer />
            <FloatingParticles />

            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
                }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.5) 100%)',
                }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
                }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)',
                }}
                animate={{ y: [0, 50] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none opacity-30"
                animate={{
                    background: [
                        'radial-gradient(ellipse at 30% 30%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 70% 70%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 30% 30%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
                animate={{
                    opacity: [0.08, 0.15, 0.08],
                }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
            <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            <div className="fixed top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
            <div className="fixed top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

            <div className="fixed top-0 left-0 w-16 h-16 pointer-events-none opacity-35">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <line x1="0" y1="0" x2="30" y2="0" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="30" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                </svg>
            </div>
            <div className="fixed top-0 right-0 w-16 h-16 pointer-events-none opacity-35 rotate-90">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <line x1="0" y1="0" x2="30" y2="0" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="30" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                </svg>
            </div>
            <div className="fixed bottom-0 left-0 w-16 h-16 pointer-events-none opacity-35 -rotate-90">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <line x1="0" y1="0" x2="30" y2="0" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="30" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                </svg>
            </div>
            <div className="fixed bottom-0 right-0 w-16 h-16 pointer-events-none opacity-35 rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <line x1="0" y1="0" x2="30" y2="0" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="30" stroke="rgba(220, 38, 38, 0.8)" strokeWidth="1" />
                </svg>
            </div>

            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-1 h-1 bg-white/35 rounded-full pointer-events-none"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                        y: [0, 200],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        delay: i * 1.5,
                        ease: 'linear',
                    }}
                />
            ))}

            <motion.div className="fixed left-8 top-8">
                <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-45">
                    <motion.path
                        d="M 10 10 L 70 10 L 70 70 L 10 70 Z M 20 20 L 20 60 L 60 60 L 60 20 Z"
                        fill="none"
                        stroke="rgba(220, 38, 38, 0.8)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.circle
                        cx="40"
                        cy="40"
                        r="15"
                        fill="none"
                        stroke="rgba(220, 38, 38, 0.6)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, rotate: 0 }}
                        animate={{ pathLength: 1, rotate: 360 }}
                        transition={{
                            pathLength: { duration: 2, delay: 0.7 },
                            rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                        }}
                    />
                </svg>
            </motion.div>

            <motion.div className="fixed right-8 bottom-8">
                <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-45">
                    <motion.path
                        d="M 10 10 L 70 10 L 70 70 L 10 70 Z M 20 20 L 20 60 L 60 60 L 60 20 Z"
                        fill="none"
                        stroke="rgba(220, 38, 38, 0.8)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.8 }}
                    />
                    <motion.circle
                        cx="40"
                        cy="40"
                        r="15"
                        fill="none"
                        stroke="rgba(220, 38, 38, 0.6)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, rotate: 0 }}
                        animate={{ pathLength: 1, rotate: -360 }}
                        transition={{
                            pathLength: { duration: 2, delay: 1 },
                            rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                        }}
                    />
                </svg>
            </motion.div>

            <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-12 h-12 border border-white/20 rotate-45"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                            x: 0,
                            rotate: [45, 135, 45]
                        }}
                        transition={{
                            opacity: { duration: 3, repeat: Infinity, delay: i * 0.3 },
                            x: { duration: 1, delay: i * 0.1 },
                            rotate: { duration: 8, repeat: Infinity, ease: 'linear', delay: i * 0.2 }
                        }}
                    />
                ))}
            </div>

            <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-12 h-12 border border-white/20 rotate-45"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                            x: 0,
                            rotate: [45, -45, 45]
                        }}
                        transition={{
                            opacity: { duration: 3, repeat: Infinity, delay: i * 0.3 },
                            x: { duration: 1, delay: i * 0.1 },
                            rotate: { duration: 8, repeat: Infinity, ease: 'linear', delay: i * 0.2 }
                        }}
                    />
                ))}
            </div>

            <div className="fixed left-16 top-20">
                <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-[1px] bg-white/30"
                            initial={{ width: 0 }}
                            animate={{ width: [0, 40, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <div className="fixed right-16 bottom-20">
                <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-[1px] bg-white/30"
                            initial={{ width: 0 }}
                            animate={{ width: [0, 40, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="fixed bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            <div className="fixed top-32 left-1/2 -translate-x-1/2">
                <motion.div className="flex gap-3">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1 bg-blood-500/60"
                            initial={{ height: 0 }}
                            animate={{ height: [0, 20, 40, 20, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <div className="fixed top-1/3 right-24">
                <motion.div
                    className="w-20 h-20 border-2 border-white/20 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0, 0.4],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-20 h-20 border-2 border-blood-500/40 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                />
            </div>

            <div className="fixed bottom-1/3 left-24">
                <motion.div
                    className="w-20 h-20 border-2 border-white/20 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0, 0.4],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-20 h-20 border-2 border-blood-500/40 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
                />
            </div>

            <div className="fixed top-20 left-1/3">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blood-500 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -100],
                            x: [(i - 1) * 20, (i - 1) * 40],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: 'easeOut',
                        }}
                    />
                ))}
            </div>

            <div className="fixed bottom-20 right-1/3">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blood-500 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, 100],
                            x: [(i - 1) * 20, (i - 1) * 40],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5 + 1,
                            ease: 'easeOut',
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="fixed inset-0 pointer-events-none"
                animate={{
                    background: [
                        'linear-gradient(0deg, transparent 0%, rgba(220, 38, 38, 0.04) 50%, transparent 100%)',
                        'linear-gradient(180deg, transparent 0%, rgba(220, 38, 38, 0.04) 50%, transparent 100%)',
                        'linear-gradient(0deg, transparent 0%, rgba(220, 38, 38, 0.04) 50%, transparent 100%)',
                    ],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />

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
                            className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white/70"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />

                        <motion.div className="relative">
                            <motion.div
                                className="w-2 h-2 bg-blood-500 rotate-45"
                                animate={{ rotate: [45, 405] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            />
                            <motion.div
                                className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-blood-500 to-transparent origin-top"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: [0, 1, 0] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            />
                        </motion.div>

                        <motion.div
                            className="h-[1px] w-24 bg-gradient-to-l from-transparent to-white/70"
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
                            textShadow: '0 0 35px rgba(220, 38, 38, 0.6), 0 4px 10px rgba(0, 0, 0, 0.7)',
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
                                        '0 0 35px rgba(220, 38, 38, 0.6)',
                                        '0 0 55px rgba(220, 38, 38, 0.8)',
                                        '0 0 35px rgba(220, 38, 38, 0.6)',
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
                                        '0 0 35px rgba(220, 38, 38, 0.6)',
                                        '0 0 55px rgba(220, 38, 38, 0.8)',
                                        '0 0 35px rgba(220, 38, 38, 0.6)',
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
                            animate={{ opacity: [0, 0.3, 0] }}
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
                        className="mt-16 w-[1px] h-24 mx-auto bg-gradient-to-b from-white/40 to-transparent"
                        initial={{ height: 0 }}
                        animate={{ height: 96 }}
                        transition={{ delay: 2, duration: 1 }}
                    />
                </motion.div>
            </div>

            <motion.footer
                className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/70 via-black/50 to-transparent backdrop-blur-sm py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
            >
                <p className="text-center text-white/80 text-sm font-body tracking-[0.35em] uppercase">
                    Designed and Developed by Kira
                </p>
            </motion.footer>
        </motion.div>
    );
}
