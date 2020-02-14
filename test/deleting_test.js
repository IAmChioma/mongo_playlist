const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Deleting Record in a Collection', function(){

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

    it('Deletes a record', function(done){
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result === null);
            done();
        });
    });

});
});