const Product = require('../models/product')
const mongoose = require('mongoose')

//mongoose.connect('localhost:27017/shopping')
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })

const products = [
    new Product({
        imagePath: 'https://store-images.s-microsoft.com/image/apps.3878.13510798886606407.62ad5451-5519-447d-9847-50690c3c1140.5e315c75-ac8b-4afe-90f7-173e47e6ab26?mode=scale&q=90&h=300&w=300',
        title: 'Video Game One',
        description: 'Awesome Game 1!!!!',
        price: 101
    }),
    new Product({
        imagePath: 'https://store-images.s-microsoft.com/image/apps.3878.13510798886606407.62ad5451-5519-447d-9847-50690c3c1140.5e315c75-ac8b-4afe-90f7-173e47e6ab26?mode=scale&q=90&h=300&w=300',
        title: 'Video Game Two',
        description: 'Awesome Game 2!!!!',
        price: 102
    }),
    new Product({
        imagePath: 'https://store-images.s-microsoft.com/image/apps.3878.13510798886606407.62ad5451-5519-447d-9847-50690c3c1140.5e315c75-ac8b-4afe-90f7-173e47e6ab26?mode=scale&q=90&h=300&w=300',
        title: 'Video Game Three',
        description: 'Awesome Game 3!!!!',
        price: 103
    })
]

const done = 0

for (let i = 0; i < products.length; i++) {


    products[i].save(() => {
        console.log('Test' + i)
            //done++

        /*if (done == products.length) {
            console.log("Exit DB Connection")
        }*/
    })


    /*products[i].save((err, result) => {
        done++
        if (done === products.length) {
            //exit()
        }
    })*/
}



function exit() {
    mongoose.disconnect()
}