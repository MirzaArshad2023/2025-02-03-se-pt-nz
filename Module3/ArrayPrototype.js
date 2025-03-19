const arr = [] // simple empty array
console.log( Object.getPrototypeOf(arr) === Array.prototype ) // true: its prototype is Array prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(arr)) ) //inherited properties from prototype

let name1 = ""
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(name1)))

String.prototype.show = function() { // creates new 'show' function on built-in String prototype
    console.log(this);
    };
"BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype
// polyfilling for String.prototype
if (!String.prototype.repeat) { // if there's no such function in the prototype already
String.prototype.repeat = function(n) { // define a repeat function to repeat the string n times
return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
};
}
console.log( "La".repeat(3) ); // LaLaLa