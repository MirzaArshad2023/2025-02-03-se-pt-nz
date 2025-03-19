class Animal {
    constructor(name) {
    this.speed = 0; this.name = name;
    }
    run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
    }
    stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
    }
    }
class Rabbit extends Animal {
    constructor(name, earLength)
    {
        super(name)
        this.earLength = earLength
    }
    hide() { // custom function, also inherits from Animal
    console.log(`${this.name} hides!`);
    }
    stop()
    {
        super.stop();
        this.hide()
    }
    }

class Elephant extends Animal{
    stop()
    {
        super.stop()
        this.raiseleg()
    }
    raiseleg()
    {
        console.log("Raise leg")
    }
}
    let bunny = new Rabbit('bunny', 10); // bunny contains properties and methods from Animal and Rabbit
    let africanElephant = new Elephant("African")

    bunny.run(9);
    bunny.hide()
    bunny.stop()
    africanElephant.stop()