import express, { Request, Response } from 'express';
import products from '../data/products.json';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const search = req.query.search as string;

  if (search) {
    const lowerCaseSearch = search.toLowerCase();
    const filteredProducts = products.filter(product =>
      Object.values(product).some(value =>
        value.toString().toLowerCase().includes(lowerCaseSearch)
      )
    );
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});

export default router;
