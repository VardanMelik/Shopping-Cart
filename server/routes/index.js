const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const csrf = require('csurf')
const passport = require('passport')

//const csrfProtection = csrf()
const csrfProtection = csrf({ cookie: true })
router.use(csrfProtection)
    //app.use(cookieParser())

/* GET home page. */
router.get('/', function(req, res, next) {
    //let products = 
    Product.find((err, docs) => {
        let productChuncks = []
        let chunkSize = 3
        for (let i = 0; i < docs.length; i += chunkSize) {
            productChuncks.push(docs.slice(i, i + chunkSize))
        }
        res.render('shop/index', { title: 'Shopping Cart', products: productChuncks });
    })

});

router.get('/user/signup', (req, res, next) => {
    res.render('user/signup', { csrfToken: req.csrfToken() })
        //next()
})
router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

router.get('profile', (req, res, next) => {
    res.render('user/profile')
})

module.exports = router;