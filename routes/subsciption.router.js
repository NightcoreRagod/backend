import {Router} from 'express';

const subscriptionRouter= Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all Subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET Subscription details' }));
subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE new subscription' }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE Subscription by ID' }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE Subscription by ID' }));
subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET all Subscriptions for a User' }));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL Subscription by ID' }));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET all renewals' }));

export default subscriptionRouter;