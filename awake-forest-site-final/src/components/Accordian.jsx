import React, { useState } from 'react';
import './AccordianStyles.css';

const Accordian = () => {
  const data = [
    {
      question: 'What is the purpose of this website?',
      answer: 'The purpose of this website is to provide information about the Awake Forest project.',
    },
    {
      question: 'How can I get involved?',
      answer: 'You can get involved by signing up for our newsletter or volunteering.',
    },
    {
      question: 'Where can I find more information?',
      answer: 'You can find more information on our resources page.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if it's already open
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className='accordian-container'>
        <h1>Frequently Asked Questions</h1>
      {data.map((item, index) => (
        <div key={index}>
          <button
            className={`accordion ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </button>
          <div
            className={`panel ${activeIndex === index ? 'active' : ''}`}
           >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
