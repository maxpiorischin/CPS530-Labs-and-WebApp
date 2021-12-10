import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page3Part2 from './pages/page3Part2';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<Page1 />}/>
          <Route exact path="/Page2" element = {<Page2 />}/>
          <Route exact path="/Page3" element = {<Page3 />}/>
          <Route exact path="/Page3Part2" element = {<Page3Part2 />}/>
          <Route exact path="/Page4" element = {<Page4 />}/>
          <Route exact path="/Page5" element = {<Page5 />}/>
          <Route exact path="/Page6" element = {<Page6 />}/>
        </Routes>
      </Router>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           CPS530 React and Express WebApp! {"\n"}
//         </h1>
//       <BackDemo/>
//       </header>
//     </div>
//   );
// }

export default App;
