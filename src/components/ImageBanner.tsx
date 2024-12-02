import React from 'react';
import { motion } from 'framer-motion';

const ImageBanner = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000"
            alt="Medical Research Lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 left-8 right-8 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Where Memes Meet Medicine
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Revolutionizing mental health through questionable experiments and dank memes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageBanner;