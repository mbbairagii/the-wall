import { motion } from 'framer-motion';

interface EnterButtonProps {
    onClick: () => void;
}

export default function EnterButton({ onClick }: EnterButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            className="relative px-12 py-4 font-body text-sm tracking-[0.3em] uppercase text-white border border-white/20 overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
            />

            <motion.div
                className="absolute inset-0 bg-blood-900/30"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
            />

            <span className="relative z-10">ENTER THIS WORLD</span>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-blood-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
}