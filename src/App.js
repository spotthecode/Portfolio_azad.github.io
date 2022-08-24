import logo from './logo.svg';
import './App.css';

import './style/NavBar.css'
import './style/HomePage.css'
import './style/MainPage.css'
import './style/WorksProject.css'
import './style/Footer.css'

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import WorksProject from './components/WorksProject';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <HomePage/>
    <MainPage/>
    <WorksProject/>
    <Footer/>  
  </>
  );
}

export default App;
