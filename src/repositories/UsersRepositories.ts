import {EntityRepository,Repository} from 'typeorm';
import {Users} from '../models/users';

@EntityRepository(Users)
class UsersRepositories extends Repository<Users>{}

export {UsersRepositories}