const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {


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

    it ('should return 0 rating when no reviews', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.rating()).equal(0)

        //TODO: Implement a second test when array is not empty
    })

    it ('should expect no stars when there are no reviews', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London UK")
        expect(hotel.ratingAsStars()).equal('')

        //TODO: Implement a second test when array is not empty
    })

    it ('should return an _formatted string of the hotel', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.urlSlug()).equal("hilton_metropole_london")
    })

    it ('should return an _formatted string of the hotel with multiple spaces', ()=>{
        var hotel = new Hotel("Hilton Metropole", "London UK")
        expect(hotel.urlSlug()).equal("hilton_metropole_london_uk")
    })

    


    //methods once reviews were added
    //hotel.addReview(review1)
    //hotel.addReview(review2)

    //hotel.reviews //=> [<Review>, <Review>] (an array of two javascript objects representing your reviews)
    //hotel.reviewCount() //=> 2
    //hotel.rating() //=> 3 (the average or all reviews)
    //hotel.ratingAsStars() //=> "⭐️⭐️⭐️"
});