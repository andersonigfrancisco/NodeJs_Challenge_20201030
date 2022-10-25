import {EntityRepository,Repository} from 'typeorm';
import {Categories} from '../models/Categories';

@EntityRepository(Categories)
class CategoriesRepositories extends Repository<Categories>{}

export {CategoriesRepositories}

