// const user = prompt("enter Your name sir");
// const userGreetings = `Hello ${user}`;
// console.log(userGreetings);

// const userLength = alert(`Your Name contains ${user.length} letters`)

const userSwappy = prompt(`Enter Your Name to swap`);
const firstNumberMethodSlice = userSwappy.slice(0,1);
const middleNumberMethodSlice = userSwappy.slice(1,length-1)
const lastNumberMethodSlice = userSwappy.slice(length-1);

console.log(firstNumberMethodSlice);
console.log(middleNumberMethodSlice);
console.log(lastNumberMethodSlice);

const swappyName = alert(`Your Swappy name is ${lastNumberMethodSlice}${middleNumberMethodSlice}${firstNumberMethodSlice}`);
console.log(swappyName);


