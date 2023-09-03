const router = require('express').Router()
import getUserById from "../controllers/user"

    console.log("test")
    router.get('/:id', getUserById)

module.exports = router;