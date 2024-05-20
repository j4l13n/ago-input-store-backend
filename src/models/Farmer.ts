import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Order from './Order';

@Table({
  tableName: 'farmers'
})

class Farmer extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  landSize!: number;

  @HasMany(() => Order)
  orders!: Order[];
}

export default Farmer;
