    // 1. Function Declaration (Named Function)
    function greet() {
      console.log("Hello from a function declaration!");
    }
    greet();

    // 2. Function Expression (Anonymous Function assigned to a variable)
    const sayHi = function() {
      console.log("Hello from a function expression!");
    };
    sayHi();

    // 3. Arrow Function (ES6+)
    const add = (a, b) => {
      return a + b;
    };
    console.log("Arrow function add(2, 3):", add(2, 3));

    // 4. Immediately Invoked Function Expression (IIFE)
    (function() {
      console.log("This is an IIFE (runs immediately)");
    })();

    // 5. Arrow IIFE
    (() => {
      console.log("This is an Arrow IIFE (also runs immediately)");
    })();

    // 6. Function Constructor (Rarely used)
    const multiply = new Function('a', 'b', 'return a * b');
    console.log("Function constructor multiply(4, 5):", multiply(4, 5));

    // 7. Callback Function
    function processUserInput(callback) {
      const name = "Vedic";
      callback(name);
    }

    processUserInput(function(name) {
      console.log("Hello " + name + ", this is a callback function.");
    });

    // 8. Recursive Function
    function countdown(n) {
      if (n <= 0) {
        console.log("Done!");
        return;
      }
      console.log(n);
      countdown(n - 1);
    }
    countdown(3);