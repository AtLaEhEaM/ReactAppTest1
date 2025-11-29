import type { Product } from '../types.ts';

let _nextId = 1;

export function createProduct(props: Omit<Product, 'id'> & { id?: number }): Product {
  const id = props.id ?? _nextId++;
  return {
    id,
    title: props.title,
    description: props.description,
    price: props.price,
    image: props.image,
    calories: props.calories ?? 0,
    deal: props.deal,
    ingredients: props.ingredients ?? [],
    steps: props.steps ?? [],
    featured: props.featured ?? false,
  };
}

export default createProduct;
