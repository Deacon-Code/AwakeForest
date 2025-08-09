import React, { useState } from "react";
import "./AccordianStyles.css";

const Accordian = () => {
	const data = [
		{
			question: "What is this meditation thing, and what’s the point?",
			answer:
				"Meditation helps us to live our lives as fully and authentically as we can in the only moment we ever really have: this one!  Most times, meditation looks like sitting down and focusing on a ‘home base’ for our attention, like the breath. Inevitably, thoughts about lunch, feelings about your exam, or worries about who you’ll take to the next date function will pop up in your head. Before you know it, you find yourself lost in thought. This moment of noticing is a victory, like a bicep curl for your brain, and it’s what the practice is all about. Be grateful that you noticed, and gently return to the breath.  As you keep practicing your awareness and start to get familiar with the patterns of your mind, you’re not living life on autopilot anymore, and you’ll have the power to start letting thoughts and emotions rise and fall instead of automatically latching onto them and being controlled by them. All around, sitting in meditation lets our minds settle, allowing us to live with more focus, peace, joy, and authenticity. ",
		},
		{
			question: "Where can I meditate on campus?",
			answer:
				"\nBelow The Pit, you’ll find the largest of the three official meditation rooms on campus. This is where our club meets! The easiest way to find it is to enter Reynolda Hall from Benson circle and walk down the staircase in front of you. Scan in, and you’ll find a safe and secluded spot that’s open to all students from 7am to 11pm, 7 days a week (hype). Feel free to bring in some earbuds and do a guided meditation, roll out a yoga mat and practice your warriors, or find a seat and follow your breath. There are tons of seating options, awesome books, relaxing bells, and more. \nOn the fourth floor of Benson, in room 404, there’s another meditation room with high windows and a stained-glass wall.\nOn the second floor of the divinity school, in room 213, you’ll find another perfect place to sit. With colorful rugs, chairs, and cushions, this room is a cozy and homey spot to sit, journal, pray, and be.\nThere’s also a beautiful outdoor spot along a creek behind Angelou, called Tohi Garden. With stumps and benches galore, all under a gorgeous canopy of trees, Tohi is a wonderful spot to enjoy some peace, quiet, and nature. \nAnywhere! Some favorite places to find a little stillness on campus are Davis field, the benches next to the chapel, or anywhere in Reynolda Village. \n",
		},
		{
			question: "What are the meetings like?",
			answer:
				"During the meetings, we sit in meditation and have discussions. They’re an opportunity to be with others who share an intention to live fully in the moment.",
		},
		{
			question: "Where can I learn more and dive in?",
			answer:
				"We have a resources page with some of our favorite books, podcasts, and guided meditations — check ‘em out and see if you like anything! \n\nAwake Forest also has a lending library with some insightful reads - just email any of the club’s leaders and ask about it.",
		},
		{
			question: "Is there a commitment?",
			answer:
				"Not at all! We tend to take things one meeting (and one moment) at a time.",
		},
		{
			question: "Who is welcome?",
			answer: "Any and all students, whether undergrad or postgrad.",
		},
		{
			question: "Where can I find more information?",
			answer: "You can find more information on our resources page.",
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
		<div className="accordian-container">
			<h1>Frequently Asked Questions</h1>
			{data.map((item, index) => (
				<div key={index}>
					<button
						className={`accordion ${activeIndex === index ? "active" : ""}`}
						onClick={() => toggleAccordion(index)}>
						{item.question}
					</button>
					<div className={`panel ${activeIndex === index ? "active" : ""}`}>
						<p>{item.answer}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordian;
