const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe("API Test", function(){

    it("should return Hello message", function(done){
        request(app)
        .get('/')
        .expect(200)
        .end(function(err,res){
            expect(res.text).to.equal("Hello from CI/CD Pipeline")
            done()
        })
    })

})
