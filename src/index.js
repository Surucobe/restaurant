//TODO: implement the tab browsing (is actually easy)
//EYE: createElement and data may have performing issues or may not, my logic dictates that they won't...
import data from './data/data'

import homeContent from './pages/home';
import menuContent from './pages/menu';
import about from './pages/about';

//divide the styles for each page
import './style.css';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

const body = document.getElementById('content');

//Things i will need:
const deleteContent = () => body.removeChild(body.childNodes[0]);
const renderContent = (content) => body.appendChild(content);

homeButton.addEventListener('click', () => {
  deleteContent();
  renderContent(homeContent(data));
})

menuButton.addEventListener('click', () => {
  deleteContent();
  renderContent(menuContent(data));
})

aboutButton.addEventListener('click', () => {
  deleteContent();
  renderContent(about());
})

body.appendChild(homeContent(data));
// body.appendChild(menuContent(data));
// body.appendChild(about());