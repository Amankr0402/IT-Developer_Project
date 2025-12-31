import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Brand Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            QUIZ<span className="text-yellow-400">Spark</span>
          </h2>
          <p className="text-gray-400">
            The ultimate platform for developers to test their skills and climb the leaderboard.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/leaderboard" className="hover:text-yellow-400 transition">Leaderboard</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>📧 support@skillsprint.dev</p>
          <p>📍 Jamshedpur, India</p>
          <p className="mt-4 text-xs text-gray-500">&copy; 2025 SkillSprint Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;