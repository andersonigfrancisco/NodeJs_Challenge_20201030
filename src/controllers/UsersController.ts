import {Request,Response} from 'express';
import {UsersServices} from '../services/UsersServices'


class UsersController
{
  async handle(request:Request,response:Response)
  {
    const createUserService = new UsersServices();

    const {name,email,admin,password} = request.body;
    
    const user = await createUserService.Create({name, email, admin,password});
    
    return response.json(user);
  }

  async delete(request:Request,response:Response)
  {
    const createUserService = new UsersServices();

    const {id} = request.body;
    
    const user = await createUserService.delete(id);
    
    return response.json(user);
  }

  async list(request:Request,response:Response)
  {
    const createUserService = new UsersServices();

    const user = await createUserService.list();


    return response.json(user);
  }

  async update(request:Request,response:Response)
  {
    const createUserService = new UsersServices();

    const {id,name,email,admin,password} = request.body;
    
    const Users = await createUserService.update(id,{name,email,admin,password});
    
    return response.json(Users);
  }
}

export {UsersController};