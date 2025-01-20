import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Video from '../components/Video'; 
import Gallery from '../components/Gallery';
import IntroductionBlock from '../components/IntroductionBlock';

function Test() {
  return (
    <div>
      <h1>Test</h1>
      <Navbar />
      <Video/>
      <IntroductionBlock/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Test;