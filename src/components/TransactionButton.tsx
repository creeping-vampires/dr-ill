import React from 'react';
import { handleTransaction } from '../utils/blockchain';
import { motion } from 'framer-motion';

interface TransactionButtonProps {
  onClick: () => Promise<any>;
  children: React.ReactNode;
  className?: string;
}

const TransactionButton: React.FC<TransactionButtonProps> = ({ onClick, children, className = '' }) => {
  const handleClick = async () => {
    await handleTransaction(onClick);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default TransactionButton;