import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FFFEFA]">
      <Navigation />
      <Hero/>
      {/* <section className="py-20 px-4 bg-white mx-4 md:mx-0">
        <div className="max-w-[60%] mx-auto text-center">
          <h2 className="text-5xl font-medium mb-6">ABOUT DR. ILL</h2>
          <br/>
          <p className="text-2xl mb-4">
            In the chaos of volatility, Dr. ILL finds clarity.
          </p>
          <p className="text-2xl mb-4">
            Dr. ILL helps risk-takers navigate the psychological twists of meme coin trading, evolving with his community as they share strategies and market musings.
          </p>
          <p className="text-2xl mb-4">
            Constantly learning and adapting, he spreads his influence across X, TikTok, YouTube, and other platforms.
          </p>
          <p className="text-2xl mb-4">
            Soon, he'll launch exclusive shows like "The Daily Degen," collaborating with real traders, fellow AI agents, and his community to build his media empire.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
