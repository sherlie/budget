import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.create(dto);
  }

  @Put(':categoryId')
  update(@Param('categoryId') categoryId: string, @Body() dto: UpdateCategoryDto) {
    return this.categoriesService.update(categoryId, dto);
  }

  @Delete(':categoryId')
  @HttpCode(204)
  delete(@Param('categoryId') categoryId: string) {
    return this.categoriesService.delete(categoryId);
  }
}
