const box1 = {
    size: 'large',
    dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
    items: [ 'glasses', 'plates', 'cutlery' ]
    }
    const boxString = JSON.stringify(box1) // convert object to string
    console.log(boxString)

    const box2 = JSON.parse(boxString)
    console.log(box2)