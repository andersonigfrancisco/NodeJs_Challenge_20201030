import {getCustomRepository} from 'typeorm';
import {PurchasePlacesRepositories} from '../repositories/PurchasePlacesRepositories';

interface IUFlavorRequest
{
  name: string;
}


class PurchasePlacesServices
{
  async Create({name}:IUFlavorRequest)
  {
    
    const PurchasePlacesRepository = getCustomRepository(PurchasePlacesRepositories);
    
    
    if(!name)
    {
      throw new Error("name incorrect")
    }
    
    const CookiesAlreadyExists = await PurchasePlacesRepository.findOne({name});

    if(CookiesAlreadyExists)
    {
      throw new Error("PurchasePlaces already exists")
    }

    const PurchasePlaces =  PurchasePlacesRepository.create({name});
    
    const sms = await PurchasePlacesRepository.save(PurchasePlaces);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return PurchasePlaces;
  }


  async list()
  {
    
    const PurchasePlacesRepository = getCustomRepository(PurchasePlacesRepositories);

    const PurchasePlaces = await PurchasePlacesRepository.find();

    if(!PurchasePlaces)
      throw new Error("PurchasePlaces does not exists");
      
    return  PurchasePlaces;
  }

  async delete(id:string)
  {
    const PurchasePlacesRepository = getCustomRepository(PurchasePlacesRepositories);

    const CookiesAlreadyExists = await PurchasePlacesRepository.findOne({id,});

    if(!CookiesAlreadyExists)
    {
      throw new Error("PurchasePlaces not exists")
    }

    await PurchasePlacesRepository.delete(id);

      
    return  CookiesAlreadyExists;
  }

  async update(prop:string,{name}:IUFlavorRequest)
  {
    
    const PurchasePlacesRepository = getCustomRepository(PurchasePlacesRepositories);
    
    const PurchasePlaces =  PurchasePlacesRepository.update(prop,{name});

    if(!PurchasePlaces)
    {
      throw new Error("add error")
    }  
    return PurchasePlaces;
  }
}

export {PurchasePlacesServices}
