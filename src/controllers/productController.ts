import { Request, Response } from 'express';
import { Product, ProductAttributes } from '../models/productModel';

class ProductController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const newProduct = req.body as ProductAttributes;
      const product = await Product.create(newProduct);
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const updatedProduct = req.body as ProductAttributes;
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      await product.update(updatedProduct);
      res.status(200).json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      await product.destroy();
      res.status(200).json({ message: 'Product removed successfully' });
    } catch (error) {
      console.error('Error removing product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export { ProductController };
