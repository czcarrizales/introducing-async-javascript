// Synchronous Programming Example
const firstName = 'Chazz'
const greeting = `Hello, my name is ${firstName}`
console.log(greeting)

// The browser steps through the program one line at a time.
// This is synchronous programming.

// The problem with long-running synchronous programming is
// that the program will be unresponsive until certain lines
// completely finish.

// Event handlers are a form of asynchronous programming.

// A callback is a function that's passed into another
// function, and the callback will be called at the right
// time. Using too many callbacks will result in something
// called "callback hell", where the nested callbacks
// become too much to handle. Most asynchronous APIs don't
// use callbacks, and instead use Promises.

// "Callback Hell" Example
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();