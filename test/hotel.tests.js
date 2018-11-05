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
    })

    it ('should count reviews', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.reviewCount()).equal(0)
    })

    it ('should calculate rating', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.rating()).equal(0)

        //TODO: Implement a second test when array is not empty
    })

    it ('should make start for rating', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.ratingAsStars()).equal('')
    })
    
    //hotel.urlSlug() //=> "hilton_metropole_london"



    //methods once reviews were added
    //hotel.addReview(review1)
    //hotel.addReview(review2)

    //hotel.reviews //=> [<Review>, <Review>] (an array of two javascript objects representing your reviews)
    //hotel.reviewCount() //=> 2
    //hotel.rating() //=> 3 (the average or all reviews)
    //hotel.ratingAsStars() //=> "⭐️⭐️⭐️"
});