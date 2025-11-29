export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string; // path under /public, e.g. '/chocolate-cake.jpg'
  calories?: number; // calories per serving or per item
  deal?: string; // optional short deal text, e.g. '10% off on 1st of month'
  ingredients?: string[];
  steps?: string[];
  featured?: boolean;
};

