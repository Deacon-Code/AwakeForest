import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GenericProjectsHeader from '../components/GenericProjectsHeader';
import Calendar from '../components/Calendar';
import useScrollToTop from '../hooks/useScrollToTop';
const Schedule = () => {
  useScrollToTop();
  return ( 
    <div>
      <Navbar />
        <GenericProjectsHeader
            heading="Schedule"
            text=""
            backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blumenwiese_bei_Obermaiselstein05.jpg/1200px-Blumenwiese_bei_Obermaiselstein05.jpg"/>
        <Calendar />
        <Footer />
    </div>
  )
}

export default Schedule
