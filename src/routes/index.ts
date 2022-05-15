import { Router } from 'express';
import * as Pagecontroller from '../controllers/pageController';
import * as Pesquisacontroller from '../controllers/pesquisaController';

const router = Router();

router.get('/', Pagecontroller.home);
router.get('/cachorros', Pagecontroller.cachorros);
router.get('/gatos', Pagecontroller.gatos);
router.get('/peixes', Pagecontroller.peixes);

router.get('/pesquisa', Pesquisacontroller.pesquisa);

export default router;