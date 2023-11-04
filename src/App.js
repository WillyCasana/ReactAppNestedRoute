import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link, Outlet } from 'react-router-dom';

function App() {
  return (
   <Router>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<AboutTeam />}/>
          <Route path="company" element={<AboutCompany />} />
        </Route>
      </Route>
    </Routes>
   </Router>
  );
}
function Layout(){
  return(
    <div>
      <header>Header content</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer content</footer>
    </div>
  )
}

function Home(){
  return <div>Welcome my Web Site WCS</div>;
}

function About(){
  return (
    <div>
      <h2>About Us</h2>
      <nav>
        <Link to="team">Our Team</Link>
        <Link to="company">Our Company</Link>
      </nav>
      <Outlet />
    </div>
  )
}


function AboutTeam(){
  return <div>Meet our team!</div>
}
function AboutCompany(){
  return <div>Learn about our company!</div>
}
export default App;
