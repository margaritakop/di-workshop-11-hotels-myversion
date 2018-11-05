const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {

    //var hotel = new Hotel("Hilton Metropole", "London")
    //hotel.name //=> "Hilton Metropole"
    //hotel.city //=> "London"
    //hotel.reviews //=> []
    //hotel.reviewCount() //=> 0
    //hotel.rating() //=> 0
    //hotel.ratingAsStars() //=> ''

    it ('should instanciate properly', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.name).equal("Hilton Metropole")
        expect(hotel.city).equal("London")
        expect(hotel.reviews).deep.equal([])
        expect(hotel.reviewCount()).equal(0)
        expect(hotel.rating()).equal(0)
        expect(hotel.ratingAsStars()).equal('')
    })
    
    //hotel.urlSlug() //=> "hilton_metropole_london"



    //methods:
    //hotel.addReview(review1)
    //hotel.addReview(review2)

    //hotel.reviews //=> [<Review>, <Review>] (an array of two javascript objects representing your reviews)
    //hotel.reviewCount() //=> 2
    //hotel.rating() //=> 3 (the average or all reviews)
    //hotel.ratingAsStars() //=> "⭐️⭐️⭐️"
});