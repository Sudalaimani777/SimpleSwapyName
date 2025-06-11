const userSwappy = prompt(`Enter Your Name to swap`);
const firstCharSlice = userSwappy.slice(0,1);
const middleCharSlice = userSwappy.slice(1,length-1)
const lastCharSlice = userSwappy.slice(length-1);

console.log(firstCharSlice);
console.log(middleCharSlice);
console.log(lastCharSlice);

const swappyName = alert(`Your Swappy name is ${lastCharSlice}${middleCharSlice}${firstCharSlice}`);
console.log(swappyName);


