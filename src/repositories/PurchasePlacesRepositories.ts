import {EntityRepository,Repository,getConnection} from 'typeorm';
import {PurchasePlaces} from '../models/PurchasePlaces';

@EntityRepository(PurchasePlaces)
class PurchasePlacesRepositories extends Repository<PurchasePlaces>{

  async execute(query:string)
  {
    return getConnection().query(query)
  }
}
export {PurchasePlacesRepositories}

