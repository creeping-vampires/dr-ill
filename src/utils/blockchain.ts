import { toast } from 'react-hot-toast';

export const handleTransaction = async (transaction: any) => {
  try {
    // Add version parameter to transaction
    const txOptions = {
      maxSupportedTransactionVersion: 0
    };
    
    // Execute transaction with version support
    const result = await transaction(txOptions);
    return result;
  } catch (error: any) {
    if (error.message?.includes('Transaction version')) {
      toast.error('Please update your wallet to support the latest transaction version');
    } else {
      toast.error('Transaction failed. Please try again.');
    }
    console.error('Transaction error:', error);
    return null;
  }
};