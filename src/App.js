// import logo from './logo.svg';
import './App.css';
import Blogs from './components/Blogs';
import Lectures from './components/Lectures';

import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <header className="App-header" >
       
      <Services/>
     
        <div className="" >
        
       <Portfolio/>
        
    <Blogs/>
    <Lectures/>
        </div>
      </header>
    </div>
  );
}

export default App;
