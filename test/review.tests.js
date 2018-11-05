const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review')

describe('Review', function() {

    let review1 = new Review (5, "Excellent hotel, very clean", "2018-12-17")

    it ('should instanciate', ()=>{
    expect(review1.rating).equal(5)
    expect(review1.text).equal("Excellent hotel, very clean")
    })

    //review1.date //=> A javascript Date object for 2018-12-17
    //review1.ratingAsStars() //=> "⭐️⭐️⭐️⭐️⭐"

    //var review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
    //review2.rating //=> 1
    //review2.text //=> "Terrible hotel, smelled of mice"
    //review2.date //=> A javascript Date object for 2018-01-01
    //review2.ratingAsStars() //=> "⭐️"

});