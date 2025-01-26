import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GenericProjectsHeader from '../components/GenericProjectsHeader';
import useScrollToTop from '../hooks/useScrollToTop';
import ResourcesList from '../components/ResourcesList';

const Resources = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
        <GenericProjectsHeader
            heading="Resources"
            text=""
            backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blumenwiese_bei_Obermaiselstein05.jpg/1200px-Blumenwiese_bei_Obermaiselstein05.jpg"/>
        <ResourcesList />
        <Footer />
    </div>
  )
}

export default Resources
