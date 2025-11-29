import { createProduct } from '../utils/createProduct.ts';
import type { Product } from '../types.ts';

export const products: Product[] = [
  createProduct({
    title: 'Chocolate Cake',
    description: 'Rich layered chocolate cake with ganache frosting.',
    price: 24.0,
    image: '/cake.jpg',
    featured: true,
    calories: 520,
    deal: '10% off on cakes — 1st of every month',
  }),
  createProduct({
    title: 'Classic Sourdough',
    description: 'Tangy crust and open crumb, baked daily.',
    price: 6.5,
    image: '/bread.jpg',
    calories: 320,
  }),
  createProduct({
    title: 'Butter Croissant',
    description: 'Flaky, buttery layers perfect for morning.',
    price: 3.25,
    image: '/croissant.jpg',
    calories: 280,
  }),
  createProduct({
    title: 'Blueberry Tart',
    description: 'Buttery shell filled with vanilla custard and blueberries.',
    price: 18.0,
    image: 'blueberrytart.jpg',
    calories: 430,
  }),
  createProduct({
    title: 'Cinnamon Bun',
    description: 'Sticky sweet roll with cream cheese icing.',
    price: 4.5,
    image: 'cinamonnbuns.jpg',
    calories: 410,
  }),
  // New special-order featured: birthday cakes available to order
  createProduct({
    title: 'Birthday Cakes (Special Order)',
    description: 'Custom birthday cakes — flavors, sizes and designs on request. Order 3+ days in advance.',
    price: 45.0,
    image: 'birthdaycake.jpg',
    featured: true,
    calories: 680,
  }),
  // Additional menu items
  createProduct({
    title: 'Chocolate Brownie',
    description: 'Fudgy chocolate brownie with a crackly top.',
    price: 3.5,
    image: 'brownie.jpg',
    calories: 390,
  }),
  createProduct({
    title: 'Vanilla Cupcake',
    description: 'Light vanilla cupcake with buttercream frosting.',
    price: 2.75,
    image: 'vanillacupcake.jpg',
    calories: 260,
  }),
  createProduct({
    title: 'Red Velvet Slice',
    description: 'Classic red velvet with cream cheese frosting.',
    price: 5.5,
    image: 'redvelvet.jpg',
    calories: 480,
  }),
  createProduct({
    title: 'Lemon Drizzle Cake',
    description: 'Zesty lemon loaf with sugary glaze.',
    price: 7.0,
    image: 'lemondrizzlecake.webp',
    calories: 350,
  }),
  createProduct({
    title: 'Mini Cheesecake',
    description: 'Creamy mini cheesecake with biscuit base.',
    price: 4.0,
    image: 'minicheesecake.jpg',
    calories: 300,
  }),
];

export default products;
