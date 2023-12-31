import { ModelAttributeColumnOptions } from 'sequelize';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { TypeWork } from 'src/type-work/type-work.model';
import { NameWork } from './name-work.model';

@Table({ tableName: 'namework_typework' })
export class NameWorkTypeWork extends Model<NameWorkTypeWork> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  } as ModelAttributeColumnOptions)
  id: number;

  @ForeignKey(() => NameWork)
  nameWorkId: number;

  @ForeignKey(() => TypeWork)
  typeWorkId: number;
}
