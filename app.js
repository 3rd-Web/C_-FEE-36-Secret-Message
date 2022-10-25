let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length);

secretMessage.pop();
// console.log(secretMessage); // step 1

// console.log(secretMessage.length); // step 2

secretMessage.push('to', 'Program'); // step 3
// console.log(secretMessage);

// console.log(secretMessage.indexOf('easily'));

secretMessage[7] = 'right'; // step 4
// console.log(secretMessage);

secretMessage.shift(); // step 5
// console.log(secretMessage); 

secretMessage.unshift('Programming'); // step 6
// console.log(secretMessage);

secretMessage.splice(6,5, 'know'); // step 7 - Working
// console.log(secretMessage);

console.log(secretMessage.join(' '));

// prints Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program
