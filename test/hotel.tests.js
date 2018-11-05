const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')
var Review = require('../models/review')

describe('Hotel', function() {
    
    //the first hotel1 without reviews
    let hotel1 = new Hotel("Hilton Metropole", "London")
    
    //make and add some reviews to the second hotel1
    let hotel2 = new Hotel("Hilton on the Hill", "Scotland UK")
    let review1 = new Review (5, "Excellent hotel1, very clean", "2018-12-17")
    let review2 = new Review(1, "Terrible hotel1, smelled of mice", "2018-01-01")
    hotel2.addReview(review1)
    hotel2.addReview(review2)

    it ('should instanciate properly', ()=>{
        expect(hotel1.name).equal("Hilton Metropole")
        expect(hotel1.city).equal("London")
        expect(hotel1.reviews).deep.equal([])
    })

    it ('should count reviews', ()=>{
        expect(hotel1.reviewCount()).equal(0)
    })

    it ('should return 0 rating when no reviews', ()=>{
        expect(hotel1.rating()).equal(0)
    })
    it('should take an average of all ratings', () => {
        expect(hotel2.rating()).equal(3)
    })

    it ('should expect no stars when there are no reviews', ()=>{
        expect(hotel1.ratingAsStars()).equal('')
        expect(hotel2.ratingAsStars()).equal("⭐️⭐️⭐️")
    })

    it ('should return an _formatted string of the hotel1', ()=>{
        expect(hotel1.urlSlug()).equal("hilton_metropole_london")
    })

    it ('should return an _formatted string of the hotel1 with multiple spaces', ()=>{
        let hotel1 = new Hotel("Hilton Metropole", "London UK")
        expect(hotel1.urlSlug()).equal("hilton_metropole_london_uk")
    })

    it('should record reviews', ()=>{
        expect(hotel2.reviews).deep.equal([review1, review2])
        expect(hotel2.reviewCount()).equal(2)
    })

    it('should return JSON of the hotel', ()=>{
        json = {
            "name":"Hilton on the Hill",
            "city":"Scotland UK",
            "reviewCount":2,
            "rating":3,
            "ratingAsStars":"⭐️⭐️⭐️",
            "urlSlug":"hilton_metropole_london",
            "reviews":[
              {
                "rating":5,
                "text":"Excellent hotel, very clean",
                "date":"2018-12-17T00:00:00.000Z",
                "ratingAsStars":"⭐️⭐️⭐️⭐️⭐️",
              },{
                "rating":1,
                "text":"Terrible hotel, smelled of mice",
                "date":"2018-01-01T00:00:00.000Z",
                "ratingAsStars":"⭐️",
              }
            ]
          }
        expect(hotel2.toJSON()).equal(json)
    })
});