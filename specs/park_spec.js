const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  

  beforeEach(function () {
    park=new Park("Jurassic Park",10);
    dinosaur=new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2=new Dinosaur('raptor', 'herbivore', 20);
    dinosaur3=new Dinosaur('pterodactyl', 'herbivore', 10);
    dinosaur4=new Dinosaur('dretnotus', 'omnivore', 15);
    dinosaur5=new Dinosaur('pterodactyl', 'herbivore', 40);
  })

  it('should have a name', function () {
    const expected ="Jurassic Park" ;
    assert.deepStrictEqual(park.name, expected)
  });

  it('should have a ticket price',function (){
    const expected=10;
    assert.strictEqual(park.ticketPrice,expected);
  });


  it('should have a collection of dinosaurs',function(){
    const expected=[];
    assert.deepStrictEqual(park.dinosaurCollection,expected)
  });


  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur);

    const expected = 1;
    assert.deepStrictEqual(park.getDinosaurCount(), expected)
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinosaur(dinosaur);

    park.removeDinosaur(dinosaur);

    const expected = 0;
    assert.deepStrictEqual(park.getDinosaurCount(), expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    // environment
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    //action
    const popularDinosaur = park.getDinosaurByHighestVisitors();
    //verify
    assert.deepStrictEqual(popularDinosaur, dinosaur);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);

    const dinosours=park.getDinosaursBySpecies('pterodactyl');

    const expected=2;
    assert.strictEqual(dinosours.length, expected);
  });
   
  it('should be able to calculate the total number of visitors per day', function(){
    //environment
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    //action
    const totalVisitors = park.getTotalVisitorsPerDay();
    //verify
    const expected = 135;
    assert.deepStrictEqual(totalVisitors, expected);
  });

  it('should be able to calculate the total number of visitors per year',function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    //action
    const totalVisitors = park.getTotalVisitorsPerYear();
    //verify
    const expected = 135 * 365;
    assert.deepStrictEqual(totalVisitors, expected);
  });

  it('should be able to calculate total revenue for one year',function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);

    const revenuePerYear = park.getRevenuePerYear();

    const expected = 135 * 365*10;
    assert.deepStrictEqual(revenuePerYear, expected);
  });


  it('should be able to remove a dinosaur from its collection by species',function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    
    park.removeDinosaursBySpecies('pterodactyl');

    const expected = 3;
    assert.strictEqual(park.getDinosaurCount(), expected);
  });

});