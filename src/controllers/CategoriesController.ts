
import {Request,Response} from 'express';
import {CategoriesServices} from '../services/CategoriesServices'


class CategoriesController
{
  async handle(request:Request,response:Response)
  {
    const createCategoriesService = new CategoriesServices();

    const {name} = request.body;
    
    const Flavor = await createCategoriesService.Create({name});
    
    return response.json(Flavor);
  }

  async delete(request:Request,response:Response)
  {
    const createCategoriesService = new CategoriesServices();

    const {id} = request.body;
    
    const Flavor = await createCategoriesService.delete(id);
    
    return response.json(Flavor);
  }

  async list(request:Request,response:Response)
  {
    const createCategoriesService = new CategoriesServices();

    const Flavor = await createCategoriesService.list();

    return response.json(Flavor);
  }

  async update(request:Request,response:Response)
  {
    const createCategoriesService = new CategoriesServices();

    const {id,name} = request.body;
    
    const Flavor = await createCategoriesService.update(id,{name});
    
    return response.json(Flavor);
  }
}

export {CategoriesController};