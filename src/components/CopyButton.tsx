import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface CopyButtonProps {
  textToCopy: string;
  displayText: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, displayText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100"
    >
      <span className="text-gray-600 hidden sm:inline">{displayText}</span>
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </motion.button>
  );
};

export default CopyButton;