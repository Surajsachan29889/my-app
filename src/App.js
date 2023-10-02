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
<<<<<<< HEAD
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
      
=======
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2x9"
              target="_blank"
              rel="noopener noreferrer"
            >
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
>>>>>>> 48d5e5a3c4ecec754fdc409257892e6c6523c580
  );
}

export default App;
