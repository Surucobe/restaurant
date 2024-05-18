import createElement from '../util/index'

function menuContent(data) {
  const menu = createElement('div');
  menu.classList.add('menu-content');

  data.forEach(plate => {
    const menuItem = createElement('div');
    menuItem.classList.add('menu-item-card');

    menuItem.appendChild(createElement('img')).src = plate.image;
    const menuItemDescription = menuItem.appendChild(createElement('div'));
    menuItemDescription.appendChild(createElement('h1')).innerHTML = plate.title;
    menuItemDescription.appendChild(createElement('p')).innerHTML = plate.description;

    menu.appendChild(menuItem);
  })

  return menu;
}

export default menuContent;