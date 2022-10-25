import {Request,Response} from 'express';
import {CitiesServices} from '../services/CitiesServices'



class CitiesController
{
  async handle(request:Request,response:Response)
  {
    const citiesServices = new CitiesServices();

    const {name,PurchasePlaces_id} = request.body;
    
    const Cities = await citiesServices.Create({name,PurchasePlaces_id});
    
    return response.json(Cities);
  }

  async delete(request:Request,response:Response)
  {
    const citiesServices = new CitiesServices();

    const {id} = request.body;
    
    const Cities = await citiesServices.delete(id);
    
    return response.json(Cities);
  }

  async list(request:Request,response:Response)
  {
    const citiesServices = new CitiesServices();

    const cookies = await citiesServices.list();

    return response.json(cookies);
  }

  async update(request:Request,response:Response)
  {
    const citiesServices = new CitiesServices();

    const {id,name,PurchasePlaces_id} = request.body;
    
    const cities = await citiesServices.update(id,{name,PurchasePlaces_id});
    
    return response.json(cities);
  }
}

export {CitiesController};

