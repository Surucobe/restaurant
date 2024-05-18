import createElement from '../util/index'

function about() {
  const about = createElement('div');
  about.classList.add('about-text-description');

  about.appendChild(createElement('h2')).innerHTML = `Welcome to "Hunters' Haven: Where Gastronomy Meets Adventure!"`
  about.appendChild(createElement('p')).innerHTML = `Embark on a culinary quest like no other at Hunters' Haven, where we bring the thrilling world of Monster Hunter to your plate. Inspired by the epic adventures of hunters and the awe-inspiring monsters they encounter, our restaurant offers an immersive dining experience that will transport you to the fantastical realms of the New World.`
  about.appendChild(createElement('p')).innerHTML = `At Hunters' Haven, we pride ourselves on crafting dishes that capture the essence of the hunt. From savory "Wyvern Wings" to hearty "Rathalos Roasts," each item on our menu is carefully curated to pay homage to the diverse ecosystem of Monster Hunter. Our chefs skillfully blend flavors from across the lands, creating dishes that are as bold and adventurous as the hunters themselves.`
  about.appendChild(createElement('p')).innerHTML =`But the excitement doesn't end with the food! Step into our restaurant and find yourself surrounded by decor inspired by the rich lore of Monster Hunter. From towering replicas of iconic monsters to immersive soundscapes that transport you to the heart of the hunt, every detail is designed to ignite your sense of adventure.`
  about.appendChild(createElement('p')).innerHTML =`And for those looking to test their skills, our "Hunters' Arena" awaits. Gather your fellow hunters and challenge yourselves to thrilling hunts in our interactive gaming area. `
  about.appendChild(createElement('p')).innerHTML = `Whether you're facing off against fearsome beasts or teaming up to tackle epic quests, the camaraderie and excitement are sure to make your dining experience truly unforgettable.`
  about.appendChild(createElement('p')).innerHTML = `So join us at Hunters' Haven, where every meal is an adventure waiting to unfold. Whether you're a seasoned hunter or a newcomer to the world of Monster Hunter, there's always something exciting waiting for you here.`

  return about;
}

export default about;