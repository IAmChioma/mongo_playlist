const mocha = require('mocha'); // This isn't required as we have it in the package.json file
const assert =require('assert');
const MarioChar = require('../models/mariochar');

// describe tests

describe('Saving records', function(){

    //create tests
    it('Saves a record to the database', function(done){
       let char = new MarioChar({
            name: 'Bukky',
            weight: 20
      });
        char.save().then(function(){
            assert(char.isNew === false);// Means the data is no longer new beacuse it has already been saved to the DB
            done();
        });
    });
});