const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review')

describe('Review', function() {

    let review1 = new Review (5, "Excellent hotel, very clean", "2018-12-17")

    it ('should instanciate with first example', ()=>{
    expect(review1.rating).equal(5)
    expect(review1.text).equal("Excellent hotel, very clean")
    expect(review1.date).deep.equal(new Date ('2018-12-17'))
    expect(review1.ratingAsStars()).equal('⭐⭐⭐⭐⭐')
    })



    let review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
    it ('should instanciate with second example', ()=>{
    expect(review2.rating).equal(1)
    expect(review2.text).equal("Terrible hotel, smelled of mice")
    expect(review2.date).deep.equal(new Date ('2018-01-01'))
    })//**** */

    //review2.ratingAsStars() //=> "⭐️"

});