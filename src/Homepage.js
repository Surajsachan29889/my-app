import React from 'react';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import Header from './header';
import Hero from './hero';
import './styles.css';
import Strip from './strip';
import MidContent from './mid-content';
import Social from './social';
import Form from './form';

function Homepage() {

  
  return (
    // eslint-disable-next-line no-unused-vars

    <ChakraProvider theme={theme} className="">
      {
      
          
        <div className='homepage'>     
          <Header className="header"/>
          <Hero/>
          <Strip/>
          <MidContent/>
          <Social/>
          <Form/>
        </div>
        }
    
   
    </ChakraProvider>
  );
}

export default Homepage;
