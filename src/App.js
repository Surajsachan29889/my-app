// App.js
import {React, useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Loading from './loading-page';
import ProjectsPage from './Project-compo/Projects';
import MainContact from './mainContact'
import Certificate from './certification/certificate';

function App() {
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.title = "Come Back";
    } else {
      document.title = "Suraj Sachan";
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to showcase the loading animation
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the duration as per your needs
  }, []);
    
// ********************************
  return (

    <div className='app'>
      {
        
    isLoading ? <Loading />: 
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<MainContact/>}/>
        <Route path='/certification' element={<Certificate/>}/>
      </Routes>
    </Router>
  }
  </div>
      
   
  );
}

export default App;
