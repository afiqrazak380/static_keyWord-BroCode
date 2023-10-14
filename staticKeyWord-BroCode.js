// static (key word) = belongs to the class not the object
//                     properties: usefull for caches, fixed-configuration
//                     methode: useful for utility function


class Vehicle{

  static countType = 0; // static keyword is use to count the type of vehicle object created

  constructor(type){
    this.type = type,
    Vehicle.countType += 1;
  }
 
  static start(){ // static key word is used to start all engines together
    console.log("Engine is starting")
  }
}

const car = new Vehicle("car");     // new object from Vehicle class
const van = new Vehicle("van");     // new object from Vehicle class
const bus = new Vehicle("bus");     // new object from Vehicle class
const lorry = new Vehicle("lorry"); // new object from Vehicle class


console.log(Vehicle.countType); // count how many objects from Vehicle blueprint has been made

// car.start();
// van.start();

Vehicle.start(); // <- start is belong to Vehicle class
                 // this will start all vehicle engine all together