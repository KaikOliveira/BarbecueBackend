import express from 'express';

import db from '../data/database';
import ServicesUsers from '../services/ServicesUsers';

const router = express.Router();

router.get('/list', (req, res) => {
  const service = new ServicesUsers(db);

  service.listar().then(rsp => res.json(rsp));
});

router.post('/user', (req, res) => {
  const service = new ServicesUsers(db);

  console.log(req.body);
  service
    .create(req.body)
    .then(() => res.status(201).send('sucesso'))
    .catch(err => {
      res.status(400).send(err);
      console.log(err);
    });
});

export default router;
