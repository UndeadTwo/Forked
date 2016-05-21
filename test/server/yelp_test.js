var request = require('supertest')
var app = require(__server + '/index.js')

describe("The Yelp API", function() {

  it("should result in 200", function() {
  	request(app)
  		.get('/yelp-api')
  		.expect('Content-Type', /json/)
  		.expect(200)
  		.end(function(err, res) {
  			if(err) throw err;
  		})
  })
})
