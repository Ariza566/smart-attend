// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Sidebar from './components/Sidebar.jsx';
// // import Dashboard from './pages/Dashboard.jsx';
// // import Myschedule from './pages/Myschedule.jsx';
// // import Report from './pages/Report.jsx';
// // import Profile from './pages/Profile.jsx';
// // import Topbar from './components/Topbar.jsx';
// // import './App.css';
// // import { useTheme } from "./Context/ThemeContext";

// // const App = () => {
// //   const { theme } = useTheme();

// //   return (
// //     <BrowserRouter>
// //        <div className={theme === "dark" ? "app dark" : "app"}>
// //         <Sidebar />
// //         <div className='main'>
// //           <Topbar />
// //           <Routes>
// //             <Route path='/dashboard' element={<Dashboard />} />
// //             <Route path='/myschedule' element={<Myschedule />} />
// //             <Route path='/report' element={<Report />} />
// //             <Route path='/profile' element={<Profile />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </BrowserRouter>
// //   );
// // };

// // export default App;
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Myschedule from './pages/Myschedule.jsx';
// import Report from './pages/Report.jsx';
// import Profile from './pages/Profile.jsx';
// import Topbar from './components/Topbar.jsx';
// import './App.css';
// import Teacherlogin from './components/login.jsx';
// import { useTheme } from "./Context/ThemeContext";

// const App = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <BrowserRouter>
//      <Route path="/" element={<TeacherLogin />} />
//       <div className={theme === "dark" ? "app dark" : "app"}>
//        {/* <div><Route path='/' element={<Login/>} /></div>  */}
//         <Sidebar />
//         <div className='main'>
//           <Topbar toggleTheme={toggleTheme} theme={theme} />
//           <Routes>
            
//             <Route path='/dashboard' element={<Dashboard />} />
//             <Route path='/myschedule' element={<Myschedule />} />
//             <Route path='/report' element={<Report />} />
//             <Route path='/profile' element={<Profile />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Myschedule from './pages/Myschedule.jsx';
import Report from './pages/Report.jsx';
import Profile from './pages/Profile.jsx';
import Topbar from './components/Topbar.jsx';
import './App.css';
import { useTheme } from "./Context/ThemeContext";
import TeacherLogin from "./components/login.jsx";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ Login route (NO sidebar/topbar) */}
        <Route path="/" element={<TeacherLogin />} />

        {/* ✅ Main app layout */}
        <Route path="/*" element={
          <div className={theme === "dark" ? "app dark" : "app"}>
            <Sidebar />
            <div className='main'>
              <Topbar toggleTheme={toggleTheme} theme={theme} />

              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/myschedule" element={<Myschedule />} />
                <Route path="/report" element={<Report />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>

            </div>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
