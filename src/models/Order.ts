import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Farmer from './Farmer';

@Table({
  tableName: 'orders'
})
class Order extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fertilizerType!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  fertilizerQuantity!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  seedType!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  seedQuantity!: number;

  @ForeignKey(() => Farmer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  farmerId!: number;

  @BelongsTo(() => Farmer)
  farmer!: Farmer;
}

export default Order;
