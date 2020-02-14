const mocha = require('mocha');
const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting records', function(){
    //Create tests
    let pat;
    it('Creates an author with sub-documents', function(done){
        pat = new Author ({
            name: 'Patrick Chalie',
            books:[{title:'Name of the winds', pages:400}]
        });
           
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Chalie'}).then(function(result){
                assert(result.books.length === 1);
                done();
            });

        
        });

    });
    it('Adds a book to an author', function(done){
        Author.findOne({name: 'Patrick Chalie'}).then(function(result){

        })
    });
})