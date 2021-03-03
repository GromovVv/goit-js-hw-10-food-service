import items from '../menu.json'

import template from '../temlates/menu-items.hbs'

const menuRef = document.querySelector('.js-menu')

const markup = template(items);

menuRef.insertAdjacentHTML('beforeend', markup);