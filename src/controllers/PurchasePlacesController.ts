
import {Request,Response} from 'express';
import {PurchasePlacesServices} from '../services/PurchasePlacesServices'


class PurchasePlacesController
{
  async handle(request:Request,response:Response)
  {
    const createPurchasePlacesService = new PurchasePlacesServices();

    const {name} = request.body;
    
    const cookies = await createPurchasePlacesService.Create({name});
    
    return response.json(cookies);
  }

  async delete(request:Request,response:Response)
  {
    const createPurchasePlacesService = new PurchasePlacesServices();

    const {id} = request.body;
    
    const cookies = await createPurchasePlacesService.delete(id);
    
    return response.json(cookies);
  }

  async list(request:Request,response:Response)
  {
    const createPurchasePlacesService = new PurchasePlacesServices();

    const cookies = await createPurchasePlacesService.list();

    return response.json(cookies);
  }

  async update(request:Request,response:Response)
  {
    const createPurchasePlacesService = new PurchasePlacesServices();

    const {id,name} = request.body;
    
    const Cookies = await createPurchasePlacesService.update(id,{name});
    
    return response.json(Cookies);
  }
}

export {PurchasePlacesController};

