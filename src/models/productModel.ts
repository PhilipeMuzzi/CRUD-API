
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface ProductAttributes {
  id?: number;
  name: string;
  description?: string;
  price: number;
  category: string; 
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
  public price!: number;
  public category!: string; 

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly deletedAt!: Date | null;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
  },
  {
    sequelize,
    tableName: 'products',
 
  }
);

export { Product, ProductAttributes };
