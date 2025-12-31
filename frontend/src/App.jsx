// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminDashboard from './pages/AdminDashboard';
// import QuizHome from './pages/Quizhome';
// import TakeQuiz from './pages/TakeQuiz';
// import Leaderboard from './pages/Leaderboard';
// import Footer from './component/footer';

// // --- 1. NAVBAR COMPONENT (Handles Logout Logic) ---
// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Check if user is logged in
//   const isLoggedIn = !!localStorage.getItem('token');
//   const userRole = localStorage.getItem('role');

//   const handleLogout = () => {
//     // Clear user data
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     localStorage.removeItem('username');
//     alert('Logged out successfully!');
//     navigate('/'); // Go back to Home
//   };

//   // Hide Navbar on Home page if you want a full-screen look (Optional, removing this check keeps it visible)
//   // if (location.pathname === '/') return null; 

//   return (
//     <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* LOGO AND BRAND NAME */}
//         <Link className="flex items-center gap-2 hover:opacity-80 transition" to="/">
//           <img src="/logo.png" alt="Logo" className="h-14 w-14 object-contain bg-white rounded-full p-2" />
//           <span className="text-2xl font-bold tracking-wide text-yellow-400">QUIZ Spark</span>
//         </Link>

//         {/* NAVIGATION LINKS */}
//         <div className="flex items-center space-x-6">
//           <Link to="/leaderboard" className="font-semibold hover:text-yellow-300 transition">🏆 Leaderboard</Link>
          
//           {isLoggedIn ? (
//             <>
//               {/* Show Dashboard link only if Admin */}
//               {userRole === 'Admin' && (
//                 <Link to="/admin-dashboard" className="font-semibold hover:text-blue-300 transition">Admin Panel</Link>
//               )}
//               {/* Show Quiz List if User */}
//               {userRole === 'User' && (
//                 <Link to="/quiz-home" className="font-semibold hover:text-green-300 transition">Take Quiz</Link>
//               )}
              
//               <button 
//                 onClick={handleLogout} 
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-blue-300 font-semibold transition">Login</Link>
//               <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold transition">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// // --- 2. HOME COMPONENT (With Background Image) ---
// const Home = () => (
//   <div 
//     className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
//     style={{ 
//       backgroundImage: "url('/download.jpg')", 
//       backgroundBlendMode: "overlay",
//       backgroundColor: "rgba(0, 0, 0, 0.6)" // Darkens the image so text is readable
//     }}
//   >
//     <div className="animate-fade-in-up">
//       <img src="/logo.png" alt="Logo" className="h-24 w-24 mx-auto mb-6 bg-white rounded-full p-2 shadow-2xl" />
//       <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
//         Welcome to <span className="text-yellow-400">QUIZ Spark</span>
//       </h1>
//       <p className="text-2xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
//         "Redefine Your Limits" with the ultimate platform for developers to test, learn, and grow.
//       </p>
      
//       <div className="space-x-6">
//         <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
//           Start Quiz
//         </Link>
//         <Link to="/register" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
//           Join Now
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// // --- 3. MAIN APP STRUCTURE ---
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/quiz-home" element={<QuizHome />} />
//           <Route path="/take-quiz/:id" element={<TakeQuiz />} />
//           <Route path="/leaderboard" element={<Leaderboard />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import QuizHome from './pages/Quizhome';
import TakeQuiz from './pages/TakeQuiz';
import Leaderboard from './pages/Leaderboard';
import Footer from './component/footer';

/* =========================
   NAVBAR
========================= */
const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* LOGO + NAME */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Quick Spark Logo"
            className="
              h-14 w-14 
              md:h-16 md:w-16 
              object-contain
            "
          />
          <span className="text-xl md:text-2xl font-bold text-yellow-400">
            QUIZ Spark
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center space-x-5 text-sm md:text-base">
          <Link to="/leaderboard" className="hover:text-yellow-300 font-semibold">
            🏆 Leaderboard
          </Link>

          {isLoggedIn ? (
            <>
              {userRole === 'Admin' && (
                <Link to="/admin-dashboard" className="hover:text-blue-300 font-semibold">
                  Admin Panel
                </Link>
              )}

              {userRole === 'User' && (
                <Link to="/quiz-home" className="hover:text-green-300 font-semibold">
                  Take Quiz
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg font-bold transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-300 font-semibold">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg font-bold transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

/* =========================
   HOME
========================= */
const Home = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
    style={{
      backgroundImage: "url('/download.jpg')",
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0,0,0,0.65)',
    }}
  >
    <div>
      <img
        src="/logo.png"
        alt="Quick Spark Logo"
        className="h-64 w-64 mx-auto mb-4 object-contain drop-shadow-2xl"
      />

      <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
        Welcome to <span className="text-yellow-400">QUIZ Spark</span>
      </h1>

      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Redefine your limits with the ultimate platform to test, learn, and grow.
      </p>

      <div className="space-x-6">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-lg font-bold py-2.5 px-8 rounded-full transition"
        >
          Start Quiz
        </Link>

        <Link
          to="/register"
          className="border-2 border-white text-lg font-bold py-2.5 px-8 rounded-full hover:bg-white hover:text-gray-900 transition"
        >
          Join Now
        </Link>
      </div>
    </div>
  </div>
);

/* =========================
   APP
========================= */
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/quiz-home" element={<QuizHome />} />
        <Route path="/take-quiz/:id" element={<TakeQuiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
