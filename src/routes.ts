import {Router } from 'express';

import {UsersController} from './controllers/UsersController';
import {CategoriesController} from './controllers/CategoriesController';
import {PurchasePlacesController} from './controllers/PurchasePlacesController';
import {AuthenticateUserController} from './controllers/AuthenticateUserController';
import {CitiesController} from './controllers/CitiesController';



const router = Router();

const userController = new UsersController();
const authenticateUserController = new AuthenticateUserController();
const categoriesController = new CategoriesController();
const citiesController = new CitiesController();



const purchasePlacesController = new PurchasePlacesController();



router.get("/list-user",userController.list);
router.post("/create-user",userController.handle);
router.delete("/delete-user",userController.delete);
router.delete("/update-user",userController.update);
router.post("/login",authenticateUserController.handle)



router.get("/list-categories",categoriesController.list);
router.post("/create-categories",categoriesController.handle);
router.delete("/delete-categories",categoriesController.delete);
router.put("/update-categories",categoriesController.update);

router.get("/list-purchasePlaces",purchasePlacesController.list);
router.post("/create-purchasePlaces",purchasePlacesController.handle);
router.delete("/delete-purchasePlaces",purchasePlacesController.delete);
router.put("/update-purchasePlaces",purchasePlacesController.update);

router.get("/list-cities",citiesController.list);
router.post("/create-cities",citiesController.handle);
router.delete("/delete-cities",citiesController.delete);
router.put("/update-cities",citiesController.update);





export {router}