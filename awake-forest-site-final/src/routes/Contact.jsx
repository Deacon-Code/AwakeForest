import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GenericProjectsHeader from '../components/GenericProjectsHeader';
import useScrollToTop from '../hooks/useScrollToTop';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    useScrollToTop();
  return (
    <div>
      <Navbar />
        <GenericProjectsHeader
            heading="Contact"
            text=""
            backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blumenwiese_bei_Obermaiselstein05.jpg/1200px-Blumenwiese_bei_Obermaiselstein05.jpg"/>
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact
