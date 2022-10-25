import {getCustomRepository} from 'typeorm';
import {UsersRepositories} from '../repositories/UsersRepositories';
import {hash} from "bcryptjs";


interface IUserRequest
{
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}


class UsersServices
{
  async Create({name, email, admin,password}:IUserRequest)
  {
    
    const userRepository = getCustomRepository(UsersRepositories);
    
    
    if(!email)
    {
      throw new Error("Email incorrect")
    }
    
    const UserAlreadyExists = await userRepository.findOne({email,});

    if(UserAlreadyExists)
    {
      throw new Error("User already exists")
    }

    const passwordhash = await hash(password,8);

    const User =  userRepository.create({name, email,admin,password:passwordhash});

    const sms = await userRepository.save(User);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return User;
  }


  async list()
  {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.find();

    if(!user)
      throw new Error("User user does not exists");
      
    return  user;
  }

  async delete(id:string)
  {
    const userRepositories = getCustomRepository(UsersRepositories);

    const UserAlreadyExists = await userRepositories.findOne({id,});

    if(UserAlreadyExists)
    {
      throw new Error("User not exists")
    }

    await userRepositories.delete(id);

    return  UserAlreadyExists;
  }

  async update(prop:string,{name, email, admin,password}:IUserRequest)
  {
    
    const userRepositories = getCustomRepository(UsersRepositories);
    
    const Users =  userRepositories.update(prop,{name});

    if(!Users)
    {
      throw new Error("add error")
    }  
    return Users;
  }
}

export {UsersServices}