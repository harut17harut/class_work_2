const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const UserModel = require('../models/user')
// const { StatusCodes } = require('http-status-codes');
// const { validationResult } = require('express-validator');
// const { UserService } = require('./service');
// const { Upload } = require('../common/service/upload');
const fs = require('fs');
const path = require('path');

class User {
    static UPLOAD_PATH = 'avatar';
    static AVATAR_KEY_NAME = 'avatar';

    static signup = async (req, res) => {
        return res.render('signup', {data: req.body, layout: 'layouts/blank'});
    }

    // login user
    static login = async (req, res) => {
        return res.render('index', {data: req.body, layout: 'layouts/blank'});
        // let { email, password } = req.body;

        // let user = await UserService.getByEmail(email);

        // if (user.hasOwnProperty('id')) {
        //     let isValid = bcrypt.compareSync(password, user.password);
        //     if (isValid) {
        //         let { JWT_SECRET } = process.env;
        //         let token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

        //         return res.status(StatusCodes.OK).json({
        //             code: StatusCodes.OK,
        //             data: {
        //                 token,
        //                 expireIn: 3600
        //             }
        //         })
        //     }
        // }

        // return res.status(StatusCodes.UNAUTHORIZED).json({
        //     code: StatusCodes.UNAUTHORIZED,
        //     message: "Invalid login or password"
        // })
    }

    // Get all
    static index = (req, res) => {

    }

    // Get auth user
    static auth = (req, res) => {

    }

    // Get by :id
    static show = async (req, res) => {
        // return res.status(StatusCodes.OK).json({
        //     message: 'success',
        //     data: await UserService.getByID(req.params.id)
        // });
    }

    // Create a new user
    static create = async function (req, res) {
        // let multerUpload = Upload.uploader(User.AVATAR_KEY_NAME, `${User.UPLOAD_PATH}`)

        // multerUpload(req, res, async function (err) {
        //     if (err) {
        //         console.log('Multer Error: ', err)
        //         return;
        //     }

        //     const errors = validationResult(req);

        //     if (!errors.isEmpty()) {
        //         return res.status(400).json({ errors: errors.array() });
        //     }

        //     const passwordHash = bcrypt.hashSync(req.body.password, 5)
        //     const fileName = req.file ? req.file.originalname : null;

        //     try {
        //         let data = new Promise((resolve, reject) => {
        //             connection.query('INSERT INTO `users` (`name`, `email`, `password`, `gender`, `dob`, `avatar`) VALUES (?,?,?,?,?,?)',
        //                 [req.body.name, req.body.email, passwordHash, req.body.gender, req.body.dob, fileName],
        //                 function (error, results, fields) {
        //                     if (error) reject(error);

        //                     console.table(results);
        //                     return resolve(results)
        //                 });
        //         });

        //         let results = await data;

        //         if (fileName) {
        //             const oldPath = path.join(__dirname, `../public/images/${User.UPLOAD_PATH}`);
        //             const newPath = `${oldPath}/${results.insertId}`;

        //             if (!fs.existsSync(newPath)) {
        //                 fs.mkdirSync(newPath)
        //             }

        //             fs.renameSync(`${oldPath}/${fileName}`, `${newPath}/${fileName}`)
        //         }

        //         return res.status(201).json({ message: 'success', data: { id: results.insertId } });
        //     } catch (error) {
        //         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'error', data: error });
        //     }

        //     // console.log(req.files)
        // });
    }

    // Update user by :id
    static update = function (req, res) {
        // Create a new user
    }

    // Delete user by :id
    static destroy = function (req, res) {
        // Create a new user
    }
}

module.exports = { User }