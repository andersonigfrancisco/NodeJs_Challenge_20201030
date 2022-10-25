import {getCustomRepository} from 'typeorm';
import {CitiesRepositories} from '../repositories/CitiesRepositories';

interface IUCitiesRequest
{
  name: string;
  PurchasePlaces_id: string;
}


class CitiesServices
{
  async Create({name,PurchasePlaces_id}:IUCitiesRequest)
  {
    
    const CitiesRepository = getCustomRepository(CitiesRepositories);
    
    
    if(!name)
    {
      throw new Error("name incorrect")
    }
    
    const CitieslreadyExists = await CitiesRepository.findOne({name});

    if(CitieslreadyExists)
    {
      throw new Error("PurchasePlaces already exists")
    }

    const Cities =  CitiesRepository.create({name,PurchasePlaces_id});
    
    const sms = await CitiesRepository.save(Cities);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return Cities;
  }


  async list()
  {
    const CitiesRepository = getCustomRepository(CitiesRepositories);

    const  Cities = await CitiesRepository.find({
      relations:["PurchasePlaces"]
    });

    if(! Cities)
      throw new Error("Cities does not exists");
      
    return   Cities;
  }

  async delete(id:string)
  {
    const CitiesRepository = getCustomRepository(CitiesRepositories);

    const CitiesAlreadyExists = await CitiesRepository.findOne({id,});

    if(!CitiesAlreadyExists)
    {
      throw new Error("PurchasePlaces not exists")
    }

    await CitiesRepository.delete(id);

      
    return  CitiesAlreadyExists;
  }

  async update(prop:string,{name,PurchasePlaces_id}:IUCitiesRequest)
  {
    
    const CitiesRepository = getCustomRepository(CitiesRepositories);
    
    const Cities =  CitiesRepository.update(prop,{name,PurchasePlaces_id});

    if(!Cities)
    {
      throw new Error("add error")
    }  
    return Cities;
  }
}

export {CitiesServices}
