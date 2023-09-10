import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListNameWork } from 'src/list-name-work/list-name-work.model';
import { NameWork } from 'src/name-work/name-work.model';
import { NameList } from './name-list.model';
import { NameListController } from './name_list.controller';
import { NameListService } from './name_list.service';

@Module({
  controllers: [NameListController],
  providers: [NameListService],
  imports: [SequelizeModule.forFeature([NameWork, NameList, ListNameWork])],
  exports: [],
})
export class NameListModule {}
