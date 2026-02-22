import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 3000;
        const steps = 100;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            setProgress(currentStep);

            if (currentStep >= steps) {
                clearInterval(interval);
                setTimeout(onComplete, 500);
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blood-500/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blood-500/30 to-transparent"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-blood-500/30 to-transparent"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-blood-500/30 to-transparent"
                    animate={{ y: ['100%', '-100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            <div className="relative">
                <motion.div
                    className="absolute -top-32 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <motion.div
                        className="text-6xl font-display tracking-[0.5em] text-white relative"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(220, 38, 38, 0.5)',
                                '0 0 40px rgba(220, 38, 38, 0.8)',
                                '0 0 20px rgba(220, 38, 38, 0.5)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        THE WALL
                        <motion.div
                            className="absolute inset-0"
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 5 }}
                            style={{
                                textShadow: '2px 0 #ff0000, -2px 0 #00ff00',
                            }}
                        >
                            THE WALL
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute -top-40 left-1/2 -translate-x-1/2 w-32 h-32 border border-blood-500/20 rounded-full"
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    className="absolute -top-40 left-1/2 -translate-x-1/2 w-24 h-24 border border-blood-500/30 rounded-full"
                    animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                        rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />

                <div className="w-[600px] h-[2px] bg-white/10 relative overflow-hidden mt-16 rounded-full">
                    <motion.div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-blood-900 via-blood-500 to-blood-900 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                    />

                    <motion.div
                        className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                        initial={{ left: '-128px' }}
                        animate={{ left: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                    />

                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-0 w-[1px] h-full bg-white/20"
                            style={{ left: `${i * 5}%` }}
                            initial={{ opacity: 0.2 }}
                            animate={{
                                opacity: progress > i * 5 ? 0.6 : 0.2,
                                scaleY: progress > i * 5 ? [1, 1.5, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}

                    <motion.div
                        className="absolute -top-1 h-4 w-4 bg-blood-500 rounded-full"
                        style={{ left: `${progress}%` }}
                        animate={{
                            boxShadow: [
                                '0 0 10px rgba(220, 38, 38, 0.8)',
                                '0 0 20px rgba(220, 38, 38, 1)',
                                '0 0 10px rgba(220, 38, 38, 0.8)',
                            ],
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    />
                </div>

                <motion.div
                    className="flex items-center justify-between mt-4 w-[600px] text-xs tracking-widest font-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.span
                        className="text-white/40"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        LOADING
                    </motion.span>
                    <motion.span
                        className="text-blood-500 font-mono text-lg"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 0.3, repeat: Infinity }}
                    >
                        {progress}%
                    </motion.span>
                </motion.div>

                <div className="absolute -left-16 top-8 flex flex-col gap-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-10 h-[1px] bg-blood-500/30"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: [0, 40, 40],
                                opacity: [0, 1, 0.3],
                            }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        />
                    ))}
                </div>

                <div className="absolute -right-16 top-8 flex flex-col gap-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-10 h-[1px] bg-blood-500/30"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: [0, 40, 40],
                                opacity: [0, 1, 0.3],
                            }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        />
                    ))}
                </div>

                <div className="absolute -top-48 left-0 right-0 flex justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-blood-500 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className="absolute bottom-20 text-white/20 text-xs tracking-[0.3em] font-body flex items-center gap-3"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <motion.div
                    className="w-1 h-1 bg-blood-500 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
                INITIALIZING EXPERIENCE
                <motion.div
                    className="w-1 h-1 bg-blood-500 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                />
            </motion.div>

            <motion.footer
                className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <p className="text-center text-white/60 text-sm font-body tracking-[0.35em] uppercase">
                    Designed and Developed by Mohini
                </p>
            </motion.footer>

            <div className="fixed inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-blood-500/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 2, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blood-500/10 rounded-full pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blood-500/10 rounded-full pointer-events-none"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [360, 180, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
        </motion.div>
    );
}
