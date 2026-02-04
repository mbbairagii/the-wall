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
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="relative">
                <motion.div
                    className="absolute -top-32 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="text-6xl font-display tracking-[0.5em] text-white"
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
                    </motion.div>
                </motion.div>

                <div className="w-[600px] h-[2px] bg-white/10 relative overflow-hidden mt-16">
                    <motion.div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-blood-900 via-blood-500 to-blood-900"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                    />

                    <motion.div
                        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white to-transparent"
                        initial={{ left: '-80px' }}
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
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="flex items-center justify-between mt-4 w-[600px] text-xs tracking-widest font-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-white/40">LOADING</span>
                    <span className="text-blood-500 font-mono">{progress}%</span>
                </motion.div>

                <div className="absolute -left-12 top-8 flex flex-col gap-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-8 h-[1px] bg-blood-500/30"
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        />
                    ))}
                </div>

                <div className="absolute -right-12 top-8 flex flex-col gap-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-8 h-[1px] bg-blood-500/30"
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className="absolute bottom-12 text-white/20 text-xs tracking-[0.3em] font-body"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                INITIALIZING EXPERIENCE
            </motion.div>

            <motion.footer
                className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <p className="text-center text-white/60 text-sm font-body tracking-[0.35em] uppercase">
                    Designed and Developed by Kira
                </p>
            </motion.footer>

            <div className="fixed inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[1px] h-[1px] bg-blood-500/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}