import Express from 'express'
import * as TodoController from '../controller/todo'

const router = Express.Router()

// todo routes
router.post('/', TodoController.create)
router.get('/', TodoController.getAll)
router.get('/:id', TodoController.getById)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.deleteById)

export default router
