const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn

const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal' }
//for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable

function makeArray() 
{
    let makeArrayCount = 0;
    if(arguments.length > 0)
    {
        let scope = 10
        makeArrayCount++
        console.log(arguments.length)
        for(let z=0; z< arguments.length; z++)
        {
            let k= 9
            scope++
            makeArrayCount++
            animalObj
        }
        
    }
    return Array.from(arguments);
    

}

function Sum()
{
    let i = 0
   for(let k = 0; k< arguments.length; k++)
    {
        i = i + arguments[k]        
    }
    return i
}

console.log(Sum(1,2,3,4,5,6,7,8))


    console.log( makeArray(1, 2, 3) ); // [ 1, 2, 3 ]