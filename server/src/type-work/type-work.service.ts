import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { forwardRef } from '@nestjs/common/utils';
import { InjectModel } from '@nestjs/sequelize';
import { ObjectsService } from 'src/objects/objects.service';
import { CreateTypeWorkDto } from './dto/create-type-work.dto';
import { TypeWork } from './type-work.model';

@Injectable()
export class TypeWorkService {
  constructor(
    @InjectModel(TypeWork) private typeWorkRepository: typeof TypeWork,
  ) {}

  async checkOneObjectByName(name: string) {
    try {
      const object = await this.typeWorkRepository.findOne({
        where: {
          name,
        },
      });
      if (object) {
        return true;
      }
      return false;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllTypeWork() {
    try {
      const objects = this.typeWorkRepository.findAll({
        where: {
          deletedAt: null,
        },
        include: { all: true },
      });
      if (!objects) {
        throw new HttpException(
          'Не удалось получить список',
          HttpStatus.BAD_REQUEST,
        );
      }

      return objects;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllTypeWorkInObject(idObject: number) {
    try {
      const objects = this.typeWorkRepository.findByPk(idObject, {
        include: {
          all: true,
          where: {
            deletedAt: null,
          },
        },
      });
      if (!objects) {
        throw new HttpException(
          'Не удалось получить список',
          HttpStatus.BAD_REQUEST,
        );
      }

      return objects;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createTypeWork(dto: CreateTypeWorkDto) {
    try {
      const isType = await this.checkOneObjectByName(dto.name);
      if (isType) {
        throw new HttpException(
          'Тип с таким наименованием существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      const typeWork = await this.typeWorkRepository.create(dto);
      if (!typeWork) {
        throw new HttpException(
          'Неудалось создать наименование',
          HttpStatus.BAD_REQUEST,
        );
      }
      return typeWork;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
