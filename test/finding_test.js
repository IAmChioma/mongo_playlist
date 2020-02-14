const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Finding Record in a Collection', function(){

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

    it('finds a record', function(done){
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario')
            done();
        });
    });

    it('finds a record by ID', function(done){
        MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });
});