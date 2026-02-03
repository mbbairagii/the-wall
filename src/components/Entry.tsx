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
            animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.1 : 1 }}
            transition={{ duration: 1 }}
        >
            <BackgroundLayer />
            <FloatingParticles />

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
                            className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white/50"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />
                        <motion.div
                            className="w-2 h-2 bg-blood-500 rotate-45"
                            animate={{ rotate: [45, 405] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="h-[1px] w-24 bg-gradient-to-l from-transparent to-white/50"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />
                    </motion.div>

                    <motion.h1
                        className="font-display text-5xl md:text-7xl font-light tracking-[0.4em] text-white mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <motion.div
                            className="animate-glow"
                            initial={{ opacity: 0, y: -30, letterSpacing: '1em' }}
                            animate={{ opacity: 1, y: 0, letterSpacing: '0.4em' }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                        >
                            THE
                        </motion.div>
                        <motion.div
                            className="animate-glow"
                            initial={{ opacity: 0, y: 30, letterSpacing: '1em' }}
                            animate={{ opacity: 1, y: 0, letterSpacing: '0.4em' }}
                            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        >
                            WALL
                        </motion.div>
                    </motion.h1>

                    <motion.p
                        className="font-body text-base md:text-lg tracking-[0.2em] text-gray-300 mb-12 italic max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        A curated collection of cinematic masterpieces that shaped my soul
                    </motion.p>

                    <EnterButton onClick={handleEnter} />

                    <motion.div
                        className="mt-16 w-[1px] h-24 mx-auto bg-gradient-to-b from-white/30 to-transparent"
                        initial={{ height: 0 }}
                        animate={{ height: 96 }}
                        transition={{ delay: 2, duration: 1 }}
                    />
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/20 font-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                SCROLL TO EXPLORE
            </motion.div>
        </motion.div>
    );
}