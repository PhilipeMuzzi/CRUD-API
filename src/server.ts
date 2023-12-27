import express, { Request, Response } from 'express';
import { ProductController } from './controllers/productController';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// s---------------------------rotas---------------------------

const productController = new ProductController();

app.get('/products', productController.getAll.bind(productController));
app.get('/products/:id', productController.getOne.bind(productController));
app.post('/products', productController.create.bind(productController));
app.put('/products/:id', productController.update.bind(productController));
app.delete('/products/:id', productController.remove.bind(productController));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
