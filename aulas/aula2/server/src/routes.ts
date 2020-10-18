import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesControllers';
import uploadConfig from './config/multerConfig';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);
routes.put('/orphanages/:id', upload.array('images'), OrphanagesController.updateImage)

export default routes;