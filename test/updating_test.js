const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Updating Record in a Collection', function(){

    let char;

    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario',
            weight : 90
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

    it('Updates a record in database', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name:'Alexa'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            assert(result.name === 'Alexa');
            done();
        });
    });

    
});

it('Increments the weight by 1 in the database', function(done){
    MarioChar.updateMany({}, { $inc: {weight:1} }).then(function(){
        MarioChar.findOne({name: 'Mario'}).then(function(result){
         assert(result.weight === 91);
        done();
    });
});


});
});