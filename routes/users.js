const express = require('express')
const { getUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser } = require('../controllers/users')


const User = require('../models/User')


const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth')
const router = require('./auth')

router.use(protect)
router.use(authorize('admin'))

router.route('/')
    .get(advancedResults(User), getUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router