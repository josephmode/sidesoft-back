import express from 'express';
import { getMarketInfo} from '../Controllers/CoinMarketController.js'

const router = express.Router();

router.get('/',getMarketInfo);

export default router;