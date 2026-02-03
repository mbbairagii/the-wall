import { motion } from 'framer-motion';
import { useState } from 'react';

interface EnterButtonProps {
    onClick: () => void;
}

export default function EnterButton({ onClick }: EnterButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const playSound = () => {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+Dy');
        audio.volume = 0.3;
        audio.play();
    };

    return (
        <motion.div className="relative inline-block">
            <motion.div
                className="absolute inset-0 rounded-sm"
                animate={{
                    boxShadow: [
                        '0 0 20px rgba(220, 38, 38, 0.3)',
                        '0 0 40px rgba(220, 38, 38, 0.6)',
                        '0 0 20px rgba(220, 38, 38, 0.3)',
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.button
                onClick={() => {
                    playSound();
                    onClick();
                }}
                onMouseEnter={() => {
                    setIsHovered(true);
                    playSound();
                }}
                onMouseLeave={() => setIsHovered(false)}
                className="relative px-12 py-4 font-body text-sm tracking-[0.3em] uppercase text-white border border-white/20 overflow-hidden group bg-black/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(220, 38, 38, 0.8)' }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovered ? '100%' : '-100%' }}
                    transition={{ duration: 0.6 }}
                />

                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blood-900/50 to-blood-700/50"
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? '100%' : 0 }}
                    transition={{ duration: 0.4 }}
                />

                {isHovered && (
                    <>
                        <motion.div
                            className="absolute top-0 left-0 w-1 h-1 bg-blood-500"
                            animate={{
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute top-0 right-0 w-1 h-1 bg-blood-500"
                            animate={{
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{ duration: 1, delay: 0.25, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 w-1 h-1 bg-blood-500"
                            animate={{
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-0 right-0 w-1 h-1 bg-blood-500"
                            animate={{
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{ duration: 1, delay: 0.75, repeat: Infinity }}
                        />
                    </>
                )}

                <motion.span
                    className="relative z-10"
                    animate={{
                        color: isHovered ? '#ffffff' : '#e5e5e5',
                    }}
                >
                    ENTER THIS WORLD
                </motion.span>

                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blood-700 via-blood-500 to-blood-700"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        </motion.div>
    );
}