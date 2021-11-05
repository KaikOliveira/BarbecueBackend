import express from 'express';
import db from '../data/database';
import ServicesUsers from '../services/ServicesUsers';

const router = express.Router();

router.get('/list', (req, res) => {
  const service = new ServicesUsers(db);

  service.listar()
    .then((rsp) => res.json(rsp));
})

export default router;