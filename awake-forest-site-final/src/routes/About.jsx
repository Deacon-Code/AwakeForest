import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GenericProjectsHeader from '../components/GenericProjectsHeader';
import useScrollToTop from '../hooks/useScrollToTop';
import Description from '../components/Description';
function About() {
  useScrollToTop();
    return (
      <div>
        <GenericProjectsHeader
          heading="About Awake Forest"
          text=""
          backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blumenwiese_bei_Obermaiselstein05.jpg/1200px-Blumenwiese_bei_Obermaiselstein05.jpg"/>
        <Description />
        <Navbar />
        <Footer />
      </div>
    );
  }
  

export default About
