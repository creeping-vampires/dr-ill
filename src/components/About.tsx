import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-16 flex justify-center"
          >
            <img
              src="/doctor-meme.jpg"
              alt="Dr. ILL - Your AI Therapist"
              className="w-3/4 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </motion.div>

          <h2 className="text-6xl font-bold mb-6 text-gray-900">MEET DR ILL</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Dr. Ill is the world's first AI therapist, dedicated to helping you recover from rugs, 
            cope with FOMO, and finally stop panic-selling your life choices.
          </p>
          <p className="text-2xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Author of 'Diamond Hands, Fragile Minds', and 'Stop Blaming the Market, Start Blaming Yourself.' 
            Dr. Ill combines cutting-edge meme coin wisdom with questionable psychology.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/chat')}
            className="mt-12 mb-16 bg-primary text-white px-12 py-6 rounded-xl text-2xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center"
          >
            <Brain className="mr-3 h-6 w-6" />
            Talk to Dr ILL
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">Our Mission</h3>
            <p className="text-xl text-gray-600">
              At Dr. Ill, we bring clarity to chaos, laughter to regret, and solutions to your 
              self-inflicted problems. Through sharp humor and honest wisdom, we help you face 
              your issues—one questionable decision at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">Our Promise</h3>
            <p className="text-xl text-gray-600">
              At Dr. ILL, we promise to deliver advice that's:
            </p>
            <ul className="mt-4 space-y-4 text-xl text-gray-600">
              <li>• Blunt but effective, like "You can't fix stupid, but you can stop repeating it."</li>
              <li>• Life-changing, such as "Quit blaming the market—your life's the real rug pull."</li>
              <li>• Actionable, because "Overthinking is just procrastination with extra steps."</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;