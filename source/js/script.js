const header = document.querySelector('.header');
const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.navigation__toggle');

header.classList.remove('header--nojs');

const closeNavigation = () => {
  navigation.classList.add('navigation--closed');
  navigation.classList.remove('navigation--opened');
  header.classList.remove('header--opened');
}

const openNavigation = () => {
  navigation.classList.remove('navigation--closed');
  navigation.classList.add('navigation--opened');
  header.classList.add('header--opened');
}

const toggleNavigationMenu = () => {
  return navigation.classList.contains('navigation--closed') ? openNavigation() : closeNavigation()
}

navigationToggle.addEventListener('click', toggleNavigationMenu);
