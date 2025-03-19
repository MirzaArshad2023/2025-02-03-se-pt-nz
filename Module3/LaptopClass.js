class Laptop {
    #hardDiskType = 'HDD'; // protected property, meant to be internal
    constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
    }
    getHDiskType() { return this.#hardDiskType; } // public method to access protected property
    }


    const macbook = new Laptop('Macbook Pro');

    macbook.hardDiskType = "SSD"
    console.log(macbook.brand) // public property, accessed externally from any instance
    console.log(macbook.getHDiskType()) // recommended way to access protected property