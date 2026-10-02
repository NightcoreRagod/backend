import {Router} from 'express';

const subscriptionRouter= Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all Subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET Subscription by ID' }));
subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE new subscription' }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE Subscription by ID' }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE Subscription by ID' }));
subscriptionRouter.get('/user/:userId', (req, res) => res.send({ title: 'GET all Subscriptions for a User' }));

export default subscriptionRouter;