import { getData } from './getData.js';

const wishList = ['idd055', 'idd060', 'idd075', 'idd100'];
const cartList = [
  {
    id: 'idd015',
    count: 3
  },
  {
    id: 'idd086',
    count: 2
  },
  {
    id: 'idd057',
    count: 1
  }
];

export const loadData = () => {
  if (location.search) {
    const search = decodeURI(location.search);
    const prop = search.split('=')[0].substring(1);
    console.log('prop: ', prop);
    const value = search.split('=')[1];
    console.log('value: ', value);

    if (prop === 's') {
      getData.search(value, data => console.log(data));
    } else if (prop === 'wishlist') {
      getData.wishList(wishList, data => console.dir({ wishList: data }));
    } else if (prop === 'cat' || prop === 'subcat') {
      getData.category(prop, value, data => console.log(data));
    }
  }

  if (location.hash) {
    getData.item(location.hash.substring(1), data => console.log(data));
  }

  if (location.pathname.includes('cart')) {
    getData.cart(cartList, data => console.log(data));
  }
};