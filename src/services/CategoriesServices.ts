import {getCustomRepository} from 'typeorm';
import {CategoriesRepositories} from '../repositories/CategoriesRepositories';

interface ICategoriesRequest
{
  name: string;
}


class CategoriesServices
{
  async Create({name}:ICategoriesRequest)
  {
    
    const CategoriesRepository = getCustomRepository(CategoriesRepositories);
    
    
    if(!name)
    {
      throw new Error("name incorrect")
    }
    
    const FlavorAlreadyExists = await CategoriesRepository.findOne({name,});

    if(FlavorAlreadyExists)
    {
      throw new Error("Categories already exists")
    }

    const Flavor =  CategoriesRepository.create({name});
    const sms = await CategoriesRepository.save(Flavor);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return Flavor;
  }


  async list(){
    const userRepositories = getCustomRepository(CategoriesRepositories);

    const Flavor = await userRepositories.find();

    if(!Flavor)
      throw new Error("Categories does not exists");
      
    return  Flavor;
  }

  async delete(id:string)
  {
    const CategoriesRepository = getCustomRepository(CategoriesRepositories);

    const CategoriesreadyExists = await CategoriesRepository.findOne({id,});

    if(!CategoriesreadyExists)
    {
      throw new Error("Categories not exists")
    }

    await CategoriesRepository.delete(id);

      
    return  CategoriesreadyExists;
  }

  async update(prop:string,{name}:ICategoriesRequest)
  {
    
    const CategoriesRepository = getCustomRepository(CategoriesRepositories);
    
    const Categories =  CategoriesRepository.update(prop,{name});

    if(!Categories)
    {
      throw new Error("add error")
    }  
    return Categories;
  }
}

export {CategoriesServices}