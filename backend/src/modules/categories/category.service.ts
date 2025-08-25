import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService {
    getAllCategories(): string {
        return "Get all cate";
    }

    getCategory(): string {
        return 'get cate';
    }

    createCategory(): string {
        return 'create';
    }

    updateCategory(): string {
        return 'update';
    }

    deleteCategory(): string {
        return 'deletê';
    }
}