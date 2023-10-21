const router = require('express').Router()
import {getUserById, postUser} from "../controllers/user"

    router.get('/:id', getUserById)
    router.post('/:id', postUser)

module.exports = router;