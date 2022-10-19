class Vehicle {
    constructor(sourceOfEnergy, tires, color, maxSpeed){
        this.sourceOfEnergy = sourceOfEnergy
        this.tires = tires
        this.color = color
        this.speed = 0
        this.maxSpeed = maxSpeed
    } 

    sound(){}
    speedUp(){}
    brake(){}
}

class Car extends Vehicle{
    constructor(sourceOfEnergy, tires, color, maxSpeed){
        super(sourceOfEnergy, tires, color, maxSpeed)
    }

    static sound(){
        console.log("brrrr...")
    }

    speedUp(){
        if(this.maxSpeed>this.speed){
            this.speed+=20
        }
    }

    break(){
        if(this.speed>=20){
            this.speed-=20
        }
    }
}

//const audi = new Car('Fuel', 4, "red", "250")
//audi.speedUp()
//audi.speedUp()
//audi.speedUp()
//audi.speedUp()
//audi.speedUp()
//audi.speedUp()
//audi.break()
//audi.break()
//audi.break()
//audi.break()
//audi.break()
//audi.break()
//audi.break()
//console.log(audi)
Car.sound()
Car.speed()

