import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListNameWork } from 'src/list-name-work/list-name-work.model';
import { NameList } from 'src/name_list/name-list.model';
import { ScopeWork } from 'src/scope-work/scope-work.model';
import { TableAddingData } from 'src/table-adding-data/table-adding-data.model';
import { TypeWork } from 'src/type-work/type-work.model';
import { TypeWorkModule } from 'src/type-work/type-work.module';
import { User } from 'src/user/user.model';
import { AuthModule } from '../auth/auth.module';
import { ObjectTypeWork } from './objects-type_work.model';
import { ObjectsController } from './objects.controller';
import { Objects } from './objects.model';
import { ObjectsService } from './objects.service';

@Module({
  controllers: [ObjectsController],
  providers: [ObjectsService],
  imports: [
    forwardRef(() => TypeWorkModule),
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([
      Objects,
      TypeWork,
      ObjectTypeWork,
      ScopeWork,
      NameList,
      User,
      TableAddingData,
      ListNameWork,
    ]),
  ],
  exports: [ObjectsService],
})
export class ObjectsModule {}
