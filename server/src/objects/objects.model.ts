import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ScopeWork } from 'src/scope-work/scope-work.model';
import { TypeWork } from 'src/type-work/type-work.model';
import { ObjectTypeWork } from './objects-type_work.model';

interface ObjectsAttr {
  name: string;
  address: string;
}

@Table({ tableName: 'objects', paranoid: true })
export class Objects extends Model<Objects, ObjectsAttr> {
  @ApiProperty({ example: '1', description: 'Идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'Зеландия', description: 'Название' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @ApiProperty({ example: 'г. Москва', description: 'Адрес' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;
  @ApiProperty({ example: '12.01.2099', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @BelongsToMany(() => TypeWork, () => ObjectTypeWork)
  typeWorks: TypeWork[];

  @HasMany(() => ScopeWork)
  scopeWorks: ScopeWork[];
}
