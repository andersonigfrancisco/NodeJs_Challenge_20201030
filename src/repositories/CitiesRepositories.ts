import {EntityRepository,Repository,getConnection} from 'typeorm';
import {Cities} from '../models/Cities';

@EntityRepository(Cities)
class CitiesRepositories extends Repository<Cities>{

  async execute(query:string)
  {
    return getConnection().query(query)
  }
}
export {CitiesRepositories}

