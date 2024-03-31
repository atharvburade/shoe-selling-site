import {shoe} from './app/shared/models/shoe';
import { Tag } from './app/shared/models/Tag';

export const sample_shoes: shoe[] = [
  {
    id:'1',
    name: 'Womens Pepperoni',
    delieryTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/shoe-1.jpg',
    tags: ['Mens', 'Womens', 'Kids'],
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    delieryTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/shoe-2.jpg',
    tags: ['Duncks', 'Kids'],
  },
  {
    id:'3',
    name: 'Funky',
    price: 5,
    delieryTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/shoe-3.jpg',
    tags: ['Mens', 'Funky'],
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    delieryTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/shoe-4.jpg',
    tags: ['Mens', 'Jordan'],
  },
  {
    id:'5',
    name: 'Chicken Killer',
    price: 11,
    delieryTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/shoe-5.jpg',
    tags: ['Duncks', 'Killer'],
  },
  {
    id:'6',
    name: 'Vegetables Womens',
    price: 9,
    delieryTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/shoe-6.jpg',
    tags: ['Mens', 'Womens', 'Kids'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Mens', count: 4 },
  { name: 'Womens', count: 2 },
  { name: 'Kids', count: 3 },
  { name: 'Duncks', count: 2 },
  { name: 'Funky', count: 1 },
  { name: 'Jordan', count: 1 },
  { name: 'Killer', count: 1 },
]