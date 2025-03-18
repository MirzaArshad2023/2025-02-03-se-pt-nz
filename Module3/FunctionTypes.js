const sayHiExpression = function(a, b) {
    console.log('Hi');
    console.log(arguments);
    }

    function sayHiDeclaration(a, b , c) {
    console.log('Hi');
    console.log(arguments);
    }

    const sayHiArrow = (a, b, c, d) => {
    console.log('Hi');
    console.log(arguments);
    }

    sayHiDeclaration(1, 2) // [Arguments] {}
    sayHiExpression(1, 2, 3) // [Arguments] {}
    sayHiArrow(4, 5, 6, 7) // ReferenceError: arguments is not defined