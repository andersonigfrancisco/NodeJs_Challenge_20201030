import {getCustomRepository} from 'typeorm';
import {UsersRepositories} from "../repositories/UsersRepositories"
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';

interface IAuthenticateRequest
{
  email: string;
  password: string;
}

class AuthenticateUserService
{
  async execute({email,password}:IAuthenticateRequest)
  {
    const userRepositories = getCustomRepository(UsersRepositories); 

    const user = await userRepositories.findOne({email})

    if(!user)
    {
      throw new Error("Email incorrect")
    }
     

    const passwordMatch = await compare(password,user.password)

    if(!passwordMatch)
    {
      throw new Error("password incorrect")
    }
    const token = sign({
      email: user.email      
    },"828f93b26a718dec0962d11bd6bbd5e1",{
      subject: user.id,
      expiresIn:"1d",
      
    })
    return token;
  }
}

export {AuthenticateUserService}
