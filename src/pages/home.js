import createElement from '../util/index'

import testBanner from '../../assets/images/test_banner_image.png';

function homeContent(data){
  const home = document.createElement('div');
  home.classList.add('home-content');

  const homeBanner = createElement('div');
  homeBanner.classList.add('banner');
  const bannerTitle = document.createElement('h1');
  bannerTitle.innerHTML = 'The greastes food from monster hunter directly to your plate';
  const bannerImage = new Image;
  bannerImage.src = testBanner;
  homeBanner.appendChild(bannerTitle);
  homeBanner.appendChild(bannerImage);

  home.appendChild(homeBanner);
  data.forEach(plate => {
    if(plate.featured){
      const featuredDish = createElement('div');

      featuredDish.classList.add('home-featured-content');
      const featureDishesDescription = featuredDish.appendChild(createElement('div'));
      featureDishesDescription.appendChild(createElement('h2')).innerHTML = 'Featured dish for today';
      featureDishesDescription.appendChild(createElement('p')).innerHTML = 'Description of the featured dish for today';
      featuredDish.appendChild(featureDishesDescription);
      featuredDish.appendChild(createElement('img')).src = plate.image;

      home.appendChild(featuredDish);
    }
  })

  return home;
}

export default homeContent