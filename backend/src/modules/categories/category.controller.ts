import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    getAllCategories(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.categoryService.getAllCategories(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<string>(null, error.status || 500, error.message || 'Error');
        }
    }

    @Get('/:id')
    getCategory(): string {
        return this.categoryService.getCategory();
    }

    @Post()
    createCategory(): string {
        return this.categoryService.createCategory();
    }

    @Put('/:id')
    updateCategory(): string {
        return this.categoryService.updateCategory();
    }

    @Delete('/:id')
    deleteCategory(): string {
        return this.categoryService.deleteCategory();
    }
}