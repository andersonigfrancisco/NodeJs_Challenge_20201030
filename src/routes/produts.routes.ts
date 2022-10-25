import { Router } from "express";



const produtsRoutes = Router();

produtsRoutes.get("/", (request, response) => {

  return response.json({message:'Ola'});
});


export { produtsRoutes };
