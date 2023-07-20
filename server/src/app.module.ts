import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { UserDescriptionModule } from './user-description/user-description.module';
import { ObjectsModule } from './objects/objects.module';
import { TypeWorkModule } from './type-work/type-work.module';
import { ScopeWorkModule } from './scope-work/scope-work.module';
import { NameWorkModule } from './name-work/name-work.module';
import { UnitModule } from './unit/unit.module';
import { TotalVolumeModule } from './total-volume/total-volume.module';
import { ListWorkModule } from './list-work/list-work.module';
import { LogListWorkModule } from './log-list-work/log-list-work.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      timezone: '+03:00',
      models: [],
      autoLoadModels: true,
      synchronize: true,
      //sync: { force: true },
    }),
    UserModule,
    AuthModule,
    RolesModule,
    UserDescriptionModule,
    ObjectsModule,
    TypeWorkModule,
    ScopeWorkModule,
    NameWorkModule,
    UnitModule,
    TotalVolumeModule,
    ListWorkModule,
    LogListWorkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
