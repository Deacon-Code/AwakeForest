import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './ResourcesListStyles.css';

const ResourcesList = () => {
    const bookAndDescriptions = [
        {
            title: 'Book 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            link: 'https://example.com/book1',
            img : 'https://wisdomexperience.org/wp-content/uploads/2018/10/How-to-Meditate-2015-1.jpg'
        },
        {
            title: 'Book 2',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            link: 'https://example.com/book2',
            img: 'https://wisdomexperience.org/wp-content/uploads/2018/10/How-to-Meditate-2015-1.jpg'
        },
        {
            title: 'Book 3',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nisi eget nisl hendrerit feugiat. Mauris non ex lorem. Nullam vitae accumsan est. Fusce porttitor nec turpis non fringilla. Sed semper tortor sit amet ipsum dictum, vitae tristique elit venenatis. Suspendisse sed nulla ligula. Sed tempus orci sed ligula fringilla malesuada. Mauris metus purus, tempus et ante ac, aliquam volutpat urna. Pellentesque nibh dolor, sagittis vitae ligula id, dictum malesuada orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eu eros ut mi placerat fermentum. Nulla commodo blandit bibendum. Cras sollicitudin in ante nec sollicitudin. Donec interdum vestibulum enim et accumsan. Morbi pharetra ullamcorper odio, vel porta dui consectetur et. Donec posuere viverra sem, et tincidunt ligula ultrices ut. Curabitur interdum, mauris quis elementum dictum, lorem metus blandit magna, vel aliquam justo nisi at magna. Duis in felis sit amet libero consequat tincidunt. Sed volutpat sagittis neque, eu porttitor mauris maximus faucibus. Maecenas sollicitudin purus sit amet lorem pellentesque, ut eleifend leo pellentesque. Integer tempor tristique eros non venenatis. Etiam ut feugiat nisl. Quisque varius orci sed felis gravida porttitor. Mauris nec nisl gravida, egestas risus a, accumsan massa. In lacinia nec libero ac sodales. Suspendisse potenti. Nunc eleifend ut elit vitae viverra. Mauris eget ante sed mi pellentesque rutrum feugiat ut tellus. In ultricies diam odio, sed sagittis nibh porttitor vitae. Morbi consectetur blandit neque venenatis dapibus. Nulla at faucibus metus. Phasellus vitae rhoncus tellus. Vivamus at velit mi. Morbi ornare, lorem et consequat placerat, ante lacus feugiat magna, sed fermentum lacus lorem eget felis. Praesent quis felis sit amet est lacinia congue. Vivamus dolor erat, interdum pharetra augue non, tempor efficitur nisl. Duis ornare lobortis commodo. ',
            link: 'https://example.com/book3',
            img: 'https://wisdomexperience.org/wp-content/uploads/2018/10/How-to-Meditate-2015-1.jpg'
        }
    ];
  return (
    <div className='resources-list-container'>
        <ul className = "resrources-list">
            {bookAndDescriptions.map((item, index) => (
                <li key={index} className="resource-item">
                    <div className='resource-img-container'>
                        <img src={item.img} alt={item.title} className="resource-image" />
                    </div>
                    <div className="resource-text">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ResourcesList
