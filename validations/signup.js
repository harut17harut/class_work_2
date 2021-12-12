const { body } = require('express-validator');

const create = [
    body('name')
        .notEmpty().withMessage('Field is required')
        .isLength({ min: 3 }).withMessage('Min lenght is 3 character'),
    body('gender').isIn(['male', 'female', '']),
    body('dob').notEmpty().isDate()
];

const update = [
    body('name')
        .notEmpty().withMessage('Field is required')
        .isLength({ min: 3 }).withMessage('Min lenght is 3 character'),
    body('gender').isEmpty().isIn(['male', 'female']),
    body('dob').notEmpty().isDate()
];

module.exports = {
    create,
    update
}