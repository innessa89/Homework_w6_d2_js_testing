const Park=function(name,ticketPrice){
    this.name=name;
    this.ticketPrice=ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.addDinosaur=function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.getDinosaurCount=function(){
    return this.dinosaurCollection.length;
}

Park.prototype.removeDinosaur=function(dinosaur){
    const index = this.dinosaurCollection.indexOf(dinosaur);
    if(index !==-1){
        this.dinosaurCollection.splice(index,1);
    }
}

Park.prototype.getDinosaursBySpecies=function(species){
    const dinosaurs = [];
    for(const dinosaur of this.dinosaurCollection){
        if (dinosaur.species===species){
            dinosaurs.push(dinosaur);
        }
    }
    return dinosaurs;
}

Park.prototype.removeDinosaursBySpecies=function(species){
    const dinosaursToBeRemoved = this.dinosaurCollection.filter(function(dinosaur) { 
        return dinosaur.species === species });
    for(const dinosaur of dinosaursToBeRemoved){
        this.removeDinosaur(dinosaur);
    }
}

Park.prototype.getDinosaurByHighestVisitors=function(){
    let topDinosaur;
    let topVisitorCount = 0;
    for(const dinosaur of this.dinosaurCollection){
        if (dinosaur.guestsAttractedPerDay > topVisitorCount){
            topDinosaur = dinosaur;
            topVisitorCount = dinosaur.guestsAttractedPerDay;
        }
    }
    return topDinosaur;
}

Park.prototype.getTotalVisitorsPerDay=function(){
    let totalVisitorCount = 0;
    for(const dinosaur of this.dinosaurCollection){
        totalVisitorCount += dinosaur.guestsAttractedPerDay;
    }
    return totalVisitorCount;
}

Park.prototype.getTotalVisitorsPerYear=function(){
    return this.getTotalVisitorsPerDay()*365;
}

Park.prototype.getRevenuePerYear=function(){
    return this.getTotalVisitorsPerYear()*this.ticketPrice;
}

Park.prototype.getDinosaursByDiet=function(){
    const getDinosaursByDiet={};
    for (const dinosaur of this.dinosaurCollection){
        if(getDinosaursByDiet[dinosaur.diet]){
            getDinosaursByDiet[dinosaur.diet]+=1;
        }else{
            getDinosaursByDiet[dinosaur.diet]=1;
        }
    }
    return getDinosaursByDiet
}

module.exports = Park;