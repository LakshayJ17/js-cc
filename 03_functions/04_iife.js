//  IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// Function immediately executes
// Because of problem to gloabl scope pollution , we use IIFE to handle it
(function chai(){
    console.log(`DB CONNECTED`);
})();

// If two IIFE and no semi colon, second IIFE will give error
// Semicolon is needed to stop the IIFE 

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
})('Lakshay')

